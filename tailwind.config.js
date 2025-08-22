// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "0%": { borderColor: "#facc15 transparent transparent transparent" },
          "25%": { borderColor: "transparent #facc15 transparent transparent" },
          "50%": { borderColor: "transparent transparent #facc15 transparent" },
          "75%": { borderColor: "transparent transparent transparent #facc15" },
          "100%": { borderColor: "#facc15 transparent transparent transparent" },
        },
      },
      animation: {
        "border-spin": "border-spin 2s linear infinite",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
