const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.200'),
          'h2,h3,h4': {
            color: theme('colors.gray.100'),
            'scroll-margin-top': spacing[32],
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
}
