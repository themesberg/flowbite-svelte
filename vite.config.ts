import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';
import examples from 'mdsvexamples/vite';

const config: UserConfig = {
	plugins: [sveltekit(), examples],
	resolve: {
		alias: {
			'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.ts')
		}
	}
};

export default config;
