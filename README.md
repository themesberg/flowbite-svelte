# Svelte 5 UI Lib

UI library for Svelte 5

- [Demo](https://svelte-5-ui-lib.vercel.app/)
- [Repo](https://github.com/shinokada/svelte-5-ui-lib)


## Installation

After installing Svelte-5, update `svelte.config.js` to enable `runes`:

```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
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
```

Install `svelte-5-ui-lib:

```
pnpm i -D svelte-5-ui-lib
```

Install tailwindcss:

```
npx svelte-add@latest tailwindcss
pnpm i
```

Add the following to tailwind.config.js:

```
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// violet
				primary: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95'
				}
			}
		}
	}
};

module.exports = config;
```

## Credits

- Svelte 5
- SvelteKit 2
- TailwindCSS
- Flowbite
- Flowbite-Svelte

## License

MIT