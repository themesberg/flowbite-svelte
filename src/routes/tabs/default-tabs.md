---
layout: tabLayout
---

<script>
  import { DefaultTabs }from '$lib/index';
  import {UserCircleIconSolid, ViewGridIconSolid, AdjustmentsIconSolid, ClipboardListIconSolid } from '@codewithshin/svelte-heroicons'
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
  export let tabs2= [
    {
      name: "Profile",
      active: true,
      href: "/#",
      icon: UserCircleIconSolid,
    },
    {
      name: "Dashboard",
      active: false,
      href: "/#",
      icon: ViewGridIconSolid,
    },
    {
      name: "Settings",
      active: false,
      href: "/#",
      icon: AdjustmentsIconSolid, 
    },
    {
      name: "Contacts",
      active: false,
      href: "/#",
      icon: ClipboardListIconSolid,
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-4">Default Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <DefaultTabs {tabs} />
</div>

```html
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

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface TabType {
  name: string;
  active: boolean;
  href: string,
  rel?: string,
}
let tabs: TabType[];
```
