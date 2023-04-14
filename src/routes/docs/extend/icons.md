---
layout: componentLayout
breadcrumb_title: Icons
title: External icon libraries
component_title: Icon libraries
dir: Extend
description: Use Svelte SVG icon families to write less code
---

<script>
  import { P, A, List, Li } from '$lib'
	import CheckCircle from './CheckCircle.svelte'
</script>

Instead of using SVG icons, using an icon library simplifies the code. You can uses <A href="https://www.npmjs.com/package/svelte-heros-v2" target="_blank" rel="noreferrer">Svelte-Heros-v2</A> and <A href="https://svelte-svg-icons.vercel.app/" target="_blank" rel="noreferrer">other icon sets</A> for Flowbite-Svelte.

Svelte-Heros-v2 icons allow you to change the icon color, size, and other props.

## Installation

```sh
npm i -D svelte-heros-v2
```

## Color and size

If you want to change the color with Tailwind CSS, add it in the class prop. To change the icon size use the `size` prop or use class like, `class="h-24 w-24"`.

Use `dark:` to specify the dark mode color for icons.

```js
<script>
  import {
    AdjustmentsVertical,
    Bell,
    Briefcase,
    Ticket,
    ChartBarSquare,
    Camera,
    ChevronLeft
  } from 'svelte-heros-v2';
</script>

<AdjustmentsVertical size="30" class="text-blue-700 dark:text-red-700" />
<Bell size="30" class="text-red-700 dark:text-green-700" />
<Briefcase size="30" class="text-green-700 dark:text-indigo-700" />
<ChartBarSquare size="30" class="text-purple-700 dark:text-pink-700" />
<Ticket size="30" class="text-pink-700 dark:text-indigo-700" />
<Camera size="30" class="text-indigo-700 dark:text-gray-100" />
<ChevronLeft size="30" class="text-yellow-700 dark:text-white" />
```

You can change icon colors with HEX color code by using the `color` prop.

```html
<AdjustmentsVertical size="30" color="#ff0000" />
<Bell color="#10ff00" />
<Briefcase size="30" color="#001dff" />
```

## Aria label

Use the `aria-label` prop to change `aria-label` attribute. All icons have aria-label. For example, `Adjustments` has `aria-label="adjustments"`.

```html
<AdjustmentsVertical aria-label="adjustments icon" />>
```

## Passing down other attributes

You can pass other attributes as well.

```html
<AdjustmentsVertical tabindex="0" />
```

## Import all

Use import \* as Icon from `svelte-heros-v2`.

```html
<script>
  import * as Icon from 'svelte-heros-v2';
</script>

<Icon.Cog />
<Icon.Calendar />

<h1>Size</h1>

<Icon.CircleStack size="30" />
<Icon.Funnel size="40" />

<h1>CSS HEX color</h1>
<Icon.Bookmark color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.ShoppingCart class="text-blue-500" />
<Icon.Users class="text-pink-700" />
```

## Examples

Here are some examples using Svelte-Heros-v2.

### <A href="https://hero2-with-flowbite-svelte.vercel.app/accordion" textSize="text-2xl">Accordion</A>

```html
<script>
  import { AccordionItem } from 'flowbite-svelte';
  import { ArrowDownCircle, ArrowUpCircle } from 'svelte-heros-v2';
</script>

<AccordionItem id="1">
  <h2 slot="header">Header 2-1</h2>
  <span slot="arrowup">
    <ArrowUpCircle />
  </span>
  <span slot="arrowdown">
    <ArrowDownCircle />
  </span>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
<AccordionItem id="2">
  <h2 slot="header">Header 2-2</h2>
  <span slot="arrowup">
    <ArrowUpCircle />
  </span>
  <span slot="arrowdown">
    <ArrowDownCircle />
  </span>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
```

### <A href="https://hero2-with-flowbite-svelte.vercel.app/alert">Alert</A>

```html
<script>
  import { Alert } from 'flowbite-svelte';
  import { InformationCircle } from 'svelte-heros-v2';
</script>

<Alert class="mb-2">
  <svelte:fragment slot="icon">
    <InformationCircle class="text-blue-700 flex-shrink-0 w-5 h-5 mr-3" />
  </svelte:fragment>
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="red" class="mb-2">
  <svelte:fragment slot="icon">
    <InformationCircle class="text-red-700 flex-shrink-0 w-5 h-5 mr-3" />
  </svelte:fragment>
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="green" class="mb-2">
  <svelte:fragment slot="icon">
    <InformationCircle class="text-green-700 flex-shrink-0 w-5 h-5 mr-3" />
  </svelte:fragment>
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" class="mb-2">
  <svelte:fragment slot="icon">
    <InformationCircle class="text-yellow-700 flex-shrink-0 w-5 h-5 mr-3" />
  </svelte:fragment>
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</Alert>
<Alert color="gray" class="mb-2">
  <svelte:fragment slot="icon">
    <InformationCircle class="text-gray-500 flex-shrink-0 w-5 h-5 mr-3" />
  </svelte:fragment>
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</Alert>
```

### <A href="https://hero2-with-flowbite-svelte.vercel.app/breadcrumb">Breadcrumb</A>

```html
<script>
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Home, ChevronDoubleRight } from 'svelte-heros-v2';
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
    <svelte:fragment slot="icon"> <Home /> </svelte:fragment>Home</BreadcrumbItem
  >
  <BreadcrumbItem href="/">
    <svelte:fragment slot="icon">
      <ChevronDoubleRight />
    </svelte:fragment>
    Projects</BreadcrumbItem
  >
  <BreadcrumbItem>
    <svelte:fragment slot="icon">
      <ChevronDoubleRight />
    </svelte:fragment>
    Flowbite Svelte</BreadcrumbItem
  >
</Breadcrumb>
```

## More examples

<List list='none'>
<Li icon>
<CheckCircle />
<A href="https://hero2-with-flowbite-svelte.vercel.app/carousel">Carousel</A></Li>
<Li icon><CheckCircle /><A href="https://hero2-with-flowbite-svelte.vercel.app/hr">HR</A></Li>
<Li icon><CheckCircle /><A href="https://hero2-with-flowbite-svelte.vercel.app/link">Link</A></Li>
<Li icon><CheckCircle /><A href="https://hero2-with-flowbite-svelte.vercel.app/textarea">Textarea</A></Li>
<Li icon><CheckCircle /><A href="https://hero2-with-flowbite-svelte.vercel.app/toast">Toast</A></Li>
<Li icon><CheckCircle /><A href="https://hero2-with-flowbite-svelte.vercel.app/toolbar">Toolbar</A></Li>
</List>

## Alternatives

These icon sets have the same functionalities mentioned above.

<List tag='ul' class='space-y-1' list='none'>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-awesome-icons">Svelte-Awesome-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-bootstrap-svg-icons">Svelte-Bootstrap-svg-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-circle-flags">Svelte-Circle-Flags</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-cryptocurrency-icons">Svelte-Cryptocurrency-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-feathers">Svelte-Feathers</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-flag-icons">Svelte-Flag-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-flags">Svelte-Flags</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-file-icons">Svelte-File-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-google-materialdesign-icons">Svelte-Google-Materialdesign-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-heros">Svelte-Heros v1</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-ionicons">Svelte-Ionicons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-lucide">Svelte-Lucide</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-materialdesign-icons">Svelte-Materialdesign-Icons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-oct">Svelte-Oct</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-radix">Svelte-Radix</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-remix">Svelte-Remix</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-simples">Svlete-simples</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-tabler">Svelte-Tabler</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-teenyicons">Svelte-Teenyicons</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-twitter-emoji">Svelte-Twitter-Emoji</A></Li>
<Li icon><CheckCircle /><A href="https://www.npmjs.com/package/svelte-weather">Svelte-Weather</A></Li>
</List>
