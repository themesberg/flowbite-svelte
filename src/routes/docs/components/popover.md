---
layout: componentLayout
title: Svelte Popover - Flowbite
breadcrumb_title: Svelte Popover
component_title: Popover
dir: Components
description: Use the popover component to show detailed information inside a pop-up box relative to the element that is being clicked or hovered based on multiple styles
---

<script>
  import { TableProp, TableDefaultRow , } from '../../utils'
  import { P, A } from '$lib'
  import { props as items } from '../../props/Popover.json'
  import { props as items2 } from '../../props/Popper.json'
  import { props as items3 } from '../../props/Frame.json'
</script>



Get started with the popover component to show any type of content inside a pop-up box when hovering or clicking over a trigger element. There are multiple examples that you can choose from, such as showing more information about a user profile, company profile, password strength, and more.

Make sure that you have the Flowbite JavaScript included in your project to enable the popover interactivity by following the quickstart guide.

## Setup

```svelte example hideOutput
<script>
  import { Popover } from 'flowbite-svelte'
</script>
```

## Default popover

```svelte example class="flex h-44 items-end justify-center"
<script>
  import { Popover, Button } from 'flowbite-svelte'
</script>

<Button  id="b1">Default popover</Button>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#b1">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

## User profile

Use this example to show more information about a user profile when hovering over the trigger component.

```svelte example class="flex h-72 items-end justify-center"
<script>
  import { Popover, Button, Avatar } from 'flowbite-svelte'
</script>

<Button  id="b2" class="-mb-2">User profile</Button>
<Popover triggeredBy="#b2" class="w-64 text-sm font-light text-gray-500 bg-white dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
  <div class="p-3">
    <div class="flex justify-between items-center mb-2">
      <Avatar href="/" src="/images/profile-picture-1.webp" alt="Jese Leos" />
      <Button size="xs">Follow</Button>
    </div>
    <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">
      <a href="/">Jese Leos</a>
    </div>
    <div class="mb-3 text-sm font-normal">
      <a href="/" class="hover:underline">@jeseleos</a>
    </div>
    <div class="mb-4 text-sm font-light">Open-source contributor. Building <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</div>
    <ul class="flex text-sm font-light">
      <li class="mr-2">
          <a href="/" class="hover:underline">
            <span class="font-semibold text-gray-900 dark:text-white">799</span>
            <span>Following</span>
          </a>
      </li>
      <li>
          <a href="/" class="hover:underline">
            <span class="font-semibold text-gray-900 dark:text-white">3,758</span>
            <span>Followers</span>
          </a>
      </li>
    </ul>
  </div>
</Popover>
```

## Company profile

This example can be used to show more information about a company profile.

```svelte example class="flex h-96 items-end justify-center"
<script>
  import { Popover, Button, Avatar } from 'flowbite-svelte'
</script>

<Button class="-mb-4">Company profile</Button>
<Popover class="w-80 text-sm">  
  <div class="flex">
    <div class="mr-3 shrink-0">
      <a href="/" class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo">
      </a>
    </div>
    <div>
      <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
          <a href="/" class="hover:underline">Flowbite</a>
      </p>
      <p class="mb-3 text-sm font-normal">Tech company</p>
      <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>
      <ul class="text-sm font-light">
        <li class="flex items-center mb-2">
            <svg class="w-4 h-4 mr-1 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
            <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">https://flowbite.com/</a>
        </li>
        <li class="flex items-start mb-2">
            <svg class="mr-1 w-6 font-semibold text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
            <span>4,567,346 people like this including 5 of your friends</span>
        </li>
      </ul>
      <div class="flex mb-3 ml-4">
        <Avatar src="/images/profile-picture-1.webp" stacked />
        <Avatar src="/images/profile-picture-2.webp" stacked />
        <Avatar src="/images/profile-picture-3.webp" stacked />
        <Avatar stacked href="/" class="bg-gray-700 dark:bg-gray-700 text-white hover:bg-gray-600">+3</Avatar>
      </div>
      <div class="flex">
        <Button color="alternative" class="mr-2 w-full">
          <svg class="mr-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
          Like page
        </Button>
        <Button color="alternative">
          <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </Button>
      </div>
    </div>
  </div>
</Popover>
```

## Image popover

Use this example to trigger a popover component with detailed information and an image when hovering over a portion of highlighted text inspired by Wikipedia and other large news outlets.

```svelte example class="flex h-96 items-end"
<script>
  import { Popover } from 'flowbite-svelte'
</script>

<p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="/" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" id="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>
<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light" defaultClass="">
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <h3 class="font-semibold text-gray-900 dark:text-white">About Italy<h3>
        <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
        <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
      </div>
    </div>
    <img src="/images/italy.png" class="col-span-2 h-full rounded-r-lg" alt="Italy map" />
  </div>
</Popover>
```

## Description popover

Show helpful information inside a popover when hovering over a question mark button.

```svelte example class="h-96"
<script>
  import { Popover, ChevronRight } from 'flowbite-svelte'
</script>

<div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text
  <button id="b3">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>
  <span class="sr-only">Show information</span></button>
</div>
<Popover triggeredBy="#b3" class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" placement="bottom-start">
  <div class="p-3 space-y-2">
      <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
      Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.
      <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
      For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.
      <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <ChevronRight size="12" /></a>
  </div>
</Popover>
```

## Progress popover

Show a progress bar with details inside a popover when hovering over a settings button.

```svelte example class="h-60 flex justify-center items-end"
<script>
  import { Popover, ChevronRight, Button } from 'flowbite-svelte'
</script>

<Button id="progress"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg> Storage status</Button>
<Popover triggeredBy="#progress" class="text-sm w-64 font-light">
  <div class="space-y-2">
    <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>
    <p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p>
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
    </div>
    <a href="/" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">
      Upgrade now <ChevronRight size="12" variation="solid"/>
    </a>
  </div>
</Popover>
```

## Password strength

Dynamically show the password strength progress when creating a new password positioned relative to the input element.

```svelte example
<script>
  import { Popover, Label, Input, Checkbox, Button } from 'flowbite-svelte'
</script>

<form on:submit|preventDefault class="mb-8">
  <div class="mb-6">
    <Label for="email" class="mb-2">Your email</Label>
    <Input type="email" id="email" placeholder="name@flowbite.com" required="" />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" id="password" required="" />
  </div>
  <Checkbox class="mb-6">Remember me</Checkbox>
  <Button type="submit">Submit</Button>
</form>
<Popover class="text-sm" triggeredBy="#password" placement="bottom">
  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
  <div class="grid grid-cols-4 gap-2">
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
      <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
  </div>
  <p class="py-2">It’s better to have:</p>
  <ul>
      <li class="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-green-400 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
Upper &amp; lower case letters 
      </li>
      <li class="flex items-center mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          A symbol (#$&amp;) 
      </li>
      <li class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>A longer password (min. 12 chars.)
      </li>
  </ul>
</Popover>
```

## Placement

Set the position of the popover component relative to the trigger element by using the `placement={top|right|bottom|left}` data attribute and its values.

```svelte example class="flex gap-4 flex-col justify-center items-center h-96"
<script>
  import { Popover, Button } from 'flowbite-svelte'
  let placement;
</script>

<Button id="placement-top" on:mouseenter={()=> placement="top"}>Top popover</Button>
<div class="space-x-4">
<Button id="placement-left" on:mouseenter={()=> placement="left"}>Left popover</Button>
<Button id="placement-right" on:mouseenter={()=> placement="right"}>Right popover</Button>
</div>
<Button id="placement-bottom" on:mouseenter={()=> placement="bottom"}>Bottom popover</Button>
<Popover triggeredBy="[id^='placement-']" {placement} class="w-64 text-sm font-light " title="Popover left">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

## Triggering

```svelte example class="flex h-44 items-end justify-center gap-4"
<script>
  import { Popover, Button } from 'flowbite-svelte'
</script>

<Button id='hover'>Hover popover</Button>
<Button id='click'>Click popover</Button>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#hover" trigger="hover">
  And here's some amazing content. It's very engaging. Right?
</Popover>
<Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#click" trigger="click">
  And here's some amazing content. It's very engaging. Right?
</Popover>
```

## Offset

Increase or decrease the default offset by adding the `offset` attribute where the value is an integer.

```svelte example class="flex h-52 items-end justify-center"
<script>
  import { Popover, Button } from 'flowbite-svelte'
</script>

<Button  id="offset">Default popover</Button>
<Popover offset="30" class="w-64 text-sm font-light" title="Popover title" triggeredBy="#offset">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

## Animation

Customize the animation of the popover component by using the transition functions from Svelte.

```svelte example class="flex h-44 items-end justify-center gap-8"
<script>
  import { Popover, Button } from 'flowbite-svelte'
  import { blur, fade, slide } from 'svelte/transition';
</script>

<Button>Fade popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={fade} params={{duration: 700}}>
    And here's some amazing content. It's very engaging. Right?
</Popover>
<Button>Blur popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={blur} params={{duration: 500}}>
    And here's some amazing content. It's very engaging. Right?
</Popover>
<Button>Slide popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={slide}>
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

## Disable arrow

You can also disable the popover arrow by setting `arrow` attribute to `false`.

```svelte example class="flex h-44 items-end justify-center"
<script>
  import { Popover, Button } from 'flowbite-svelte'
</script>

<Button  id="arrow">Default popover</Button>
<Popover arrow={false} class="w-64 text-sm font-light" title="Popover title" triggeredBy="#arrow">
    And here's some amazing content. It's very engaging. Right?
</Popover>
```

## Props

### Popover

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.</p>

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### Popper

The component inherits the following props, type, and default values from `Popper`. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### Frame

The component inherits the following props, type, and default values from `Frame`. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/popover/" target="_blank" rel="noreferrer" class="link">Flowbite Popover</A>
</P>
