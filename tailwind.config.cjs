const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  safelist: [
    'from-cyan-200', 'via-cyan-400', 'to-cyan-500', 'bg-cyan-300',
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
