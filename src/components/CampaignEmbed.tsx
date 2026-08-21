import PaymentDesk from '@/components/PaymentDesk'

type CampaignEmbedProps = {
  src: string
  title: string
  description?: string
}

export default function CampaignEmbed({ src, title, description }: CampaignEmbedProps) {
  if (src.startsWith('https://safpayment.vercel.app')) {
    return <PaymentDesk description={description} />
  }

  return (
    <>
      <header className="sr-only">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>
      <iframe
        src={src}
        title={title}
        className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
        allow="payment; clipboard-write"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  )
}
