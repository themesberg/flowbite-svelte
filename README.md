# SVELTE-FLOW

## Installation

### Install SvelteKit and TailwindCSS:

```sh
npm init svelte@next sveltekit-demo
cd sveltekit-demo
npm install
npx svelte-add@latest tailwindcss
```

### Install Flowbite:

```sh
npm i flowbite
```

### Install `svelte-flow`:

```sh
npm i -D svelte-flow
```


### __layout

Add the following to the __layout.svelte:

```html
<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
</script>
<div class="mx-auto p-2">
  <slot />
</div>
```

## Alert components

[Alerts](https://svelte-flow.vercel.app/alerts)

## Button component

[Buttons](https://svelte-flow.vercel.app/buttons)

## Card components

[Cards](https://svelte-flow.vercel.app/cards)

## List group component

[List group](https://svelte-flow.vercel.app/list-group)

## Modal components

[Modals](https://svelte-flow.vercel.app/modals)

## Navbar component
[Navbars](https://svelte-flow.vercel.app/navbar)

## Tab components

[Tabs](https://svelte-flow.vercel.app/tabs)