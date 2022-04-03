module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
    // daisyUI config (optional)
    daisyui: {
      themes: ["luxury", "garden"],
      darkTheme: "luxury"
    },
}