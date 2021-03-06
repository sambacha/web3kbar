module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './containers/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'bg-black',
      'text-white',
      'from-pink-300',
      'via-purple-300',
      ' to-indigo-400',
      'from-pink-500',
      'via-red-500',
      'to-yellow-500',
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        red: '0 25px 50px -12px #EF4444',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
