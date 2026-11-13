/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#D4AF37',
        'gold-light': '#F9E2AF',
        'gold-dark': '#996515',
        'deep-navy': '#0A1128',
        'royal-blue': '#001F3F',
        'accent-red': '#E63946',
        'sky-blue': '#87CEEB',
        'powder-blue': '#B0E0E6',
        'light-blue': '#E0F6FF',
        'dark-blue': '#4682B4',
        'text-dark': '#2C3E50',
        'text-light': '#7F8C8D',
        'navy-soft': '#111B3D',
        'mist': '#F1F3F8',
      },
      fontFamily: {
        'sans': ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        'inter': ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'playfair': ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 38s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 