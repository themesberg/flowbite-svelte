---
layout: iconLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros'
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
    }
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Icons</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Icons</h1>

<p>Flowbite-svelte uses <a href="https://github.com/shinokada/svelte-heros" target="_blank">svelte-heros</a>.
You can find all the icon names from the <a href="https://github.com/shinokada/svelte-heros/blob/main/icon-list.md" class="text-red-700 underline">repo</a>.</p>

<p class=" dark:text-white py-4">Svelte-heros icons allow you to change icon size and color by using HEX CSS code or TailwindCSS/Flowbite.</p>

<p class=" dark:text-white py-4">You can select any icons from <a href="https://svelte-svg-icons.vercel.app/" class="text-red-700 underline" target="_blank">Svelte Icon Sets</a>.</p>

<Htwo label="Color and size" />

<p class=" dark:text-white">If you want to change the color with Tailwind CSS, add it to class prop. To change the icon size use the `size` prop or use class like, `class="h-24 w-24"`.</p>
<p>Use `dark:` to specify the dark mode color for icons.</p>

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

<p>You can change icon colors with HEX color code by using the `color` prop.</p>

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

<Htwo label="Aria label" />

<p>Use the `aria-label` prop to change `aria-label` attribute. All icons have aria-label. For example, `Adjustments` has `aria-label="adjustments"`.</p>

```html
<Adjustments aria-label="adjustments icon" />>
```

<Htwo label="Passing down other attributes" />

<p>You can pass other attibutes as well.</p>

```html
<Adjustments tabindex="0" />
```

<Htwo label="Import all" />

<p>Use import * as Icon from 'svelte-heros`.</p>

```html
<script>
	import * as Icon from 'svelte-heros';
</script>

<Icon.Cog />
<Icon.Calendar />

<h1>Size</h1>
<Icon.Database size="30" />
<Icon.Filter size="40" />

<h1>CSS HEX color</h1>
<Icon.Login color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.ShoppingCart class="text-blue-500" />
<Icon.Users class="text-pink-700" />
```
