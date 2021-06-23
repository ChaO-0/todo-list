module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Josefin Sans'],
      },
      colors: {
        light: 'hsl(235, 19%, 35%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
