import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
		doc: './src/routes/layouts/doc.svelte',
		modalLayout: './src/routes/modals/modalLayout.svelte',
		footerLayout: './src/routes/footer/footerLayout.svelte'
  },
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
