export const PAYMENT_OPTIONS = [
  {
    id: 'usd',
    flag: 'USD',
    symbol: '$',
    title: 'Pay in Dollars',
    description: 'International card checkout through Stripe.',
    cta: 'Continue to Stripe',
    href: 'https://buy.stripe.com/dRm5kE6JUeS61VB8794c800',
  },
  {
    id: 'ngn',
    flag: 'NGN',
    symbol: '₦',
    title: 'Pay in Naira',
    description: 'Local checkout through Paystack. Enter your amount on the next screen.',
    cta: 'Continue to Paystack',
    href: 'https://paystack.shop/pay/w8-627khsm',
  },
  {
    id: 'eur',
    flag: 'EUR',
    symbol: '€',
    title: 'Pay in Euros',
    description: 'European card checkout through Stripe.',
    cta: 'Continue to Stripe',
    href: 'https://buy.stripe.com/cNi9AS36xf1ngEIb2vcAo2k',
  },
] as const

export const BANK_TRANSFER = {
  accountNumber: '1224921557',
  accountName: 'SA Consulting & Investment Ltd',
  bank: 'Zenith Bank',
  receiptEmail: 'products@stephenakintayo.com',
} as const
