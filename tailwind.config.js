module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        'blue': '#2F80ED',
        'dark-blue': '#2B74D6',
        'gray': '#4F4F4F',
        'gray51': '#828282',
        'gray74': '#BDBDBD',
        'gray77': '#C4C4C4',
        'gray88': '#E0E0E0',
        'gray95': '#F2F2F2',
        'dark-gray': '#333333',
        'light-gray': '#F8F8F8',
        'purple': '#8785FF',
        'dark-purple': '#9B51E0',
        'light-purple': '#EEDCFF',
        'rajah': '#F8B76B',
        'red': '#EB5757',
        'gold': '#E5A443',
        'cream': '#FCEED3',
        'green': '#43B78D',
        'light-green': '#D2F2EA'
      },
    },
  },
  plugins: [],
};
