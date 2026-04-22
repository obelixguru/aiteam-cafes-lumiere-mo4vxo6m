import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roast: "#1A120B",
        lumiere: "#E85D04",
        grain: "#8B5E3C",
        cream: "#FAFAF7",
        foam: "#E6DCD3",
        bark: "#3D1F0D",
        smoke: "#9E8C7B",
        fresh: "#2D6A4F",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
