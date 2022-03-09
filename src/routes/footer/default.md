---
layout: doc
---

<script>
  import {SimpleFooter} from 'flowbite-svelte'
  let site = {
    link: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", link: "/" },
    { name: "Profile", link: "/" },
    { name: "Contact", link: "/" },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-4">Simple footer</h1>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SimpleFooter {links}/>
</div>

```svelte
<script>
  import {SimpleFooter} from 'flowbite-svelte'
  let site = {
    link: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", link: "/" },
    { name: "Profile", link: "/" },
    { name: "Contact", link: "/" },
  ];
</script>

<SimpleFooter {links} {site}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Default props</h2>

```js
let site = {
  link: "/",
  name: "Flowbite Svelte",
};
let links = [
  { name: "About", link: "/about", rel: undefined },
  { name: "Privacy Policy", link: "/", rel: undefined },
  { name: "Licensing", link: "/", rel: undefined },
  { name: "Contact", link: "/", rel: undefined },
];
let footerClass =
  "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
let siteNameClass =
  "text-sm text-gray-500 sm:text-center dark:text-gray-400";
let ulClass = "flex flex-wrap items-center mt-3 sm:mt-0";
let aClass =
  "mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400";
let siteNameLinkClass = "hover:underline";
let copyrightYear = "© 2022";
let allRightsReserved = "All Rights Reserved.";
```
