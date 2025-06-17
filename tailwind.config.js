/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        spinSlow: 'spin 10s linear infinite',
        float: 'float 3s ease-in-out infinite',
        sideToSide: 'sideToSide 2s ease-in-out infinite', // ✅ New animation
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sideToSide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }, // 🎯 Or try 5px for even subtler effect
        },
      },
    },
  },
  plugins: [],
};
