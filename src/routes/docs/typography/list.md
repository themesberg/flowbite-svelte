---
layout: componentLayout
title: Svelte Lists - Flowbite
breadcrumb_title: Svelte Lists
component_title: List
dir: Typography
description: Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow } from '../../utils'
  import { A, Heading } from '$lib'
  import { props as items1 } from '../../props/List.json'
  import { props as items2 } from '../../props/Li.json'
  import { props as items3 } from '../../props/Span.json'
  import { props as items4 } from '../../props/DescriptionList.json'

  // lib files
  const libFilesArray = [
    import.meta.glob("$lib/typography/Li.svelte"),
    import.meta.glob("$lib/typography/Ul.svelte"),
  ];
const libFiles = { ...libFilesArray[0], ...libFilesArray[1] };
</script>



Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

## Setup

```html
<script>
  import { List, Li } from 'flowbite-svelte';
</script>
```

## Unordored list

Use this example to create a default unordered list of items. 

```svelte example
<script>
  import { Li, List, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
  >Password requirements</Heading>
<List tag="ul" class="space-y-1">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
```

## icons

This example can be used to apply custom icons instead of the default bullets for the list items.

```svelte example
<script>
  import { List, Li, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2"  customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
  >Password requirements</Heading>
<List tag="ul" class="space-y-1" list="none">
  <Li icon>
    <svg
      class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd" /></svg>
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <svg
      class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd" /></svg>
    At least one lowercase character
  </Li>
  <Li icon>
    <svg
      class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clip-rule="evenodd" /></svg>
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>
```

## Nested

Use this example to nested another list of items inside the parent list element.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ul" class="space-y-4">
  <Li
    >List item one
    <List tag="ol" class="pl-5 mt-2 space-y-1">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li
    >List item two
    <List tag="ol" class="pl-5 mt-2 space-y-1">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li
    >List item three
    <List tag="ol" class="pl-5 mt-2 space-y-1">
      <Li>Again please don't nest lists if you want</Li>
      <Li>Nobody wants to look at this.</Li>
      <Li>I'm upset that we even have to bother styling this.</Li>
    </List>
  </Li>
</List>
```

## Unstyled

Use the `list="none"` prop to disable the list style bullets or numbers.

```svelte example
<script>
  import { List, Li, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2"  customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white"
  >Password requirements</Heading>
<List tag="ul" class="space-y-1" list="none">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
```

## Ordered list

Use the `tag="ol"` prop to create an ordered list of items with numbers.

```svelte example
<script>
  import { List, Li, Span, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white"
  >Top students:</Heading>
<List tag="ul" class="space-y-1">
  <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
  <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
  <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
</List>
```

## Nested

This example can be used to nest multiple lists into each other.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ol" list="decimal">
  <Li
    >List item one
    <List tag="ul" class="pl-5 mt-2 space-y-1">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li
    >List item two
    <List tag="ul" class="pl-5 mt-2 space-y-1">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li
    >List item three
    <List tag="ul" class="pl-5 mt-2 space-y-1">
      <Li>Again please don't nest lists if you want</Li>
      <Li>Nobody wants to look at this.</Li>
      <Li>I'm upset that we even have to bother styling this.</Li>
    </List>
  </Li>
</List>
```

## Description List

Create a description list by using the `tag="dl"` prop and set the term and name with the following example.

```svelte example
<script>
  import { List, Li, DescriptionList } from 'flowbite-svelte';
</script>

<List tag="dl" color="text-gray-900 dark:text-white">
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>
    <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>
  </div>
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>
    <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>
  </div>
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>
    <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>
  </div>
</List>
```

## List with icon

Use this example to create a list of items with custom SVG icons instead of the default bullets.

```svelte example
<script>
  import { List, Li, Span } from 'flowbite-svelte';
</script>

<List tag="ul" class="mb-8 space-y-4" list="none">
  <Li icon class="space-x-3">
    <svg
      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" /></svg>
    Individual configuration
  </Li>
  <Li icon class="space-x-3">
    <svg
      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" /></svg>
    No setup, or hidden fees
  </Li>
  <Li icon class="space-x-3">
    <svg
      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" /></svg>
    Team size: <Span>1 developer</Span>
  </Li>
  <Li icon class="space-x-3">
    <svg
      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" /></svg>
    Premium support: <Span>6 months</Span>
  </Li>
  <Li icon class="space-x-3">
    <svg
      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd" /></svg>
    Free updates: <Span>6 months</Span>
  </Li>
</List>
```

## Advanced layout

This example can be used to show more details for each list item such as the user’s name, email and profile picture.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ul" class="divide-y divide-gray-200 dark:divide-gray-700">
  <Li class="pb-3 sm:pb-4" icon>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src="/images/profile-picture-1.webp"
          alt="Neil profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $320
      </div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4" icon>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src="/images/profile-picture-2.webp"
          alt="Bonnie profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $3467
      </div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4" icon>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src="/images/profile-picture-3.webp"
          alt="Michael profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $67
      </div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4" icon>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src="/images/profile-picture-4.webp"
          alt="Thomas profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomas Lean</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $2367
      </div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4" icon>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          src="/images/profile-picture-5.webp"
          alt="Lana profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        $367
      </div>
    </div>
  </Li>
</List>
```

## Horizontal List

Use this example to create a horizontally aligned list of items.

```svelte example
<script>
  import { List, Li, A } from 'flowbite-svelte';
</script>

<List tag="ul" list="none" ulClass="flex flex-wrap justify-center items-center mb-6">
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >About</A>
  </Li>
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >Premium</A>
  </Li>
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >Campaigns</A>
  </Li>
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >Blog</A>
  </Li>
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >Affiliate Program</A>
  </Li>
  <Li>
    <A href="/" class="mr-4 hover:underline md:mr-6" textColor="text-gray-700 dark:text-white"
      >FAQs</A>
  </Li>
</List>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">List</Heading>

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Li</Heading>

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Span</Heading>

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">DescriptionList</Heading>

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>
