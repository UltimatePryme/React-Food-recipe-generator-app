/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'my-orange': '#FF6700',
      'my-lime': '#7AA802',
      'my-green': '#293800',
      'my-white': '#ffffff',
      'my-lightgreen': '#F3F8E7',
      'nav-grey': '#F0F0F0',
      'nav-orange': '#ff8300',
      'nav-Darkgrey': '#53565A',
      'my-black': '#000000',
    },
    fontFamily: {
      'Inter': "Inter"
    },
  plugins: [],
  }
}