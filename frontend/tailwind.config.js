const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primaryColor: "#090910",
        primaryColorHovered: "#12121F",
        secundaryColor:  "#FF2D20",
        containerColor: "#1F2230",
        bodyColor: "#171923",
        borderColor: "#B5B5BD",
        fontColor: "#C9D1D9"
      }
    },
  },
  plugins: [],
}
