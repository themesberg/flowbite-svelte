---
layout: componentLayout
breadcrumb_title: Svelte Theming - Flowbite
title: Svelte Theming - Flowbite
component_title: Theming
dir: Pages
description: Learn how you can manage and improve theming and color management by updating tailwind.config.cjs
---

<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from '$lib'
</script>

We provide twenty two colors in the tailwind.config.cjs file. You can add your colors to the file. You can use these colors with `text-primary-900`, `text-fuchsiafs-800`, `text-violetfs-700`, etc, in a component. See more details in the tailwind.config.cjs file. To prevent conflicts with Tailwind CSS colors, we append the suffix 'fs' to colors, e.g., 'pinkfs'. But you can use any names.


## Accordion

In this accordion example, we are using `-violetfs-[number]`.
```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte'
</script>
<Accordion
  activeClasses="bg-cyanfs-100 dark:bg-gray-800 text-cyanfs-900 dark:text-white focus:ring-4 focus:ring-cyanfs-200 dark:focus:ring-cyanfs-800"
  inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-cyanfs-100 dark:hover:bg-gray-800">
  <AccordionItem class="">
    <span slot="header">Header 2-1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Header 2-2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Badge

Use `color="custom"` and add necessary colors to `customColor`, `customBorderedColor`, `customHoverColor`, and `customCloseBtnColor` props.

```svelte example
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge color='custom' customColor='bg-tealfs-100 text-tealfs-800 dark:bg-tealfs-900 dark:text-tealfs-300'>Custom color</Badge>
```

## Breadcrumb

Add custom colors to `homeClass`, `spanClass`, and `linkClass`.

```svelte example
<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>
<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home homeClass='inline-flex items-center text-sm font-medium text-purplefs-700 hover:text-purplefs-900 dark:text-purplefs-400 dark:hover:text-white'>Home</BreadcrumbItem>
  <BreadcrumbItem spanClass='ml-1 text-sm font-medium text-purplefs-500 md:ml-2 dark:text-purplefs-400'>Projects</BreadcrumbItem>
</Breadcrumb>
```

## Kbd

Modify the `kbdClass` with your colors:

```svelte example
<script>
  import { Kbd } from 'flowbite-svelte'
</script>
<Kbd class='px-2 py-1.5' kbdClass='text-xs font-semibold text-skyfs-800 bg-skyfs-100 border border-skyfs-200 rounded-lg dark:bg-skyfs-600 dark:text-skyfs-100 dark:border-skyfs-500'>Shift</Kbd>
<Kbd class='px-2 py-1.5' kbdClass='text-xs font-semibold text-cyanfs-800 bg-cyanfs-100 border border-cyanfs-200 rounded-lg dark:bg-cyanfs-600 dark:text-cyanfs-100 dark:border-cyanfs-500'>Ctrl</Kbd>
<Kbd class='px-2 py-1.5' kbdClass='text-xs font-semibold text-redfs-800 bg-redfs-100 border border-redfs-200 rounded-lg dark:bg-redfs-600 dark:text-redfs-100 dark:border-redfs-500'>Tab</Kbd>
```

## Paragraph

Add `color` props with your color.

```svelte example 
<script>
  import { P } from 'flowbite-svelte'
</script>

<P color='text-fuchsiafs-600 dark:text-indigofs-300'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque nisi nisl, a vehicula lacus feugiat scelerisque. Aliquam quis commodo massa.
</P>
```

## Spinner 

You need to use a CSS Hex color code for Spinner component.

```svelte example 
<script>
  import { Spinner } from 'flowbite-svelte'
</script>

<Spinner  currentFill='#4edd3b' />
```

