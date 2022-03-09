---
layout: doc
---

<script>
  import { List } from "flowbite-svelte";
  import {
    AdjustmentsIconSolid,
    UserCircleIconSolid,
    InboxInIconSolid,
    CloudDownloadIconSolid,
  } from "@codewithshin/svelte-heroicons";
  let lists = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Alerts",
      link: "/alert",
    },
    {
      title: "Cards",
      link: "/cards",
    },
    {
      title: "List Group",
      link: "/list-group/list",
    },
    {
      title: "Modals",
      link: "/modals",
    },
    {
      title: "Tabs",
      link: "/tabs",
    },
  ];
  let lists2 = [
    {
      title: "Profile",
      icon: UserCircleIconSolid,
      link: "/",
    },
    {
      title: "Settings",
      icon: AdjustmentsIconSolid,
      link: "/",
    },
    {
      title: "Messages",
      icon: InboxInIconSolid,
      link: "/",
    },
    {
      title: "Download",
      icon: CloudDownloadIconSolid,
      link: "/",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-4">List group</h1>

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
      title: "Home",
      link: "/",
    },
    {
      title: "Alerts",
      link: "/alert",
    },
    {
      title: "Cards",
      link: "/cards",
    },
    {
      title: "List Group",
      link: "/list-group/list",
    },
    {
      title: "Modals",
      link: "/modals",
    },
    {
      title: "Tabs",
      link: "/tabs",
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
      title: "Profile",
      icon: UserCircleIconSolid,
      link: "/",
    },
    {
      title: "Settings",
      icon: AdjustmentsIconSolid,
      link: "/",
    },
    {
      title: "Messages",
      icon: InboxInIconSolid,
      link: "/",
    },
    {
      title: "Download",
      icon: CloudDownloadIconSolid,
      link: "/",
    },
  ];
</script>
```