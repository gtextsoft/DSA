import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CampaignEmbed from '@/components/CampaignEmbed'
import { CAMPAIGNS, CAMPAIGN_SLUGS, type CampaignSlug } from '@/lib/campaigns'
import { createPageMetadata } from '@/lib/metadata'

type PageProps = {
  params: { campaign: string }
}

function getCampaign(slug: string) {
  if (!(slug in CAMPAIGNS)) return null
  return CAMPAIGNS[slug as CampaignSlug]
}

export const dynamicParams = false

export function generateStaticParams() {
  return CAMPAIGN_SLUGS.map((campaign) => ({ campaign }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const campaign = getCampaign(params.campaign)
  if (!campaign) return {}

  return createPageMetadata({
    title: campaign.title,
    description: campaign.description,
    path: `/${params.campaign}`,
  })
}

export default function CampaignPage({ params }: PageProps) {
  const campaign = getCampaign(params.campaign)
  if (!campaign) notFound()

  return (
    <CampaignEmbed
      src={campaign.src}
      title={campaign.title}
      description={campaign.description}
    />
  )
}
