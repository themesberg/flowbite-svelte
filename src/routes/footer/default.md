---
layout: doc
---

<script>
  import {SimpleFooter} from '$lib/index'
  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Simple footer</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface SiteType {
  name: string;
  href: string;
  img?: string;
}
interface LinkType {
  name: string;
  href: string;
  rel?: string;
}
let site: SiteType;
let links: LinkType[];
let footerClass = 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800';
let siteNameClass = 'text-sm text-gray-500 sm:text-center dark:text-gray-400';
let ulClass = 'flex flex-wrap items-center mt-3 sm:mt-0';
let aClass = 'mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400';
let siteNameLinkClass = 'hover:underline';
let copyrightYear = '© 2022';
let allRightsReserved = 'All Rights Reserved.';
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SimpleFooter {links} {site} />
</div>

```html
<script>
  import {SimpleFooter} from 'flowbite-svelte'
  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<SimpleFooter {links} {site}/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Footer</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/logo" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Logo</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/sitemap" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Sitemap</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/footer/socialmedia" class="text-blue-600 hover:underline dark:text-blue-500">Footer with Socialmedia</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/footer/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Footer</a></p>
