type CampaignEmbedProps = {
  src: string
  title: string
}

export default function CampaignEmbed({ src, title }: CampaignEmbedProps) {
  return (
    <iframe
      src={src}
      title={title}
      className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
      allow="payment; clipboard-write"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
