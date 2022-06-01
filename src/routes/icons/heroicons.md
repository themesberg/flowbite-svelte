---
layout: iconLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Breadcrumb } from '$lib/index'
  import {
    Adjustments,
    Bell,
    Briefcase,
    Ticket,
    ChartSquareBar,
    Camera,
    ChevronLeft,
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

<p>Flowbite-svelte uses <a href="https://github.com/shinokada/svelte-heros" target="_blank">svelte-heros</a>.
You can find all the icon names from the <a href="https://github.com/shinokada/svelte-heros/blob/main/icon-names.md">repo</a>.</p>

<p class=" dark:text-white py-4">Svelte-heros icons allow you to change icon size and color by using HEX CSS code or TailwindCSS/Flowbite.</p>

<p class=" dark:text-white py-4">If you need brand icons, use <a href="https://github.com/shinokada/svelte-simpleicons" target="_blank">Svelte-simpleicons</a>.</p>

<Htwo label="Examples" />

<p class=" dark:text-white">If you want to change the color with Tailwind CSS, add it to class prop.</p>

<ExampleDiv class="flex justify-center">
<Adjustments size="30" class="text-blue-700 dark:text-red-700" />
<Bell size="30" class="text-red-700 dark:text-green-700" />
<Briefcase  size="30" class="text-green-700 dark:text-indigo-700" />
<ChartSquareBar size="30" class="text-purple-700 dark:text-pink-700" />
<Ticket size="30" class="text-pink-700 dark:text-indigo-700" />
<Camera size="30" class="text-indigo-700 dark:text-gray-100" />
<Bell size="30" class="text-gray-700 dark:text-white" />
<ChevronLeft
  size="30" class="text-yellow-700 dark:text-white"
/>
</ExampleDiv>

```html
<script>
import {
  Adjustments,
  Bell,
  Briefcase,
  Ticket,
  ChartSquareBar,
  Camera,
  Bell,
  ChevronLeft,
} from "svelte-heros";
</script>

<Adjustments size="30" class="text-blue-700 dark:text-red-700" />
<Bell size="30" class="text-red-700 dark:text-green-700" />
<Briefcase  size="30" class="text-green-700 dark:text-indigo-700" />
<ChartSquareBar size="30" class="text-purple-700 dark:text-pink-700" />
<Ticket size="30" class="text-pink-700 dark:text-indigo-700" />
<Camera size="30" class="text-indigo-700 dark:text-gray-100" />
<Bell size="30" class="text-gray-700 dark:text-white" />
<ChevronLeft
  size="30" class="text-yellow-700 dark:text-white"
/>
```

<p>It is possible to change color with HEX color code by using the `color` prop.</p>


<ExampleDiv class="flex justify-center">
<Adjustments size="30"  color="#ff0000" />
<Bell   color="#10ff00" />
<Briefcase  size="30" color="#001dff" />
</ExampleDiv>

```html
<Adjustments size="30"  color="#ff0000" />
<Bell   color="#10ff00" />
<Briefcase  size="30" color="#001dff" />
```