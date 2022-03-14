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

<h1 class="text-3xl w-full dark:text-white py-8">Navbar Default Props</h1>

```js
let sitename = 'Svelte Flow';
let logo = '/images/mkdir-logo.png';
let alt = 'Svelte Flow';
let textsize = 'text-sm';
let menus;
let navClass = 'px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700';
let navDivClass = 'container flex flex-wrap justify-between items-center mx-auto';
let spanClass = 'self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';
let buttonClass = 'inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500';
let liLinkClass = `block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent ${textsize}`;
```


<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/navbars/props" class="text-blue-600 hover:underline dark:text-blue-500">Props</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/navbars/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Navbar</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/navbars/dropdown" class="text-blue-600 hover:underline dark:text-blue-500">Dropdown Navbar</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/navbar/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Navbar</a></p>