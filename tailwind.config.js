module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImages:(theme)=>({
       'dog-img':"url('assets/images/leftArrow.svg')"
      }),
    },
  },
  plugins: [],
}
