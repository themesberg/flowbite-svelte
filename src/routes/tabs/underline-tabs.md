---
layout: tabLayout
---

<script>
import { UnderlineTabs }from '$lib/index';
let tabs = [
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

<h1 class="text-3xl w-full dark:text-white py-8">Underline Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <UnderlineTabs {tabs} />
</div>

```html
<script>
import { UnderlineTabs }from 'flowbite-svelte';
let tabs = [
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

<UnderlineTabs {tabs} />
```


<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface TabType {
    name: string;
    active: boolean;
    href: string,
    rel?: string,
}
let divClass = 'text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700';
let tabs: TabType[];
```
