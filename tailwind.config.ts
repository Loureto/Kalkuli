import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: "#202123",
          darkBlue: "#5536DA",
          darkGreen: "#37732A",
          bright: "#444654",
          brightGray: "#ECECF1",
          brightGreen: "#D0FFC5",
          grayIcons: "#C5C5D1",
          grayFootprint: "#9A9B9F",
          lightGreen: "#9DD990",
          accentGreen: "#5BC046",
          middle: "#343541",
          lightYellow: "#F2FF56",
        },
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
