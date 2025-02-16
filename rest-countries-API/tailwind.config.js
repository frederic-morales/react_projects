/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBG: "hsl(207, 26%, 17%)",
        white: "hsl(0, 0%, 100%)",
        veryLigthGray: "hsl(0, 0%, 98%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
      },
    },
  },
  plugins: [],
  // darkMode: ["selector", '[data-mode="dark"]'],
  darkMode: "class",
};
