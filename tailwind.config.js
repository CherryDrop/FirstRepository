/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
    extend: {
      colors: {
        primary: {
          light: '#F9A826',
          DEFAULT: '#F58244',
          dark: '#C0540D',
          text: '#ffffff',
        },
        secondary: {
          light: '#3D96AE',
          DEFAULT: '#267B8E',
          dark: '#1B5760',
          text: '#ffffff',
        },
        neutral: {
          light: '#F1F1F1',
          DEFAULT: '#999999',
          dark: '#333333',
          text: '#ffffff',
        },
        background: {
          DEFAULT: '#F1F1F1',
          dark: '#222222',
          text: '#333333',
          card: {
            DEFAULT: '#ffffff',
            text: '#333333',
          },
          cardSecondary: {
            DEFAULT: '#F1F1F1',
            text: '#333333',
          },
          modal: {
            DEFAULT: '#ffffff',
            text: '#333333',
          },
          titleBox: {
            DEFAULT: '#F58244',
            text: '#ffffff',
          },
        },
        border: {
          light: '#E8E8E8',
          DEFAULT: '#CCCCCC',
          dark: '#999999',
        },
        shadow: {
          light: '#F1F1F1',
          DEFAULT: '#E8E8E8',
          dark: '#999999',
        },
      },
    },
  },
  plugins: [],
}
