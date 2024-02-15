/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lightGray: "#212121",
        blueFire: "#5055FF",
        lightGrayPlus: "#353535",
        lightGrayItem: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
