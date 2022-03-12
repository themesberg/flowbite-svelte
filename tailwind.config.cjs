const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    colors: {
      'ebony': '#0E172A',
      'bigstone': '#173242',
    },
		extend: {}
	},

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
