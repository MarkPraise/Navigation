/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/index.js"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Epilogue", sans-serif'],
      },
      colors:{
        'primary-white':"hsl(0,0,98%)",
        'primary-dark':"hsl(0,0,8%)",
        'primary-gray':"hsl(0,0,41%)"
      }
    },
  },
  plugins: [],
}

