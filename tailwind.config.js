module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'main-teal': 'rgba(60, 187, 180, 1)',
        'dark-teal': 'rgba(60, 187, 180, .8)',
        'main-yellow': 'rgba(249, 173, 29, 1)',
        'dark-yellow': 'rgba(249, 173, 29, .8)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
