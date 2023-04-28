---
layout: componentLayout
title: Svelte Typography - Flowbite
breadcrumb_title: Svelte Typography
component_title: Typography
dir: Components
description: Use the typography and the utility classes from Tailwind CSS to style text with Flowbite
thumnailSize: w-36
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { A } from '$lib';
</script>


The typography for FlowBite is completely based on the utility classes from Tailwind CSS.

We have listed some of the commonly used typography classes that we use throughout the FlowBite UI, however, you can also check out all of the utility classes on the <a class="link" href="https://tailwindcss.com/docs/font-family">Tailwind CSS documentation</a> directly.

## Font Size

Use the following text-size utility classes from Tailwind to set the font size for any text element.

```svelte example
<p class="text-xs dark:text-white">Flowbite</p>
<p class="text-sm dark:text-white">FlowBite</p>
<p class="text-base dark:text-white">FlowBite</p>
<p class="text-lg dark:text-white">FlowBite</p>
<p class="text-xl dark:text-white">FlowBite</p>
<p class="text-2xl dark:text-white">FlowBite</p>
<p class="text-3xl dark:text-white">FlowBite</p>
<p class="text-4xl dark:text-white">FlowBite</p>
<p class="text-5xl dark:text-white">FlowBite</p>
<p class="text-6xl dark:text-white">FlowBite</p>
<p class="text-7xl dark:text-white">FlowBite</p>
<p class="text-8xl dark:text-white">FlowBite</p>
<p class="text-9xl dark:text-white">FlowBite</p>
```

## Font Weight 

Use the following font-weight utility classes to set the font weight for any text element.

```svelte example
<p class="font-thin dark:text-white">FlowBite</p>
<p class="font-extralight dark:text-white">FlowBite</p>
<p class="font-light dark:text-white">FlowBite</p>
<p class="font-normal dark:text-white">FlowBite</p>
<p class="font-medium dark:text-white">FlowBite</p>
<p class="font-semibold dark:text-white">FlowBite</p>
<p class="font-bold dark:text-white">FlowBite</p>
<p class="font-extrabold dark:text-white">FlowBite</p>
<p class="font-black dark:text-white">FlowBite</p>
```

## Line Height

Use the following leading-type utility classes to set the line height for any text element.

```svelte example
<p class="leading-none dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-tight dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-snug dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-normal dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-relaxed dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-loose dark:text-gray-400">Themesberg was created to bring quality ...</p>
```

## Lists

Use the following code to create list items with ordered and unordered lists.

```svelte example
.list-disc
  <ul class="list-disc dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
  </ul>
.list-decimal
  <ol class="list-decimal dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
  </ol>
.list-default
  <ul class="dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
  </ul>
```

## List position

Use the list-inside and list-outside classes to set the list item position inside a list component.

```svelte example
.list-inside
  <ul class="list-disc list-inside dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
  </ul>
.list-outside
  <ul class="list-disc list-outside dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
  </ul>
```

## Text Decoration

You can use the following classes to set the text decoration for any inline text element.

```svelte example
<p class="underline dark:text-gray-400">please read our terms and services</p>
<p class="line-through dark:text-gray-400">please read our terms and services</p>
```

