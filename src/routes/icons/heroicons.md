---
layout: iconLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Breadcrumb } from '$lib/index'
  import {
    AdjustmentsSolid,
    BellOutline,
    BriefcaseSolid,
    TicketOutline,
    ChartSquareBarSolid,
    CameraOutline,
    BellSolid,
    ChevronLeftSolid,
  } from "svelte-heros";

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Icons',
      href:'/icons/'
    },
    {
      label:'Heroicons',
      href:'/icons/heroicons'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">HeroIcons</h1>

<p>Flowbite-svelte uses <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-heros" target="_blank">svelte-heros</a>.
You can find all the icon names from the <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-heros/blob/main/icon-names.md">repo</a>.</p>

<p class=" dark:text-white py-4">Svelte-heros icons allow you to change icon size and color by using HEX CSS code or TailwindCSS/Flowbite.</p>

<p class=" dark:text-white py-4">If you need brand icons, use <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-simpleicons" target="_blank">Svelte-simpleicons</a>.</p>

<Htwo label="Examples" />

<p class=" dark:text-white">If you want to change the color with Tailwind CSS, add it to class prop.</p>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<AdjustmentsSolid size="30" class="text-blue-700 dark:text-red-700" />
<BellOutline size="30" class="text-red-700 dark:text-green-700" />
<BriefcaseSolid  size="30" class="text-green-700 dark:text-indigo-700" />
<ChartSquareBarSolid size="30" class="text-purple-700 dark:text-pink-700" />
<TicketOutline size="30" class="text-pink-700 dark:text-indigo-700" />
<CameraOutline size="30" class="text-indigo-700 dark:text-gray-100" />
<BellSolid size="30" class="text-gray-700 dark:text-white" />
<ChevronLeftSolid
  size="30" class="text-yellow-700 dark:text-white"
/>
</div>

```html
<script>
import {
  AdjustmentsSolid,
  BellOutline,
  BriefcaseSolid,
  TicketOutline,
  ChartSquareBarSolid,
  CameraOutline,
  BellSolid,
  ChevronLeftSolid,
} from "svelte-heros";
</script>

<AdjustmentsSolid size="30" class="text-blue-700 dark:text-red-700" />
<BellOutline size="30" class="text-red-700 dark:text-green-700" />
<BriefcaseSolid  size="30" class="text-green-700 dark:text-indigo-700" />
<ChartSquareBarSolid size="30" class="text-purple-700 dark:text-pink-700" />
<TicketOutline size="30" class="text-pink-700 dark:text-indigo-700" />
<CameraOutline size="30" class="text-indigo-700 dark:text-gray-100" />
<BellSolid size="30" class="text-gray-700 dark:text-white" />
<ChevronLeftSolid
  size="30" class="text-yellow-700 dark:text-white"
/>
```

<p>It is possible to change color with HEX color code by using the `color` prop.</p>


<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<AdjustmentsSolid size="30"  color="#ff0000" />
<BellOutline   color="#10ff00" />
<BriefcaseSolid  size="30" color="#001dff" />
</div>

```html
<AdjustmentsSolid size="30"  color="#ff0000" />
<BellOutline   color="#10ff00" />
<BriefcaseSolid  size="30" color="#001dff" />
```