/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#F58220', 
        'custom-green': '#34A853',
        'custom-floral-white': '#FFFAF5',
        'custom-footer-black': '#011016',
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [], 
};
