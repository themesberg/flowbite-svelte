const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcss_import = require('postcss-import');

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    postcss_import,
    tailwindcss(), //But others, like autoprefixer, need to run after,
    autoprefixer
  ]
};

module.exports = config;
