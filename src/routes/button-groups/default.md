---
layout: doc
---

<script>
  import {ButtonGroup, ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  let buttons1 = [
  {
    name: "Profile",
  },
  {
    name: "Settings",
  },
  {
    name: "Messages",
  },
];
  let buttons2 = [
  {
    name: "Profile",
    link:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    link:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    link:"/",
    icon: CloudDownloadIconSolid
  },
];
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Button Group</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Setup</h2>

```svelte
<script>
  import {ButtonGroup, ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  let buttons1 = [
  {
    name: "Profile",
  },
  {
    name: "Settings",
  },
  {
    name: "Messages",
  },
];
  let buttons2 = [
  {
    name: "Profile",
    link:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    link:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    link:"/",
    icon: CloudDownloadIconSolid
  },
];
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

```svelte
let buttons = [
  {
    name: "Profile",
    link:"/", // optional
    icon: UserCircleIconSolid // optional
  },
  {
    name: "Settings",
    link:"/", // optional
    icon: AdjustmentsIconSolid // optional
  },
  {
    name: "Messages",
    link:"/", // optional
    icon: CloudDownloadIconSolid // optional
  },
];
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Default</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ButtonGroup buttons={buttons1}/>
</div>


```svelte
<ButtonGroup buttons={buttons1}/>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Default with icon</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ButtonGroup buttons={buttons2}/>
</div>


```svelte
<ButtonGroup buttons={buttons2}/>
```
