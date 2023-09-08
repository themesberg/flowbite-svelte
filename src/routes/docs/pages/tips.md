---
layout: componentLayout
title: Tips - Flowbite Svelte
breadcrumb_title: Tips - Flowbite Svelte
component_title: Tips
dir: Pages
description: Tips for your apps.
---

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

```svelte example hideOutput
// src/routes/(app)/+layout.svelte
<script>
  import { page } from '$app/stores';
  import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;
</script>

{#key activeUrl}
<Navbar let:hidden let:toggle>
  <NavUl {hidden} {activeUrl}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/contact">Contact</NavLi>
      <NavLi href="/orders">Orders</NavLi>
      <NavLi href="/profile">Profile</NavLi>
  </NavUl>
</Navbar>
{/key}

<slot />
```