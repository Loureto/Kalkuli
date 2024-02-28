import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [nextui()],
} satisfies Config;

export default config;
