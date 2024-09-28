/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        introbg : "url('/assets/intro_bg.png')",
        navbg : "url('/assets/navbg.png')",
        direction : "url('/assets/direction.png')",
      },
      fontFamily: {
        Blinker: ['Blinker','sans-serif'],
        Conne : ['Comme','sans-serif']
      },
    },
  },
  plugins: [],
};
