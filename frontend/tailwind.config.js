/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {

      },
      keyframes: {

      }
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#1eb2a6",
      font_one: "#07294d",
      font_two: "#323232",
      fadeWhite: "#F8F8F8",
      transparent_blur: "rgba(255, 255, 255, 0.2)",
    },
    screens: {
      'smallPhone': '320px', // Phone - portrait
      'largePhone': '480px', // Phone - landscape + portrait
      'smallTablet': '600px', // Small tablet - portrait
      'mediumTablet': '768px', // Large tablet - portrait
      'largeTablet': '1024px', // Large tablet - landscape
      'desktop': '1280px', // Desktop
      'wideScreen': '1440px', // Wide Screen Desktop
    },
  },
  plugins: []
}
