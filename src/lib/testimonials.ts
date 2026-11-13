export type Testimonial = {
  name: string
  role: string
  quote: string
  /**
   * Photo of the person, e.g. '/images/testimonials/adaeze-okafor.jpg'.
   * Save the file in public/images/testimonials/ and put its path here.
   * Portrait photos (4:5) look best. Leave empty to show the person's initials.
   */
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Adaeze Okafor',
    role: 'Real Estate Developer, Lagos',
    quote:
      "Dr. Akintayo's mentorship helped me structure my first land banking deal. Within 18 months I closed three profitable transactions.",
    image: '',
  },
  {
    name: 'James Mitchell',
    role: 'CEO, Mitchell Capital Group',
    quote:
      'The investment frameworks I learned at his masterclass transformed how our firm evaluates real estate opportunities across Africa and the diaspora.',
    image: '',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Entrepreneur & SA University Graduate',
    quote:
      'His coaching gave me clarity on building multiple income streams. I went from employee to business owner with a clear wealth-building roadmap.',
    image: '',
  },
  {
    name: 'David Emeka',
    role: 'Business Owner, Abuja',
    quote:
      'Attending the Business Growth Conference was a turning point. The strategies were practical, actionable, and immediately applicable to my company.',
    image: '',
  },
]
