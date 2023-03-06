
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    fontFamily: {
      "display" : ["Noto Sans","sans-serif"],
      "body" : ["Noto Sans","sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
