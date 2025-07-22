/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-l": {
          100: "#d7ffeb", 
          300: "#76ffbb",
          500: "#09de76",
        },
        "primary": {
          50: "#eefff5",
          100: "#d7ffeb",
          200: "#b2ffd8",
          300: "#76ffbb",
          400: "#33f596",
          500: "#09de76",
          600: "#00bf62",
          700: "#04914d",
          800: "#0a7140",
          900: "#0a5d37",
          950: "#00341d",
        },
        "primary-dark": {
          50: "#eefff5",
          100: "#d7ffeb",
          200: "#b2ffd8",
          300: "#76ffbb",
          400: "#33f596",
          500: "#09de76",
          600: "#00bf62",
          700: "#04914d",
          800: "#0a7140",
          900: "#0a5d37",
          950: "#00341d", 
        },
        danger: {
          100: "#EF4444",
        },
        icons: {
          100: "#C4C6CE",
        },
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
