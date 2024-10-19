import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: " #DF6951",
        secondary: "#F1A501",
       
        navText: "#212832",
        lightBlue: " #181E4B",
        lightGray: "#5E6282",
        lightGrayAlt: "#686D77",
        white: "#FFFFFF",
        title: "#14183E",
        subTitle: "#1E1D4C",
        lightBlack: "#080809",
        lightGrayAlt2: "#84829A",
        lightPink: "#BA79DF"
      },
      borderRadius: {
        slight: "0.625rem",
        normal: "0.3125rem",
        medium: "1.5rem",
        extraLarge: "8.0625rem",
      },
    },
  },
  plugins: [],
};
export default config;
