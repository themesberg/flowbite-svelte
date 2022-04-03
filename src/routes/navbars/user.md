---
layout: navbarLayout
---

<script>
  import { Navbar }from '$lib/index';
  let sitename = "Flowbite Svelte";
  let menus = [
    {
      name: "Home",
      href: "/",
      rel: undefined,
    },
    {
      name: "GitHub",
      href: "https://github.com/shinokada/svelte-utterances",
      rel: undefined,
    },
    {
      name: "Design",
      href: "https://flowbite-svelte.vercel.app",
      rel: undefined,
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Users</h1>

<h2 class="text-2xl w-full dark:text-white py-8">User Slot</h2>

<p class="dark:text-white py-4 text-lg">You may want to display menu items for loggin users. Use user slot name. Add a unordered list or dropdown in the slot</p>
