module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-atyp': ['atyp-display-trial', 'sans-serif'], 
        'custom-kido': ['atyp-kido-trial', 'sans-serif'], 
        'kumbh': ['kumbh-sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-primary': '#F58220', 
        'custom-atyp': '#231F20',
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
