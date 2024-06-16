import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import examples from 'mdsvexamples';

const config = defineConfig({
  layout: {
    componentLayout: './src/routes/layouts/component/+page.svelte',
    blockComponentLayout: './src/routes/blocks/layouts/Blocklayout.svelte'
  },
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [[examples, { defaults: { Wrapper: '/src/routes/utils/ExampleWrapper.svelte' } }]],
  rehypePlugins: []
});

export default config;
