import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsL: ["Poppins-Light", "sans-serif"],
        poppinsR: ["Poppins-Regular", "sans-serif"],
        poppinsSB: ["Poppins-SemiBold", "sans-serif"],
        poppinsB: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
