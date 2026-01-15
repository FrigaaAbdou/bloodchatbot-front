/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(225,29,72,0.35)" },
          "50%": { boxShadow: "0 0 0 20px rgba(225,29,72,0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "hero-glow": {
          "0%": {
            opacity: "0.45",
            transform: "translate3d(-12%, -8%, 0) scale(1)",
            filter: "blur(110px)",
          },
          "50%": {
            opacity: "0.7",
            transform: "translate3d(10%, 6%, 0) scale(1.08)",
            filter: "blur(150px)",
          },
          "100%": {
            opacity: "0.45",
            transform: "translate3d(-10%, -6%, 0) scale(1)",
            filter: "blur(110px)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-down": "fade-down 0.9s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.8s ease-out infinite",
        "scale-in": "scale-in 0.45s ease-out forwards",
        heroGlow: "hero-glow 14s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
}
