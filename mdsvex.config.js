import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import examples from 'mdsvexamples'

const config = defineConfig({
  layout: {
		componentLayout: './src/routes/layouts/component/+page.svelte',
		pageLayout: './src/routes/layouts/pageLayout/+page.svelte',
		formLayout: './src/routes/layouts/formLayout/+page.svelte',
		typographyLayout: './src/routes/layouts/typographyLayout/+page.svelte',
		utilitiesLayout: './src/routes/layouts/utilitiesLayout/+page.svelte'
  },
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[examples, {
			defaults: {
				Wrapper: '/src/routes/utils/ExampleWrapper.svelte'
			}
		}],
	],
	rehypePlugins: []
});

export default config;
