import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ECF7FD",
          100: "#D3EBF9",
          200: "#A7D6F3",
          300: "#7BC1ED",
          400: "#5BA3D0",
          500: "#3D86B4",
          600: "#2F6A92",
          700: "#234F6E",
          800: "#17354A",
          900: "#0C1C28"
        }
      }
    }
  },
  plugins: []
};

export default config;
