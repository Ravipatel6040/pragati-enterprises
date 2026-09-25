import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161D16", // Deep forest green/black
        cream: "#FFFFFF", // Pure white
        plum: { // Now acting as vibrant Leaf Green
          DEFAULT: "#2CA138",
          light: "#41B84D",
          dark: "#1B7824",
        },
        brass: { // Now acting as Sun Yellow/Gold
          DEFAULT: "#F3BA16",
          light: "#FCD048",
          dark: "#C79505",
        },
        sage: "#79664D", // Earthy Brown (roots)
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
