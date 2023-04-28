---
layout: componentLayout
title: Svelte Indicators - Flowbite
breadcrumb_title: Svelte Indicators
component_title: Indicators
dir: Components
description: Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS
thumnailSize: w-64
---

<script>
  import {TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'

  import { props as items } from '../../props/Indicator.json'
</script>



The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.

## Setup

```svelte example hideOutput
<script>
  import { Indicator } from "flowbite-svelte"
</script>
```

## Default indicator

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

```svelte example class="flex gap-2"
<script>
  import { Indicator } from 'flowbite-svelte'
</script>

<Indicator color="gray"/>
<Indicator color="dark"/>
<Indicator color="blue"/>
<Indicator color="green"/>
<Indicator color="red"/>
<Indicator color="purple"/>
<Indicator color="indigo"/>
<Indicator color="yellow"/>
<Indicator color="teal"/>
```

## Legend indicator

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

```svelte example class="text-sm font-medium text-gray-900 dark:text-white flex gap-2"
<script>
  import { Indicator } from 'flowbite-svelte'
</script>

<span class="flex items-center"><Indicator size="sm" color="blue" class="mr-1.5"/>Visitors</span>
<span class="flex items-center"><Indicator size="sm" color="purple" class="mr-1.5"/>Sessions</span>
<span class="flex items-center"><Indicator size="sm" color="indigo" class="mr-1.5"/>Customers</span>
<span class="flex items-center"><Indicator size="sm" color="teal" class="mr-1.5"/>Revenue</span>
```

## Indicator count

This example can be used to show a number count inside the indicator and position it relative to a button component.

```svelte example class="space-y-4"
<script>
  import { Indicator, Button } from 'flowbite-svelte'
</script>

  <Button size="lg" class="relative">
      <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    <span class="sr-only">Notifications</span>
    Messages
    <Indicator color="red" border size="xl" placement="top-right">
      <span class="text-white text-xs font-bold">8</span>
    </Indicator>
  </Button>
```

## Status indicator

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

`Avatar` component uses `Indicator` internally as parameter `dot`. You can pass all props accepted by `Indicator` component as an object.

```svelte example class="flex gap-2"
<script>
  import { Indicator, Avatar } from 'flowbite-svelte'
</script>

<Avatar src="/images/profile-picture-5.webp" dot={{color:"green", size: "lg", placement:"top-right"}} />
<Avatar src="/images/profile-picture-5.webp" dot={{color:"red", size: "lg", placement:"top-right"}} />

```

## Badge indicator

This example can be used to add an indicator inside of a badge component.

```svelte example class="flex gap-2"
<script>
  import { Indicator, Avatar, Badge } from 'flowbite-svelte'
</script>

<ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
                <Avatar src="/images/profile-picture-5.webp"  alt="Neil image" />
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Neil Sims</p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <Badge color="green" rounded class="px-2.5 py-0.5">
                <Indicator color="green" size="xs" class="mr-1"/>Available
            </Badge>
        </div>
    </li>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
                <Avatar src="/images/profile-picture-4.webp"  alt="Bonnie image" />
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Bonnie Green</p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
            </div>
            <Badge color="red"  rounded class="px-2.5 py-0.5">
                <Indicator color="red" size="xs" class="mr-1"/>Unavailable
            </Badge>
        </div>
    </li>
</ul>
```

## Stepper indicator

You can also use the indicators inside of a stepper component when completing a form element.

```svelte example class="space-y-8"
<script>
  import { Indicator } from 'flowbite-svelte'
</script>

<ol class="flex items-center">
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Indicator>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
        </div>
    </li>
</ol>
<ol class="flex items-center">
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <Indicator color="blue"/>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <Indicator color="blue"/>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="none" class="bg-blue-200 dark:bg-blue-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <Indicator color="blue"/>
            </Indicator>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                <Indicator color="dark" class="dark:!bg-gray-300"/>
            </Indicator>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
        </div>
    </li>
</ol>
```

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

```svelte example class="flex gap-4"
<script>
  import { Indicator } from 'flowbite-svelte'
</script>

<div class="w-56 h-56 relative bg-gray-100 borer border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700" >
    <Indicator placement="top-left" color="gray"/>
    <Indicator placement="top-center" color="dark"/>
    <Indicator placement="top-right" color="blue"/>
    <Indicator placement="center-left" color="green"/>
    <Indicator placement="center" color="red"/>
    <Indicator placement="center-right" color="purple"/>
    <Indicator placement="bottom-left" color="indigo"/>
    <Indicator placement="bottom-center" color="yellow"/>
    <Indicator placement="bottom-right" color="teal"/>
</div>
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Indicator

<TableProp>
  <TableDefaultRow items={items} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/inidicators/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Indicator</A>
</P>
