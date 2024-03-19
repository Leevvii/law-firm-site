import daisyui from "./node_modules/daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["business"],
  },
};
