/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'backdrop': "linear-gradient(90deg, black 0%, transparent 60%), url('/backdrop.jpg')"
      },
    },
  },
}

