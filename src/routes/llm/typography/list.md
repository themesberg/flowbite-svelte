# Svelte Lists - Flowbite


Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

## Setup

```html
<script lang="ts">
  import { List, Li } from "flowbite-svelte";
</script>
```

## Unordored list

Use this example to create a default unordered list of items.

```svelte
<script lang="ts">
  import { Li, List, Heading } from "flowbite-svelte";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
```

### Icons

This example can be used to apply custom icons instead of the default bullets for the list items.

```svelte
<script lang="ts">
  import { List, Li, Heading } from "flowbite-svelte";
  import { CheckCircleSolid, CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li icon>
    <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />
    At least one lowercase character
  </Li>
  <Li icon>
    <CloseCircleSolid class="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>
```

### Nested

Use this example to nested another list of items inside the parent list element.

```svelte
<script lang="ts">
  import { List, Li } from "flowbite-svelte";
</script>

<List tag="ul" class="space-y-4 text-gray-500 dark:text-gray-400">
  <Li>
    List item one
    <List tag="ol" class="mt-2 space-y-1 ps-5">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li>
    List item two
    <List tag="ol" class="mt-2 space-y-1 ps-5">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li>
    List item three
    <List tag="ol" class="mt-2 space-y-1 ps-5">
      <Li>Again please don't nest lists if you want</Li>
      <Li>Nobody wants to look at this.</Li>
      <Li>I'm upset that we even have to bother styling this.</Li>
    </List>
  </Li>
</List>
```

### Unstyled

Use the `tag="dl"` prop to disable the list style bullets or numbers.

```svelte
<script lang="ts">
  import { List, Li, Heading } from "flowbite-svelte";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="dl" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
```

## Ordered list

Use the `tag="ol"` prop to create an ordered list of items with numbers.

```svelte
<script lang="ts">
  import { List, Li, Span, Heading } from "flowbite-svelte";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Top students:</Heading>
<List tag="ol" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
  <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
  <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
</List>
```

### Nested

This example can be used to nest multiple lists into each other.

```svelte
<script lang="ts">
  import { List, Li } from "flowbite-svelte";
</script>

<List tag="ol" class="list-decimal text-gray-500 dark:text-gray-400">
  <Li>
    List item one
    <List tag="ul" class="mt-2 space-y-1 ps-5">
      <Li>You might feel like you are being really "organized" o</Li>
      <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
      <Li>Nesting tons of folders in your source code is also not helpful.</Li>
    </List>
  </Li>
  <Li>
    List item two
    <List tag="ul" class="mt-2 space-y-1 ps-5">
      <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
      <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
      <Li>If you nest four levels deep you belong in prison.</Li>
    </List>
  </Li>
  <Li>
    List item three
    <List tag="ul" class="mt-2 space-y-1 ps-5 text-gray-500 dark:text-gray-400">
      <Li>Again please don't nest lists if you want</Li>
      <Li>Nobody wants to look at this.</Li>
      <Li>I'm upset that we even have to bother styling this.</Li>
    </List>
  </Li>
</List>
```

## Description List

Create a description list by using the `tag="dl"` prop and set the term and name with the following example.

```svelte
<script lang="ts">
  import { List, DescriptionList } from "flowbite-svelte";
</script>

<List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">
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

```svelte
<script lang="ts">
  import { List, Li, Span } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<List tag="ul" class="mb-8 space-y-4 text-gray-500 dark:text-gray-400">
  <Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    Individual configuration
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    No setup, or hidden fees
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Team size: <Span>1 developer</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Premium support: <Span>6 months</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
    <span>Free updates: <Span>6 months</Span></span>
  </Li>
</List>
```

## Advanced layout

This example can be used to show more details for each list item such as the user’s name, email and profile picture.

```svelte
<script lang="ts">
  import { List, Li } from "flowbite-svelte";
</script>

<List tag="dl" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
  <Li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="shrink-0">
        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="shrink-0">
        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="shrink-0">
        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="shrink-0">
        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>
    </div>
  </Li>
  <Li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="shrink-0">
        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
    </div>
  </Li>
</List>
```

## Horizontal List

Use this example to create a horizontally aligned list of items.

```svelte
<script lang="ts">
  import { List, Li, A } from "flowbite-svelte";
</script>

<List tag="dl" class="mb-6 flex flex-wrap items-center justify-center">
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">About</A>
  </Li>
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Premium</A>
  </Li>
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Campaigns</A>
  </Li>
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Blog</A>
  </Li>
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">Affiliate Program</A>
  </Li>
  <Li>
    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-white">FAQs</A>
  </Li>
</List>
```

## Component data

### List

#### Types

[ListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2008)

#### Props

- children
- tag: "ul"
- isContenteditable: false
- position: "inside"
- ctxClass
- class: className


## References
