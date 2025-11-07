import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
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
