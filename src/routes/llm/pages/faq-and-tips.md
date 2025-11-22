# FAQ and Tips - Flowbite Svelte


## Svelte key blocks

Svelte key blocks destroy and recreate their contents when the value of an expression changes. This can be useful when you are using SvelteKit (group) routing.

For example, if you have a following group routing:

```
├── (app)
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── about
│   │   └── +page.svelte
│   ├── contact
│   │   └── +page.svelte
│   ├── orders
│   │   └── +page.svelte
│   └── profile
│       └── +page.svelte
└── +layout.svelte
```

The following example shows how to add navigation using the key blocks:

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavLi, NavUl } from "flowbite-svelte";
  let { children } = $props();
  let activeUrl = $derived(page.url.pathname);
</script>

// src/routes/(app)/+layout.svelte
{#key activeUrl}
  <Navbar>
    <NavUl {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/contact">Contact</NavLi>
      <NavLi href="/orders">Orders</NavLi>
      <NavLi href="/profile">Profile</NavLi>
    </NavUl>
  </Navbar>
{/key}

{@render children()}
```

## My compiled CSS size is more than 120K. How can I make it smaller?

First build the current setting and check the CSS size.

```sh
pnpm build
```

Then run the following command to see your compiled CSS sizes.

```sh
find .svelte-kit/output/client/_app/immutable -type f -name "*.css" -exec du -h {} +
```

To purge the CSS files, you can use `vite-plugin-tailwind-purgecss`.

### Installation

```sh
pnpm i -D vite-plugin-tailwind-purgecss
```

### vite.config.ts

```js
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
  plugins: [sveltekit(), purgeCss()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  }
});
```

Run `pnpm build` and run the same command to see the compiled CSS size.

```sh
find .svelte-kit/output/client/_app/immutable -type f -name "*.css" -exec du -h {} +
```
