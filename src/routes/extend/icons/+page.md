---
layout: iconLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import { Breadcrumb, BreadcrumbItem, A } from '$lib'
  import { Adjustments, Bell, Briefcase,Ticket, ChartSquareBar, Camera, ChevronLeft } from "svelte-heros";
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Extend</BreadcrumbItem>
  <BreadcrumbItem>Icons</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Guidance for using external icon libraries</h1>

Using an icon library simplifies the code. You can uses <a href="https://www.npmjs.com/package/svelte-heros-v2" target="_blank">Svelte-Heros-v2</a> and <a href="https://svelte-svg-icons.vercel.app/" target="_blank">other icon sets</a> for Flowbite-Svelte.


Svelte-Heros-v2 icons allow you to change icon size and color by using HEX CSS code or TailwindCSS/Flowbite.

<Htwo label="Color and size" />

If you want to change the color with Tailwind CSS, add it to class prop. To change the icon size use the `size` prop or use class like, `class="h-24 w-24"`.

Use `dark:` to specify the dark mode color for icons.

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

You can change icon colors with HEX color code by using the `color` prop.

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

Use the `aria-label` prop to change `aria-label` attribute. All icons have aria-label. For example, `Adjustments` has `aria-label="adjustments"`.

```html
<Adjustments aria-label="adjustments icon" />>
```

<Htwo label="Passing down other attributes" />

You can pass other attibutes as well.

```html
<Adjustments tabindex="0" />
```

<Htwo label="Import all" />

Use import * as Icon from `svelte-heros`.

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

<Htwo label="Examples" />

<Htwo label="Alternatives" />

- <A href="https://www.npmjs.com/package/svelte-awesome-icons">Svelte-Awesome-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons">Svelte-Bootstrap-svg-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-circle-flags">Svelte-Circle-Flags</A>
- <A href="https://www.npmjs.com/package/svelte-cryptocurrency-icons">Svelte-Cryptocurrency-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-feathers">Svelte-Feathers</A>
- <A href="https://www.npmjs.com/package/svelte-flag-icons">Svelte-Flag-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-flags">Svelte-Flags</A>
- <A href="https://www.npmjs.com/package/svelte-file-icons">Svelte-File-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-google-materialdesign-icons">Svelte-Google-Materialdesign-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-heros">Svelte-Heros v1</A>
- <A href="https://www.npmjs.com/package/svelte-ionicons">Svelte-Ionicons</A>
- <A href="https://www.npmjs.com/package/svelte-lucide">Svelte-Lucide</A>
- <A href="https://www.npmjs.com/package/svelte-materialdesign-icons">Svelte-Materialdesign-Icons</A>
- <A href="https://www.npmjs.com/package/svelte-oct">Svelte-Oct</A>
- <A href="https://www.npmjs.com/package/svelte-radix">Svelte-Radix</A>
- <A href="https://www.npmjs.com/package/svelte-remix">Svelte-Remix</A>
- <A href="https://www.npmjs.com/package/svelte-simples">Svlete-simples</A>
- <A href="https://www.npmjs.com/package/svelte-tabler">Svelte-Tabler</A>
- <A href="https://www.npmjs.com/package/svelte-teenyicons">Svelte-Teenyicons</A>
- <A href="https://www.npmjs.com/package/svelte-twitter-emoji">Svelte-Twitter-Emoji</A>
- <A href="https://www.npmjs.com/package/svelte-weather">Svelte-Weather</A>

