---
layout: doc
---

<script>
  import { InteractiveTabs }from '$lib/index';
  let tabs1 = [
    {
      label: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      label: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      label: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      label: "Contacts-1",
      id: 4,
      content:
        "1-4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Interactive Tabs</h1>

<div class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <InteractiveTabs tabId="myTab1" tabs={tabs1} />
</div>

```svelte
<script>
  import { InteractiveTabs } from "flowbite-svelte";
  let tabs1 = [
    {
      label: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      label: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      label: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      label: "Contacts-1",
      id: 4,
      content:
        "1-4Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
</script>

<InteractiveTabs tabId="myTab1" tabs={tabs1} />
```


