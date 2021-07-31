module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
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
        blueFilter: 'hsl(220, 98%, 61%)',
        lightGray: 'hsl(236, 9%, 61%)',
        desaturatedDarkBlue: 'hsl(235, 24%, 19%)',
        darkBlue: 'hsl(235, 21%, 11%)',
        lightGrayishBlue: 'hsl(234, 39%, 85%)',
        darkGrayishBlue: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
