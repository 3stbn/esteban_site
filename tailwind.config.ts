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
        main: "#3B3737",
        link: "#1D3A8C",
      },
      boxShadow: {
        // flat shadow with 0 blur
        flat: "-15px 15px 0px 0px #3B3737",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
