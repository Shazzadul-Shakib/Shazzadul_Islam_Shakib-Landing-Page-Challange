/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prC1: "#FFE6AD",
        prC2: "#6C63FF",
        txtD1: "#383838",
        txtD2: "#545454",
        txtL1: "#FFFFFF",
        crdBD1: "#FED29C",
        crdBD2: "#EE8388",
        crdBD3: "#FFC3C6",
        crdBD3L1: "#FFEAD0",
        crdBD3L2: "#FFF9F1",
        carBg: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
