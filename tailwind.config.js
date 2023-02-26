module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      zIndex: {},
      fontSize: {},
      colors: {
        green: '#11ac3a',
        red: '#e33920',
        yellow: '#dfb230',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
