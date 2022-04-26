---
layout: iconLayout
---

<script>
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

<p>Flowbite-svelte uses <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-heroicons" target="_blank">svelte-heroicons</a>.
You can find all the icon names from the <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-heroicons/blob/main/icon-names.md">repo</a>.</p>

<p class=" dark:text-white py-4">Svelte-heroicons allow you to change icon color and size by using TailwindCSS/Flowbite.</p>

<p class=" dark:text-white py-4">If you need brand icons, use <a class="text-blue-600 hover:underline dark:text-blue-500" href="https://github.com/shinokada/svelte-simpleicons" target="_blank">Svelte-simpleicons</a>.</p>

<h2 class="text-2xl w-full dark:text-white mt-8">Examples</h2>

<p class=" dark:text-white">If you want to change the color, add it to class prop.</p>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<AdjustmentsSolid size="30" class="text-blue-500 dark:text-red-300" />
<BellOutline  class="text-red-500 dark:text-green-300" />
<BriefcaseSolid  size="30" class="text-green-500 dark:text-indigo-300" />
<ChartSquareBarSolid size="30" class="text-purple-500 dark:text-pink-300" />
<TicketOutline size="30" class="text-pink-500 dark:text-indigo-300" />
<CameraOutline size="30" class="text-indigo-500 dark:text-white" />
<BellSolid size="30" class="text-gray-500 dark:text-yellow-500" />
<ChevronLeftSolid
  size="30" class="text-yellow-300 dark:text-white"
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

<AdjustmentsSolid size="30" class="text-blue-500 dark:text-blue-300" />
<BellOutline  size="30" class="text-red-500 dark:text-purple-300" />
<BriefcaseSolid  size="30" class="text-green-500 dark:text-indigo-300" />
<ChartSquareBarSolid size="30" class="text-purple-500 dark:text-red-300" />
<TicketOutline size="30" class="text-pink-500 dark:text-yellow-300" />
<CameraOutline size="30" class="text-indigo-500 dark:text-white" />
<BellSolid size="30" class="text-gray-500 dark:text-blue-500" />
<ChevronLeftSolid
  size="30" class="text-yellow-300 dark:text-white"
/>
```
