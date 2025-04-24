import { defineMDSveXConfig as defineConfig } from "mdsvex";
import examples from "mdsvexamples";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, './src/routes/layouts/component/+page.svelte');

const config = defineConfig({
  layout: {
    componentLayout: path_to_layout
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool"
  },

  remarkPlugins: [[examples, { defaults: { Wrapper: "/src/routes/utils/ExampleWrapper.svelte" } }]],
  rehypePlugins: []
});

export default config;
