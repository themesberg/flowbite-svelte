import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
		doc: './src/routes/layouts/doc/+page.svelte',
		componentLayout: './src/routes/layouts/component/+page.svelte',

		breadcrumbLayout: './src/routes/layouts/breadcrumbLayout/+page.svelte',
		buttongroupLayout: './src/routes/layouts/buttongroupLayout/+page.svelte',
		buttonLayout: './src/routes/layouts/buttonLayout/+page.svelte',
		cardLayout: './src/routes/layouts/cardLayout/+page.svelte',
		carouselLayout: './src/routes/layouts/carouselLayout/+page.svelte',
		darkmodeLayout: './src/routes/layouts/darkmodeLayout/+page.svelte',
		docLayout: './src/routes/layouts/docLayout/+page.svelte',
		dropdownLayout: './src/routes/layouts/dropdownLayout/+page.svelte',
		footerLayout: './src/routes/layouts/footerLayout/+page.svelte',
		formLayout: './src/routes/layouts/formLayout/+page.svelte',
		iconLayout: './src/routes/layouts/iconLayout/+page.svelte',
		kbdLayout: './src/routes/layouts/kbdLayout/+page.svelte',
		listgroupLayout: './src/routes/layouts/listgroupLayout/+page.svelte',
		megamenuLayout: './src/routes/layouts/megamenuLayout/+page.svelte',
		modalLayout: './src/routes/layouts/modalLayout/+page.svelte',
		navbarLayout: './src/routes/layouts/navbarLayout/+page.svelte',
		paginationLayout: './src/routes/layouts/paginationLayout/+page.svelte',
		popoverLayout: './src/routes/layouts/popoverLayout/+page.svelte',
		progressbarLayout: './src/routes/layouts/progressbarLayout/+page.svelte',
		ratingLayout: './src/routes/layouts/ratingLayout/+page.svelte',
		sidebarLayout: './src/routes/layouts/sidebarLayout/+page.svelte',
		skeletonLayout: './src/routes/layouts/skeletonLayout/+page.svelte',
		spinnerLayout: './src/routes/layouts/spinnerLayout/+page.svelte',
		tabLayout: './src/routes/layouts/tabLayout/+page.svelte',
		tableLayout: './src/routes/layouts/tableLayout/+page.svelte',
		timelineLayout: '/src/routes/layouts/timelineLayout/+page.svelte',
		toastLayout: './src/routes/layouts/toastLayout/+page.svelte',
		tooltipLayout: './src/routes/layouts/tooltipLayout/+page.svelte',
		typographyLayout: './src/routes/layouts/typographyLayout/+page.svelte',
		utilitiesLayout: './src/routes/layouts/utilitiesLayout/+page.svelte'
  },
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
