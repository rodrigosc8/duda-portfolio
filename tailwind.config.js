/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#f7d9de",
        cherry: "#dd1c5d",
        cherryDark: "#a51446",
        ink: "#5b2b45",
        paper: "#fffaf8",
        vanilla: "#fff6ef",
        mint: "#d9e5da",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        paper: "0 16px 36px rgba(103, 45, 68, 0.14)",
        polaroid: "0 20px 30px rgba(94, 30, 60, 0.18)",
        sticker: "0 10px 18px rgba(69, 22, 43, 0.18)",
      },
      backgroundImage: {
        "soft-paper":
          "radial-gradient(circle at top, rgba(255,255,255,0.8), rgba(255,250,248,0.96))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--asset-rotate, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(calc(var(--asset-rotate, 0deg) + 1deg))" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
