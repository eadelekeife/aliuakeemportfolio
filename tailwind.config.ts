import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        accent: "#FFC107"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        offWhite: "#CCCFCA",
        accent: "#FFC107"
      },
      gridTemplateColumns: {
        "1/2": "1fr 1.5fr",
        "2/1": "2fr 1fr",
        "1.5/1": "1.5fr 1fr",
        "1/2/1": "1fr 2fr 1fr"
      }
    },
  },
  plugins: [],
} satisfies Config;
