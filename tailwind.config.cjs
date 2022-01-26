const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
};

module.exports = config;
