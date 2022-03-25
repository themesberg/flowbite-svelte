import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
		doc: './src/routes/layouts/doc.svelte',
		accordionLayout: './src/routes/layouts/accordionLayout.svelte',
		alertLayout: './src/routes/layouts/alertLayout.svelte',
		badgeLayout: './src/routes/layouts/badgeLayout.svelte',
		buttongroupLayout: './src/routes/layouts/buttongroupLayout.svelte',
		buttonLayout: './src/routes/layouts/buttonLayout.svelte',
    cardLayout: './src/routes/layouts/cardLayout.svelte',
		footerLayout: './src/routes/layouts/footerLayout.svelte',
		formLayout: './src/routes/layouts/formLayout.svelte',
		iconLayout: './src/routes/layouts/iconLayout.svelte',
		listgroupLayout: './src/routes/layouts/listgroupLayout.svelte',
		modalLayout: './src/routes/layouts/modalLayout.svelte',
		navbarLayout: './src/routes/layouts/navbarLayout.svelte',
		spinnerLayout: './src/routes/layouts/spinnerLayout.svelte',
		tooltipLayout: './src/routes/layouts/tooltipLayout.svelte',
  },
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
