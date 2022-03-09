---
layout: doc
---

<script>
  import { Dropdown }from '$lib/index';
  let items = [
    {
      link: "/",
      label: "Dashboard",
    },
    {
      link: "/",
      label: "Settings",
    },
    {
      link: "/",
      label: "Sign out",
    },
  ];
  let items2 = [
    {
      link: "/",
      label: "Dashboard",
    },
    {
      link: "/",
      label: "Settings",
      divider: true
    },
    {
      link: "/",
      label: "Sign out",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white">Dropdowns</h1>

<h2 class="text-xl w-full mt-8 dark:text-white">Props</h2>

```js
let label = "Dropdown button";
let rounded = false;
let textSize = "text-sm";
let color = "blue"; // blue|dark|light|green|green-outline|red|red-outline|yellow|purple|purple-outline
```

<h2 class="text-xl w-full mt-8 dark:text-white">Default Dropdown</h2>

<div class="container rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown {items}/>
</div>

<h2 class="text-xl w-full mt-8 dark:text-white">Dropdown divider</h2>

<div class="container rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown items={items2} color="red"/>
</div>

```svelte
<script>
 let items2 = [
    {
      link: "/",
      label: "Dashboard",
    },
    {
      link: "/",
      label: "Settings",
      divider: true
    },
    {
      link: "/",
      label: "Sign out",
    },
  ];
</script>

<Dropdown items={items2} color="red"/>

```

<h2 class="text-xl w-full mt-8 dark:text-white">Dropdown header</h2>

<div class="container rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown {items} color="purple-outline">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
</div>


```svelte
<Dropdown {items} color="purple-outline">
<div slot="header">
 <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
</div>
</Dropdown>
```