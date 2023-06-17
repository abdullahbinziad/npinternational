/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
      },
      colors: {
        np: "#FDB400",
      },
    },
  },
  plugins: [require("daisyui")],
};
