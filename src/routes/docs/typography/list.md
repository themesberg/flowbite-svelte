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
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
 
  const components = 'List, Li, DescriptionList'
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

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
```

### Icons

This example can be used to apply custom icons instead of the default bullets for the list items.

```svelte example
<script>
  import { List, Li, Heading } from 'flowbite-svelte';
  import { CheckCircleSolid, CloseCircleSolid } from 'flowbite-svelte-icons';
</script>

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  <Li icon>
    <CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <CheckCircleSolid class="w-5 h-5 me-2 text-green-500 dark:text-green-400" />
    At least one lowercase character
  </Li>
  <Li icon>
    <CloseCircleSolid class="w-5 h-5 me-2 text-gray-500 dark:text-gray-400" />
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>
```

### Nested

Use this example to nested another list of items inside the parent list element.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ul" class="space-y-4 text-gray-500 dark:text-gray-400">
  <Li>
    List item one
    <List tag="ol" class="ps-5 mt-2 space-y-1">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li>
    List item two
    <List tag="ol" class="ps-5 mt-2 space-y-1">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li>
    List item three
    <List tag="ol" class="ps-5 mt-2 space-y-1">
      <Li>Again please don't nest lists if you want</Li>
      <Li>Nobody wants to look at this.</Li>
      <Li>I'm upset that we even have to bother styling this.</Li>
    </List>
  </Li>
</List>
```

### Unstyled

Use the `list="none"` prop to disable the list style bullets or numbers.

```svelte example
<script>
  import { List, Li, Heading } from 'flowbite-svelte';
</script>

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
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

<Heading tag="h2" customSize="text-lg font-semibold" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Top students:</Heading>
<List tag="ol" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
  <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
  <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
</List>
```

### Nested

This example can be used to nest multiple lists into each other.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ol" list="decimal" class="text-gray-500 dark:text-gray-400">
  <Li>
    List item one
    <List tag="ul" class="ps-5 mt-2 space-y-1">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li>
    List item two
    <List tag="ul" class="ps-5 mt-2 space-y-1">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li>
    List item three
    <List tag="ul" class="ps-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
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

<List tag="dl" class="text-gray-900 dark:text-white divide-y divide-gray-200  dark:divide-gray-700">
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
  import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<List tag="ul" class="mb-8 space-y-4 text-gray-500 dark:text-gray-400" list="none">
  <Li icon class="gap-3">
    <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
    Individual configuration
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
    No setup, or hidden fees
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
    <span>Team size: <Span>1 developer</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
    <span>Premium support: <Span>6 months</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="w-5 h-5 text-green-500 dark:text-green-400" />
    <span>Free updates: <Span>6 months</Span></span>
  </Li>
</List>
```

## Advanced layout

This example can be used to show more details for each list item such as the user’s name, email and profile picture.

```svelte example
<script>
  import { List, Li } from 'flowbite-svelte';
</script>

<List tag="ul" list="none" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
  <Li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Michael Gough</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Thomas Lean</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Lana Byrd</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
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

<List tag="ul" list="none" class="flex flex-wrap justify-center items-center mb-6">
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">About</A>
  </Li>
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">Premium</A>
  </Li>
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">Campaigns</A>
  </Li>
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">Blog</A>
  </Li>
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">Affiliate Program</A>
  </Li>
  <Li>
    <A href="/" class="me-4 hover:underline md:me-6" textColor="text-gray-700 dark:text-white">FAQs</A>
  </Li>
</List>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### List styling

- Use the `class` prop to overwrite the list class.

### Li styling

- Use the `class` prop to overwrite the `li` tag class.

### DescriptionList styling

- Use the `class` prop to overwrite the `description` tag class.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
