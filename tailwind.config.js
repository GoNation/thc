const {
  primaryColor,
  secondaryColor,
  backgroundColor,
  darkColor,
  lightColor,
  tertiaryColor,
} = require('./config');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  //   options: {
  //     safelist: [
  //       'grid',
  //       'grid-cols-1',
  //       'grid-cols-2',
  //       'md:grid-cols-2',
  //       'md:gap-8',
  //     ], // add classes here that you want to ensure aren't purged
  //   },

  safelist: [
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'md:grid-cols-2',
    'md:gap-8',
    'gap-0',
    'md:py-30',
    'p-0',
    'md:p-8',
    'md:p-4',
    'md:pb-4',
    'md:px-4',
    'md:py-4',
    'py-24',
    'text-center',
  ], // add classes here that you want to ensure aren't

  theme: {
    extend: {
      screens: {},
      fontFamily: {
        sans: ['BenchNine', 'sans-serif'],
        sansSerif: ['Noto San', 'system-ui'],
        display: ['BenchNine', 'sans-serif'],
        body: ['Noto San', 'sans-serif'],
      },
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        dark: darkColor,
        lighter: lightColor,
        background: backgroundColor,
        light: lightColor,
        tertiary: tertiaryColor,
      },
      gridTemplateColumns: {
        masonry: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
