import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
		doc: './src/routes/layouts/doc.svelte',
		accordionLayout: './src/routes/layouts/accordionLayout.svelte',
		alertLayout: './src/routes/layouts/alertLayout.svelte',
		avatarLayout: './src/routes/layouts/avatarLayout.svelte',
		badgeLayout: './src/routes/layouts/badgeLayout.svelte',
		buttongroupLayout: './src/routes/layouts/buttongroupLayout.svelte',
		buttonLayout: './src/routes/layouts/buttonLayout.svelte',
		cardLayout: './src/routes/layouts/cardLayout.svelte',
		darkmodeLayout: './src/routes/layouts/darkmodeLayout.svelte',
		docLayout: './src/routes/layouts/docLayout.svelte',
		dropdownLayout: './src/routes/layouts/dropdownLayout.svelte',
		footerLayout: './src/routes/layouts/footerLayout.svelte',
		formLayout: './src/routes/layouts/formLayout.svelte',
		iconLayout: './src/routes/layouts/iconLayout.svelte',
		listgroupLayout: './src/routes/layouts/listgroupLayout.svelte',
		modalLayout: './src/routes/layouts/modalLayout.svelte',
		navbarLayout: './src/routes/layouts/navbarLayout.svelte',
		paginationLayout: './src/routes/layouts/paginationLayout.svelte',
		progressbarLayout: './src/routes/layouts/progressbarLayout.svelte',
		sidebarLayout: './src/routes/layouts/sidebarLayout.svelte',
		spinnerLayout: './src/routes/layouts/spinnerLayout.svelte',
		tabLayout: './src/routes/layouts/tabLayout.svelte',
		tableLayout: './src/routes/layouts/tableLayout.svelte',
		timelineLayout: '/src/routes/layouts/timelineLayout.svelte',
		toastLayout: './src/routes/layouts/toastLayout.svelte',
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
