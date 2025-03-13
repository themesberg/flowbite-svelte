import type { Config } from 'tailwindcss';

export default {
content: [
'./src/**/*.{html,js,svelte,ts}',
'./node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}',
'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
'./node_modules/svelte-animated-icons/**/*.{html,js,svelte,ts}'
],
// more code
},
} satisfies Config;
