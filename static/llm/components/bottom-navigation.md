# Svelte Bottom Navigation - Flowbite


The bottom bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Check out multiple examples of the bottom navigation component based on various styles, controls, sizes, content and leverage the utility classes from Tailwind CSS to integrate into your own project.

## Setup

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem } from "flowbite-svelte";
</script>
```

## Default bottom navigation

Use the default bottom navigation bar example to show a list of menu items as buttons to allow the user to navigate through your website based on a fixed position. You can also use anchor tags instead of buttons.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" classes={{ inner: "grid-cols-4" }}>
  <BottomNavItem btnName="Home">
    <HomeSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
</BottomNav>
```

## Adding links and active class

Utilize the `href` prop within the `BottomNavItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `BottomNav` component.

By default, the `BottomNavItem` will only be set to active if the `href` and the `activeUrl` are exactly the same.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ inner: "grid-cols-4" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>
```

The following example shows how to change active class, by using `activeClass` prop.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ inner: "grid-cols-4" }} activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>
```

Use the following example to change the icon colors:

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
  let activeUrl = $derived(page.url.pathname);
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ inner: "grid-cols-4" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid class={activeUrl === "/" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid class={activeUrl === "/docs/pages/quickstart" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline class={activeUrl === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid class={activeUrl === "/docs/components/accordion" ? svgActiveClass : svgClass} />
  </BottomNavItem>
</BottomNav>
```

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="border" classes={{ inner: "grid-cols-4" }}>
  <BottomNavItem btnName="Home">
    <HomeSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
</BottomNav>
```

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="application" classes={{ inner: "grid-cols-5" }}>
  <BottomNavItem btnName="Home" appBtnPosition="left">
    <HomeSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Home</Tooltip>
  <BottomNavItem btnName="Wallet" appBtnPosition="middle">
    <WalletSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Wallet</Tooltip>
  <div class="flex items-center justify-center">
    <BottomNavItem
      btnName="Create new item"
      appBtnPosition="middle"
      class="bg-primary-600 hover:bg-primary-700 group focus:ring-primary-300 dark:focus:ring-primary-800 inline-flex h-10 w-10 items-center justify-center rounded-full font-medium focus:ring-4 focus:outline-hidden"
    >
      <PlusOutline class="text-white" />
    </BottomNavItem>
    <Tooltip arrow={false}>Create new item</Tooltip>
  </div>
  <BottomNavItem btnName="Settings" appBtnPosition="middle">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Settings</Tooltip>
  <BottomNavItem btnName="Profile" appBtnPosition="right">
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
```

## Example with pagination

This example be used to paginate multiple pages on a single view alongside other menu items.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { FileCirclePlusOutline, BookmarkSolid, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="pagination" classes={{ inner: "grid-cols-6" }}>
  <BottomNavItem btnName="New document">
    <FileCirclePlusOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>New document</Tooltip>
  <BottomNavItem btnName="Bookmark">
    <BookmarkSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Bookmark</Tooltip>
  <div class="col-span-2 flex items-center justify-center">
    <div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400">
      <button
        type="button"
        class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      >
        <AngleLeftOutline class="ms-1 h-2 w-2" />
        <span class="sr-only">Previous page</span>
      </button>
      <span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
      <button
        type="button"
        class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      >
        <AngleRightOutline class="me-1 h-2 w-2" />
        <span class="sr-only">Next page</span>
      </button>
    </div>
  </div>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Settings</Tooltip>
  <BottomNavItem btnName="Profile">
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
```

## Button group bottom bar

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, BookmarkSolid, PlusOutline, SearchOutline, AdjustmentsVerticalOutline } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="group" classes={{ inner: "grid-cols-5" }}>
    {#snippet header()}
      <BottomNavHeader>
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true} />
        <BottomNavHeaderItem itemName="Following" />
      </BottomNavHeader>
    {/snippet}
    <BottomNavItem btnName="Home" id="group-home">
      <HomeSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Home</Tooltip>
    <BottomNavItem btnName="Bookmark" id="group-bookmark">
      <BookmarkSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Bookmark</Tooltip>
    <BottomNavItem btnName="New post" id="group-new">
      <PlusOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>New Post</Tooltip>
    <BottomNavItem btnName="Search" id="group-search">
      <SearchOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Search</Tooltip>
    <BottomNavItem btnName="Settings" id="group-settings">
      <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Settings</Tooltip>
  </BottomNav>
</div>
```

## Card with bottom bar

This example can be used to position a bottom navigation bar inside of a card element with scroll enabled on the Y axis to allow changing the content inside of the card, enable certain actions or show a list of menu items.

You can even use the other bottom navbar examples to exchange the default one presented here.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Card, Listgroup, Avatar, type ListGroupItemType } from "flowbite-svelte";
  import { ClockSolid, UsersGroupOutline, StarSolid } from "flowbite-svelte-icons";
  let list: ListGroupItemType[] = [
    {
      img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims" },
      comment: 'New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what\'s up? All set for the presentation?"',
      message: "a few moments ago"
    },
    {
      img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-3.webp", alt: "Leslie Livingston" },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-4.webp", alt: "Robert Brown" },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-5.webp", alt: "Michael Gough" },
      comment: "Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.",
      message: "23 minutes ago"
    }
  ];
</script>

<Card class="relative h-96 overflow-y-scroll rounded-lg border border-gray-100 bg-white dark:border-gray-600 dark:bg-gray-700">
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      {#if item && typeof item !== "string"}
        <a href="/" class="flex w-full items-center justify-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
          <Avatar src={item.img?.src} alt={item.img?.alt} class="me-3 shrink-0" />
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">{@html item.comment || ""}</p>
            <span class="text-primary-600 dark:text-primary-500 text-xs">{@html item.message || ""}</span>
          </div>
        </a>
      {/if}
    {/snippet}
  </Listgroup>
  <BottomNav position="sticky" navType="card" classes={{ inner: "grid-cols-3 pt-2 pb-4" }}>
    <BottomNavItem btnName="Latest" id="card-latest">
      <ClockSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Following" id="card-following">
      <UsersGroupOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Favorites" id="card-favorites">
      <StarSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
  </BottomNav>
</Card>
```

## Component data

### BottomNav

#### Types

[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L285)

#### Props

- children
- header
- position: "fixed"
- navType: "default"
- class: className
- classes
- outerClass
- innerClass
- activeClass
- activeUrl: ""

### BottomNavHeader

#### Types

[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L304)

#### Props

- children
- class: className
- classes
- outerClass
- innerClass

### BottomNavHeaderItem

#### Types

[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L310)

#### Props

- itemName
- active
- class: className

### BottomNavItem

#### Types

[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L294)

#### Props

- children
- btnName
- appBtnPosition: "middle"
- activeClass
- class: className
- classes
- btnClass
- spanClass
- active: manualActive


## References

- [Flowbite Bottom Navigation](https://flowbite.com/docs/components/bottom-navigation/)
