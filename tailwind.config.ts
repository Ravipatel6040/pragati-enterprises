import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16140F",
        cream: "#F7F3EA",
        plum: {
          DEFAULT: "#4A1942",
          light: "#6B2B60",
          dark: "#320F2C",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#D4B483",
          dark: "#8C6D3F",
        },
        sage: "#7C8B6F",
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
