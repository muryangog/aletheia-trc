import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aletheia: {
          blue: "#1B305B", // Le bleu sombre du texte
          green: "#4CAF50", // Le vert de la flamme/feuille
          light: "#F8FAFC", // Un gris-blanc pour les fonds de page
        },
      },
    },
  },
  plugins: [],
};
export default config;
