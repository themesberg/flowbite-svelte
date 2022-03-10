---
layout: doc
---

<script>
  import { Dropdown }from '$lib/index';
  let items = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
  let items2 = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
      divider: true
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white">Dropdowns</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

```js
let name = "Dropdown button";
let rounded = false;
let textSize = "text-sm";
let color = "blue"; // blue|dark|light|green|green-outline|red|red-outline|yellow|purple|purple-outline
```

<h2 class="text-2xl w-full dark:text-white py-8">Default Dropdown</h2>

<div class="container rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown {items}/>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Dropdown divider</h2>

<div class="container rounded-xl my-4 mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Dropdown items={items2} color="red"/>
</div>

```svelte
<script>
 let items2 = [
    {
      href: "/",
      name: "Dashboard",
    },
    {
      href: "/",
      name: "Settings",
      divider: true
    },
    {
      href: "/",
      name: "Sign out",
    },
  ];
</script>

<Dropdown items={items2} color="red"/>

```

<h2 class="text-2xl w-full dark:text-white py-8">Dropdown header</h2>

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