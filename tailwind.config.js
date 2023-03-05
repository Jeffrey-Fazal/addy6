module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    mytheme: {
      "primary": "#2716a3",
      "secondary": "#cc6aed",
      "accent": "#efc199",
      "neutral": "#1C1F26",
      "base-100": "#E6E8EA",
      "info": "#6C8AE5",
      "success": "#1FA863",
      "warning": "#F0B638",
      "error": "#F94D78",      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
