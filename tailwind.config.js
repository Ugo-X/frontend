/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
      },
      screens: {
        xl: "1224px",
      },
    },
    extend: {
      colors: {
        'primary': "#4A25A7",
        'primary-light': "#8866DD",
        'secondary': "#F66B3C",
      },
      fontFamily: {
        dg: ['Darker Grotesque', 'sans-serif'],
      },
      fontSize: {
        64: "64px",
        56: "56px",
        48: "48px",
        32: "32px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
        10: "10px",
        8: "8px",
      },
    },
  },
  plugins: [],
}

