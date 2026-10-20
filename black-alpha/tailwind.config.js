/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#3C12D4",

          "secondary": "#03E5FC",

          "accent": "#f471b5",

          "primary-gradiant-from":"#2167e8",

          "secondary-gradiant-to":"#12b883",

          "neutral": "#2a323c",

          "base-100": "#1d232a",

          "info": "#0ca6e9",

          "success": "#2bd4bd",

          "warning": "#f4c152",

          "error": "#fb6f84",

          // "base-content":"#fff"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}