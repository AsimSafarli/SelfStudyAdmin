import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  
      colors: {
        'main-color-50':'#E7EFFF',
        'main-color-100': '#b5ceff',
        'main-color-200': '#91B7FF',
        'main-color-300': '#5E96FE',
        'main-color-400': '#3F81FE',
        'main-color-500': '#0F62FE',
        'main-color-600': '#0E59E7',
        'main-color-700': '#0B46B4',
        'main-color-800': '#08368C',
        'main-color-900': '#06296B',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
