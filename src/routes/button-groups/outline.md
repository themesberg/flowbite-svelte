---
layout: doc
---

<script>
  import {ButtonGroup, ButtonGroupOutline} from '$lib/index'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadIconSolid
  },
];
  let buttons2 = [
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
</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Outline Button Group</h1>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Setup</h2>

```svelte
<script>
  import {ButtonGroup, ButtonGroupOutline} from 'flowbite-svelte'
  import {UserCircleIconSolid, AdjustmentsIconSolid, CloudDownloadIconSolid} from "@codewithshin/svelte-heroicons"
  let buttons1 = [
  {
    name: "Profile",
    href:"/",
    icon: UserCircleIconSolid
  },
  {
    name: "Settings",
    href:"/",
    icon: AdjustmentsIconSolid
  },
  {
    name: "Messages",
    href:"/",
    icon: CloudDownloadIconSolid
  },
];
  let buttons2 = [
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
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

```svelte
let buttons = [
  {
    name: "Profile",
    href:"/", // optional
    icon: UserCircleIconSolid // optional
  },
  {
    name: "Settings",
    href:"/", // optional
    icon: AdjustmentsIconSolid // optional
  },
  {
    name: "Messages",
    href:"/", // optional
    icon: CloudDownloadIconSolid // optional
  },
];
```

<h2 class="text-2xl w-full dark:text-white py-8">Outline default</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <ButtonGroupOutline buttons={buttons2}/>
</div>

```svelte
<ButtonGroupOutline buttons={buttons2}/>
```


<h2 class="text-2xl w-full dark:text-white py-8">Outline with icon</h2>

<div
  class="container flex flex-wrap justify-evenly rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
<ButtonGroupOutline buttons={buttons1}/>
</div>

```svelte
<ButtonGroupOutline buttons={buttons1}/>
```

