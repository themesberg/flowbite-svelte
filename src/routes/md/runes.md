import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/\*_ @type {import('@sveltejs/kit').Config} _/
const config = {
preprocess: [vitePreprocess({})],
compilerOptions: {
runes: true
},
kit: {
adapter: adapter()
}
};

export default config;
