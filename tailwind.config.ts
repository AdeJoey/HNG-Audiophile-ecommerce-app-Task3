// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#D87D4A",
        "light-orange": "#FBAF85",
        "almost-black": "#101010",
        "light-gray": "#F1F1F1",
        "very-light-gray": "#FAFAFA",
        error: "#CD2C2C",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.107em",
        wider: "0.071em",
      },
      screens: {
        tablet: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
