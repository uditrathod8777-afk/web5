/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bg-main": "#080A0C",
        "bg-secondary": "#101114",
        "bg-section": "#0C0D10",
        "bg-card": "#141518",
        "bg-card-elevated": "#191A1E",
        // Text
        "text-primary": "#F5F3F0",
        "text-secondary": "#A5A5AA",
        "text-muted": "#77777D",
        // Accents
        bronze: "#A66C45",
        copper: "#B87952",
        "luxury-gold": "#C58B55",
        "warm-gold": "#D69A69",
        teal: "#0D7775",
        // Borders
        border: "#29272A",
        "border-hover": "#65503F",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "Inter", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      backgroundImage: {
        "bronze-gradient": "linear-gradient(135deg, #75472F, #A66C45, #D69A69)",
        "dark-metallic": "linear-gradient(135deg, #19191E, #08090B)",
        "teal-gradient": "linear-gradient(135deg, #073F40, #0D7775)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-bronze": "glow-bronze 3s ease-in-out infinite alternate",
        "glow-teal": "glow-teal 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-bronze": {
          "0%": { boxShadow: "0 0 20px rgba(166, 108, 69, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(166, 108, 69, 0.6)" },
        },
        "glow-teal": {
          "0%": { boxShadow: "0 0 20px rgba(13, 119, 117, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(13, 119, 117, 0.6)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
