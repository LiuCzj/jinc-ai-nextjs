import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-light": "var(--text-light)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      fontFamily: {
        mono: ["Fira Code", "Cascadia Code", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;