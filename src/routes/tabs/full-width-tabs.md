---
layout: tabLayout
---

<script>
  import { FullWidthTabs } from '$lib/index'
  let tabLabel = 'Select a target'
  let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/",
  },
  {
    name: "Settings",
    active: false,
    href: "/",
  },
  {
    name: "Contacts",
    active: false,
    href: "/",
  },
];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Full width tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<FullWidthTabs {tabs} {tabLabel} />
</div>

```html
<script>
  import { FullWidthTabs } from 'flowbite-svelte'
  let tabLabel = 'Select a target'
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
    href: "/",
  },
  {
    name: "Settings",
    active: false,
    href: "/",
  },
  {
    name: "Contacts",
    active: false,
    href: "/",
  },
];
</script>

<FullWidthTabs {tabs} {tabLabel}/>
```

<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface TabType {
  name: string;
  active: boolean;
  href: string,
  rel?: string,
}
let tabs: TabType[];
let tabLabel: string;
```
