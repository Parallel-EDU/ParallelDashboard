/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'nav' : '0px 4px 25.5px 0px #0000001A'
      },
      screens: {
        'hamburger': '980px',
        'bigscreen': '1360px',
        'biggerscreen': '1441px',
        'smalllaptop': '1186px',
        'smallphone': '380px',
        'smallerphone': '368px',
      },
    },
  },
  plugins: [],
};
