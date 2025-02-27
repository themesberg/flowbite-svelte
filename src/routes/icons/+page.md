---
layout: homeLayout
title: Accessible SVG Icons - Flowbite Svelte Icons
subtitle: Accessible SVG Icons 
path: 
description: 480+ SVG Flowbite icons components for Svelte 3/4/5/Runes.
---

<script>
  import { Banner, Card } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import MetaTag from './utils/MetaTag.svelte';
  import { removeHyphensAndCapitalize } from './utils/utils';
  import { BadgeCheckOutline, BellRingOutline, GlobeOutline, StarOutline, BullhornOutline, CogOutline, InfoCircleOutline } from 'flowbite-svelte-icons'
</script>

<MetaTag {title} {subtitle} {description} />

<h1 class='flex justify-center text-4xl dark:text-white my-8'>Flowbite Svelte Icons</h1>

<div class='grid grid-cols-2 md:grid-cols-3 gap-4 mx-8'>
  <Card>
  <GlobeOutline class="w-8 h-8 mb-3 text-blue-500 dark:text-blue-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Svelte 4/5/Runes</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.
  </p>
  </Card>


  <Card href='/icons/outline-icons'>
  <BadgeCheckOutline class="w-8 h-8 mb-3 text-pink-500 dark:text-green-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Outline Icons</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  520+ Solid and Outline SVG Icons.
  </p>
  </Card>

  <Card href='/icons/solid-icons'>
  <BadgeCheckOutline class="w-8 h-8 mb-3 text-green-500 dark:text-green-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Solid Icons</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  520+ Solid and Outline SVG Icons.
  </p>
  </Card>


  <Card>
  <StarOutline class="w-8 h-8 mb-3 text-red-500 dark:text-red-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Accessible SVGs</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  A11y props, `title`, `desc`, and `ariaLabel` for accessible SVG icons. 
  </p>
  </Card>

  <Card>
  <BellRingOutline class="w-8 h-8 mb-3 text-purple-500 dark:text-purple-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Faster Compiling</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
   Import icons directly to optimize compilation speed and improve performance.
  </p>
  </Card>

  <Card>
  <BullhornOutline class="w-8 h-8 mb-3 text-pink-500 dark:text-pink-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">IDE Support</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Hovering over a component name will display features, props, events, and more fo an LSP-compatible editors.
  </p>
  </Card>

  <Card>
  <CogOutline class="w-8 h-8 mb-3 text-yellow-500 dark:text-yellow-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Global Icons</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Use `IconSolid` and `IconOutline` to careat default icons.
  </p>
  </Card>
</div>

<h2 class='flex justify-center my-8 text-3xl dark:text-white'>Other information</h2>

<div class='grid grid-cols-2 md:grid-cols-3 gap-4 mx-8 mb-32'>
  <Card href='https://svelte-svg-icons.codewithshin.com/'>
  <InfoCircleOutline class="w-8 h-8 mb-3 text-oragne-500 dark:text-orange-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Svelte Icon Family</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Explore 29 Svelte SVG Icon Sets.
  </p>
  </Card>

  <Card href='https://github.com/shinokada/flowbite-svelte-icons/blob/main/LICENSE'>
  <InfoCircleOutline class="w-8 h-8 mb-3 text-blue-500 dark:text-blue-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">License</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  Released under the MIT License.
  </p>
  </Card>

  <Card href='https://github.com/themesberg/flowbite-icons'>
  <InfoCircleOutline class="w-8 h-8 mb-3 text-green-500 dark:text-green-400" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Original source</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  themesberg/flowbite-icons
  </p>
  </Card>
</div>
