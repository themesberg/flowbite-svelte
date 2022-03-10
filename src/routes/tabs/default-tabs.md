---
layout: doc
---

<script>
  import { DefaultTabs }from '$lib/index';
  export let tabs = [
    {
      name: "Profile",
      active: true,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      href: "/#",
      rel: undefined,
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tabs</h1>


<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <DefaultTabs {tabs} />
</div>

```svelte
<script>
  import { DefaultTabs } from "flowbite-svelte";
  export let tabs = [
    {
      name: "Profile",
      active: true,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      href: "/#",
      rel: undefined,
    },
  ];
</script>

<DefaultTabs {tabs} />
```

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/tabs/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Tabs</a></p>
