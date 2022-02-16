module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Now Display', 'sans-serif'],
      },
      backgroundImage: {
        'split-white-gray': "linear-gradient(to right, white 50% , #F8F6F6 50%);",
        'experimental-background':"url('assets/images/exp01.jpg')"
      },
      colors: {
        'light-gray': '#F8F6F6',
        'dark-gray': '#565656',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
