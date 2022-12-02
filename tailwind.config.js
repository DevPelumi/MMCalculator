/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#488bb5",

          secondary: "#edc287",

          accent: "#f4a09f",

          neutral: "#2F222F",

          "base-100": "#F6F3F7",

          info: "#5591CE",

          success: "#13635C",

          warning: "#FCD040",

          error: "#FD7A63",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
