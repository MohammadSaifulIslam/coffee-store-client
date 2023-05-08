/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
        primary: "#3b2b2b",
        secondary: "#F4F3F0",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "light"
  ],
  plugins: [require("daisyui")],
}

