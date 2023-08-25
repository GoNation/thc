const {
  primaryColor,
  secondaryColor,
  backgroundColor,
  darkColor,
  lightColor,
  tertiaryColor,
} = require('./config');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
