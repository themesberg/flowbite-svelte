import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
		doc: './src/routes/layouts/doc.svelte',
		accordionLayout: './src/routes/layouts/accordionLayout.svelte',
		alertLayout: './src/routes/layouts/alertLayout.svelte',
		avatarLayout: './src/routes/layouts/avatarLayout.svelte',
		badgeLayout: './src/routes/layouts/badgeLayout.svelte',
		breadcrumbLayout: './src/routes/layouts/breadcrumbLayout.svelte',
		buttongroupLayout: './src/routes/layouts/buttongroupLayout.svelte',
		buttonLayout: './src/routes/layouts/buttonLayout.svelte',
		cardLayout: './src/routes/layouts/cardLayout.svelte',
		carouselLayout: './src/routes/layouts/carouselLayout.svelte',
		darkmodeLayout: './src/routes/layouts/darkmodeLayout.svelte',
		docLayout: './src/routes/layouts/docLayout.svelte',
		dropdownLayout: './src/routes/layouts/dropdownLayout.svelte',
		footerLayout: './src/routes/layouts/footerLayout.svelte',
		formLayout: './src/routes/layouts/formLayout.svelte',
		iconLayout: './src/routes/layouts/iconLayout.svelte',
		kbdLayout: './src/routes/layouts/kbdLayout.svelte',
		listgroupLayout: './src/routes/layouts/listgroupLayout.svelte',
		megamenuLayout: './src/routes/layouts/megamenuLayout.svelte',
		modalLayout: './src/routes/layouts/modalLayout.svelte',
		navbarLayout: './src/routes/layouts/navbarLayout.svelte',
		paginationLayout: './src/routes/layouts/paginationLayout.svelte',
		progressbarLayout: './src/routes/layouts/progressbarLayout.svelte',
		ratingLayout: './src/routes/layouts/ratingLayout.svelte',
		sidebarLayout: './src/routes/layouts/sidebarLayout.svelte',
		skeletonLayout: './src/routes/layouts/skeletonLayout.svelte',
		spinnerLayout: './src/routes/layouts/spinnerLayout.svelte',
		tabLayout: './src/routes/layouts/tabLayout.svelte',
		tableLayout: './src/routes/layouts/tableLayout.svelte',
		timelineLayout: '/src/routes/layouts/timelineLayout.svelte',
		toastLayout: './src/routes/layouts/toastLayout.svelte',
		tooltipLayout: './src/routes/layouts/tooltipLayout.svelte',
		typographyLayout: './src/routes/layouts/typographyLayout.svelte',
  },
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
