import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from "./package.json" with { type: "json" };
import sveltePackage from "./node_modules/svelte/package.json" with { type: "json" };
import svelteKitPackage from "./node_modules/@sveltejs/kit/package.json" with { type: "json" };
import vitePackage from "./node_modules/vite/package.json" with { type: "json" };
import tailwindcssPackage from "./node_modules/tailwindcss/package.json" with { type: "json" };


export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __GITHUBURL__: JSON.stringify(pkg.repository.url),
    __SVELTEVERSION__: JSON.stringify(sveltePackage.version),
    __SVELTEKITVERSION__: JSON.stringify(svelteKitPackage.version),
    __VITEVERSION__: JSON.stringify(vitePackage.version),
    __TAILWINDCSSVERSION__: JSON.stringify(tailwindcssPackage.version)
  },
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
