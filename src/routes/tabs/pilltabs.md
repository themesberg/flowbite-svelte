---
layout: doc
---

<script>
  import { PillTabs }from '$lib/index';
  let tabs = [
    {
      name: "Profile",
      selected: true,
      link: "/",
    },
    {
      name: "Dashboard",
      selected: false,
      link: "/",
    },
    {
      name: "Settings",
      selected: false,
      link: "/",
    },
    {
      name: "Contacts",
      selected: false,
      link: "/",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Pill Tabs</h1>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <PillTabs {tabs} />
</div>

```svelte
<script>
  import { PillTabs } from "flowbite-svelte";
  let tabs = [
    {
      name: "Profile",
      selected: true,
      link: "/profile",
    },
    {
      name: "Dashboard",
      selected: false,
      link: "/dashboard",
    },
    {
      name: "Settings",
      selected: false,
      link: "/settings",
    },
    {
      name: "Contact",
      selected: false,
      link: "/contact",
    },
  ];
</script>

<PillTabs {tabs} />
```

