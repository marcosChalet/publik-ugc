/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,handlebars}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        appear: "appear 2s ease-in",
      },
    },
  },
  plugins: [],
};
