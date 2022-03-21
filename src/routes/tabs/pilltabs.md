---
layout: doc
---

<script>
  import { PillTabs }from '$lib/index';
  let tabs = [
    {
      name: "Profile",
      selected: true,
      href: "/",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/",
    },
    {
      name: "Settings",
      selected: false,
      href: "/",
    },
    {
      name: "Contacts",
      selected: false,
      href: "/",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Pill Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface PillTabType {
  name: string;
  selected: boolean;
  href: string;
}
let tabs: PillTabType[];
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <PillTabs {tabs} />
</div>

```html
<script>
  import { PillTabs } from "flowbite-svelte";
  let tabs = [
    {
      name: "Profile",
      selected: true,
      href: "/profile",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/dashboard",
    },
    {
      name: "Settings",
      selected: false,
      href: "/settings",
    },
    {
      name: "Contact",
      selected: false,
      href: "/contact",
    },
  ];
</script>

<PillTabs {tabs} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/tabs/default-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Default Tab</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/tabs/interactive-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Interactive Tab</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/tabs/multiple-interactive-tabs" class="text-blue-600 hover:underline dark:text-blue-500">Multiple Interactive Tab</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/tabs/pilltabs" class="text-blue-600 hover:underline dark:text-blue-500">Pill Tab</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/tabs/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tabs</a></p>