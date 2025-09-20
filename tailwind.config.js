/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 45px -15px rgba(56, 189, 248, 0.35)",
      },
    },
  },
  plugins: [],
};
