// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#7c3aed",
      },
      backgroundImage: {
        "frost-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.06))",
      },
    },
  },
  plugins: [],
};
