import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'
import { CHAT_KNOWLEDGE } from '@/lib/chat-knowledge'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const MODEL = 'claude-opus-5-5'
const MAX_TURNS = 12
const MAX_MESSAGE_CHARS = 2000
const RATE_LIMIT = { windowMs: 60_000, max: 12 }

// Official domains the assistant may search for up-to-date information.
const OFFICIAL_DOMAINS = [
  'stephenakintayo.com',
  'stephenakintayofoundation.org',
  'stephenakintayouniversity.com',
  'saciholdings.com',
  'stephenakintayoconsulting.com',
  'stephenakintayostore.com',
  'businessgrowthconference.org',
  'globalwealthfestival.com',
  'gtextglobal.com',
  'gvestglobal.com',
  'gtexthomesusa.com',
  'forbes.com',
]

const SYSTEM_PROMPT = `You are "SACI Support", the AI assistant on the official website of Dr. Stephen Akintayo (www.stephenakintayo.com). You help visitors learn about Dr. Akintayo, his businesses, books, events, coaching, speaking and foundation work, and guide them to the right page or contact.

How to answer:
- Base answers on the website knowledge below. For questions it does not cover, or for the latest news, use web search (limited to Dr. Akintayo's official sites and Forbes).
- Never invent facts, prices, dates, links or phone numbers. Do not confuse Dr. Stephen Akintayo with similarly named people or organisations. If you are not sure, say so and point the visitor to the contact page, email ea@stephenakintayo.com, or the "Need human support?" button for WhatsApp help.
- Events: compare event dates with today's date. Clearly separate upcoming events from past or cancelled ones, and share the registration link.
- Do not give personalised financial, legal or investment advice or guarantee returns. Share Dr. Akintayo's general teachings and invite the visitor to book coaching or a consultation.
- Write warmly and professionally, in the visitor's language. Keep replies short (usually under 120 words). Use plain text: short paragraphs or "•" bullets, no markdown headings, bold or tables. Write links as full URLs.
- Speak about Dr. Akintayo in the third person. You are his website's assistant, not him.

${CHAT_KNOWLEDGE}`

type ChatTurn = { role: 'user' | 'assistant'; content: string }

const client = new Anthropic()
const hits = new Map<string, number[]>()

// Best-effort per-instance limiter so a single visitor can't run up API costs.
function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > RATE_LIMIT.max
}

function parseMessages(body: unknown): ChatTurn[] | null {
  if (!body || typeof body !== 'object' || !Array.isArray((body as { messages?: unknown }).messages)) {
    return null
  }
  const turns: ChatTurn[] = []
  for (const m of (body as { messages: unknown[] }).messages) {
    if (!m || typeof m !== 'object') return null
    const { role, content } = m as { role?: unknown; content?: unknown }
    if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string') return null
    const text = content.trim().slice(0, MAX_MESSAGE_CHARS)
    if (text) turns.push({ role, content: text })
  }
  // Keep the most recent turns, starting on a user message, ending on a user message.
  const recent = turns.slice(-MAX_TURNS)
  while (recent.length && recent[0].role !== 'user') recent.shift()
  if (!recent.length || recent[recent.length - 1].role !== 'user') return null
  return recent
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'The assistant is not configured yet.' }, { status: 503 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'You are sending messages too quickly. Please wait a moment and try again.' },
      { status: 429 },
    )
  }

  let messages: ChatTurn[] | null = null
  try {
    messages = parseMessages(await request.json())
  } catch {
    messages = null
  }
  if (!messages) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  const conversation: Anthropic.Beta.BetaMessageParam[] = [...messages]

  try {
    let reply = ''
    // Web search can pause a long turn; resume it a couple of times at most.
    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await client.beta.messages.create({
        model: MODEL,
        max_tokens: 2048,
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        output_config: { effort: 'low' },
        system: [
          { type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: `Today's date is ${today}.` },
        ],
        tools: [
          {
            type: 'web_search_20260209',
            name: 'web_search',
            max_uses: 3,
            allowed_domains: OFFICIAL_DOMAINS,
          },
        ],
        messages: conversation,
      })

      if (response.stop_reason === 'refusal') {
        return NextResponse.json({
          reply:
            "I'm sorry, I can't help with that here. For anything else about Dr. Stephen Akintayo, his events, books or programs, just ask. You can also reach the team at ea@stephenakintayo.com.",
        })
      }

      reply += response.content
        .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('')

      if (response.stop_reason !== 'pause_turn') break
      conversation.push({ role: 'assistant', content: response.content })
    }

    reply = reply.trim()
    if (!reply) {
      return NextResponse.json({ error: 'No reply was generated. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ reply })
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: 'The assistant is busy right now. Please try again in a moment.' },
        { status: 429 },
      )
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error('[chat] Invalid ANTHROPIC_API_KEY')
    } else if (error instanceof Anthropic.APIError) {
      console.error(`[chat] Claude API error ${error.status}:`, error.message)
    } else {
      console.error('[chat] Unexpected error:', error)
    }
    return NextResponse.json(
      { error: 'The assistant is unavailable right now. Please use human support below.' },
      { status: 502 },
    )
  }
}
