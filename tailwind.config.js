module.exports = {
  content: [
    "./components/**/*.vue",
    "./slices/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: 'Lato, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: "Lora, serif",
    },
    extend: {
      colors: {
        primary: "#1478B3",
        maroon: "#991b1b",
        "dark-maroon": "#521514",
        "dark-blue": "#093753",
        "light-gold": "#F1E5AC",
        "light-gray": "#f2f4f3",
      },
      spacing: {
        80: "20rem",
        108: "27rem",
        160: "40rem",
      },
      inset: {
        "-16": "-4rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      boxShadow: {
        "outline-green": "0 0 0 3px rgba(5,202,160, 0.8)",
      },
      minHeight: {
        16: "4rem",
        20: "5rem",
        40: "10rem",
      },
      maxHeight: {
        "45vh": "45vh",
        "50vh": "50vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
