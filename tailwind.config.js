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
        blueCheck: 'hsl(192, 100%, 67%)',
        purpleCheck: 'hsl(280, 87%, 65%)',
        completed: 'hsl(236, 33%, 92%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
