After installing Svelte 5 install:

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
				// pink
				primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}

				// more colors in GitHub repo
			}
		}
	}
};

module.exports = config;
```
