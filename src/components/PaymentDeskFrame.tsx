'use client'

import { useEffect, useState } from 'react'

type PaymentDeskFrameProps = {
  src: string
  title: string
  description?: string
}

function rewritePaymentHtml(html: string, origin: string) {
  const base = origin.replace(/\/$/, '')

  return html
    .replaceAll('href="styles.css"', `href="${base}/styles.css"`)
    .replaceAll("href='styles.css'", `href="${base}/styles.css"`)
    .replaceAll('src="script.js"', `src="${base}/script.js"`)
    .replaceAll("src='script.js'", `src="${base}/script.js"`)
    .replaceAll('src="assets/', `src="${base}/assets/`)
    .replaceAll("src='assets/", `src='${base}/assets/`)
    .replace(/<a(\s[^>]*href="https?:\/\/[^"]+"[^>]*)>/gi, (_match, attrs: string) => {
      if (/target=/i.test(attrs)) {
        return `<a ${attrs.replace(/target=(['"]).*?\1/i, 'target="_blank"')}>`
      }
      return `<a ${attrs} target="_blank">`
    })
}

export default function PaymentDeskFrame({ src, title, description }: PaymentDeskFrameProps) {
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const origin = new URL(src).origin
    let cancelled = false

    fetch(src)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load payment desk')
        return response.text()
      })
      .then((html) => {
        if (!cancelled) setSrcDoc(rewritePaymentHtml(html, origin))
      })
      .catch(() => {
        if (!cancelled) setSrcDoc('')
      })

    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <>
      <header className="sr-only">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>
      <iframe
        srcDoc={srcDoc || undefined}
        src={srcDoc ? undefined : src}
        title={title}
        className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
        allow="payment *; clipboard-write *; fullscreen *"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  )
}
