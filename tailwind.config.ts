import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#FBF8EC", lime: "#D6DE23", ink: "#111111", card: "#ECE9E0" },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-mont)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0) rotate(0)" }, "50%": { transform: "translateY(-24px) rotate(8deg)" } },
      },
      animation: { marquee: "marquee 20s linear infinite", float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
