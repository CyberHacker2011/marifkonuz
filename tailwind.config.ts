import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '124': '31rem',
        '192': '48rem',  
        '256': '64rem',
        '300': '75rem',  
      },
    },
  },
  plugins: [],
} satisfies Config;
