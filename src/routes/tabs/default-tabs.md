---
layout: doc
---

<script>
  import { DefaultTabs } from "flowbite-svelte";
  export let tabs = [
    {
      name: "Profile",
      active: true,
      link: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      link: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      link: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      link: "/#",
      rel: undefined,
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-4">Default Tabs</h1>


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
      link: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      link: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      link: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      link: "/#",
      rel: undefined,
    },
  ];
</script>

<DefaultTabs {tabs} />
```
