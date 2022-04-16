const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
		extend: {}
	},

	plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
