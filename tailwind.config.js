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

  theme: {
    extend: {
      screens: {},
      fontFamily: {
        sans: ['BenchNine', 'sans-serif'],
        sansSerif: ['Noto San', 'system-ui'],
        display: ['BenchNine', 'sans-serif'],
        body: ['Noto San', 'sans-serif'],
        wedding: ['Great Vibes', 'cursive'],
      },
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        dark: darkColor,
        lighter: lightColor,
        background: backgroundColor,
        light: lightColor,
        tertiary: tertiaryColor,
        forestGreen: '#4F7942',
        forestGreenLight: '#4F7942',
        forestGreenDark: '#3D6430',
      },
      gridTemplateColumns: {
        masonry: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
