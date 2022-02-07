const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#edeef2',
          200: '#83878d',
          300: '#23262b',
          400: '#1c1e20',
          500: '#151719',
        },
        red: '#f8545e',
        yellow: '#eab308',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(.2,.6,.35,1)',
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.200'),
          h1: {
            fontSize: 36,
            marginTop: '0',
            lineHeight: 1.5,
            fontWeight: 700,
            marginBottom: 32,
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32],
          },
          h2: {
            fontSize: 24,
            marginTop: 48,
            fontWeight: 700,
            marginBottom: 24,
            lineHeight: 1.33,
            color: theme('colors.gray.100'),
          },
          h3: {
            fontSize: 20,
            marginTop: 32,
            fontWeight: 700,
            marginBottom: 12,
            lineHeight: 1.6,
            color: theme('colors.gray.100'),
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
}
