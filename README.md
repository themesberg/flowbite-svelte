# Svelte 5 UI Lib: Experimental

UI library for Svelte 5

- [Demo](https://svelte-5-ui-lib.vercel.app/)
- [Repo](https://github.com/shinokada/svelte-5-ui-lib)


## Installation

```
pnpm i -D svelte-5-ui-lib tailwind-merge
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

## Components

- [Banner](https://svelte-5-ui-lib.vercel.app/banner)
- [Breadcrumb](https://svelte-5-ui-lib.vercel.app/breadcrumb)
- [Buttons](https://svelte-5-ui-lib.vercel.app/button)
- [Cards](https://svelte-5-ui-lib.vercel.app/card)
- [Darkmode](https://svelte-5-ui-lib.vercel.app/darkmode)
- [Dropdown](https://svelte-5-ui-lib.vercel.app/dropdown)
- [Footer](https://svelte-5-ui-lib.vercel.app/footer)
- [Indicator](https://svelte-5-ui-lib.vercel.app/indicator)
- [Kbd](https://svelte-5-ui-lib.vercel.app/kbd)
- [Navbar](https://svelte-5-ui-lib.vercel.app/navbar)
- [Progressbar](https://svelte-5-ui-lib.vercel.app/progress)
- [Sidebar](https://svelte-5-ui-lib.vercel.app/sidebar)
- [Skelton](https://svelte-5-ui-lib.vercel.app/skeleton)
- [Spinner](https://svelte-5-ui-lib.vercel.app/spinner)

## Forms

- [Select](https://svelte-5-ui-lib.vercel.app/forms/select)

## Credits

- Svelte 5
- SvelteKit 2
- TailwindCSS
- Flowbite
- Flowbite-Svelte

## License

MIT