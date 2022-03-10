---
layout: doc
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

<h1 class="text-3xl w-full dark:text-white py-8">Navbar Setup</h1>


```svelte
<script>
  import { Navbar } from "flowbite-svelte";
  let sitename = "Flowbite Svelte";
  let logo = "/images/mkdir-logo.webp";
  let alt = "flowbite-svelte";
  let textsize = "text-lg";
  let menus = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "GitHub",
      href: "https://github.com/shinokada/svelte-utterances",
      rel: "external",
    },
    {
      name: "Design",
      href: "https://flowbite-svelte.vercel.app",
    },
  ];
</script>

<Navbar {menus} {sitename} {alt} {logo} {textsize} />
```

<h2 class="text-lg dark:text-white py-8">Text Size text-xs</h2>

```svelte
<Navbar textsize="text-xs" {sitename} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xs" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-sm</h2>

```svelte
<Navbar textsize="text-sm" {sitename} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-sm" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-base</h2>

```svelte
<Navbar textsize="text-base" {sitename} {menus} />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-base" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-lg</h2>

```svelte
<Navbar textsize="text-lg" {sitename} {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-lg" {sitename} {menus}/>
</div>

<h2 class="text-lg dark:text-white py-8">Text Size text-xl</h2>

```svelte
<Navbar textsize="text-xl" {menus}/>
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xl" {sitename} {menus} />
</div>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/navbar/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Navbar</a></p>