---
layout: doc
---

<script>
  import { List }from '$lib/index';
  import {
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";
  let lists = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Alerts",
      href: "/alert",
    },
    {
      name: "Cards",
      href: "/cards",
    },
    {
      name: "List Group",
      href: "/list-group/list",
    },
    {
      name: "Modals",
      href: "/modals",
    },
    {
      name: "Tabs",
      href: "/tabs",
    },
  ];
  let lists2 = [
    {
      name: "Profile",
      icon: UserCircleIconSolid,
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsIconSolid,
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInIconSolid,
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadIconSolid,
      href: "/",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">List group</h1>

<div
  class="container flex flex-wrap space-x-8 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
 <List {lists} />
</div>


```svelte
<script>
  import { List } from "flowbite-svelte";

  let lists = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Alerts",
      href: "/alert",
    },
    {
      name: "Cards",
      href: "/cards",
    },
    {
      name: "List Group",
      href: "/list-group/list",
    },
    {
      name: "Modals",
      href: "/modals",
    },
    {
      name: "Tabs",
      href: "/tabs",
    },
  ];
</script>
````

<div
  class="container flex flex-wrap space-x-8 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <List lists={lists2} />
</div>

```svelte
<script>
  import { List } from "flowbite-svelte";
  import {
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";

  let lists2 = [
    {
      name: "Profile",
      icon: UserCircleIconSolid,
      href: "/",
    },
    {
      name: "Settings",
      icon: AdjustmentsIconSolid,
      href: "/",
    },
    {
      name: "Messages",
      icon: InboxInIconSolid,
      href: "/",
    },
    {
      name: "Download",
      icon: CloudDownloadIconSolid,
      href: "/",
    },
  ];
</script>
```