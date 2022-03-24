module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        gold: "#FA9C27",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
