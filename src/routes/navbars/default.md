---
layout: doc
---

<script>
  import { Navbar } from "flowbite-svelte";
  let sitename = "Flowbite Svelte";
</script>

<h1 class="text-3xl w-full dark:text-white py-4">Navbar Setup</h1>


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
      link: "/",
      rel: undefined,
    },
    {
      name: "GitHub",
      link: "https://github.com/shinokada/svelte-utterances",
      rel: undefined,
    },
    {
      name: "Design",
      link: "https://flowbite-svelte.vercel.app",
      rel: undefined,
    },
  ];
</script>

<Navbar {menus} {sitename} {alt} {logo} {textsize} />
```

<h2 class="text-lg dark:text-white py-4">Text Size text-xs</h2>

```svelte
<Navbar textsize="text-xs" />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xs" {sitename} />
</div>

<h2 class="text-lg dark:text-white py-4">Text Size text-sm</h2>

```svelte
<Navbar textsize="text-sm" />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-sm" {sitename} />
</div>

<h2 class="text-lg dark:text-white py-4">Text Size text-base</h2>

```svelte
<Navbar textsize="text-base" />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-base" {sitename} />
</div>

<h2 class="text-lg dark:text-white py-4">Text Size text-lg</h2>

```svelte
<Navbar textsize="text-lg" />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-lg" {sitename} />
</div>

<h2 class="text-lg dark:text-white py-4">Text Size text-xl</h2>

```svelte
<Navbar textsize="text-xl" />
```

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Navbar textsize="text-xl" {sitename}  />
</div>