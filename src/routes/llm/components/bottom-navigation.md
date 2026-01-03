# Svelte Bottom Navigation - Flowbite


The bottom navigation bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Check out multiple examples of the bottom navigation component based on various styles, controls, sizes, content and leverage the utility classes from Tailwind CSS to integrate into your own project.

## Setup

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem } from "flowbite-svelte";
</script>
```

## Default bottom navigation

Use the default bottom navigation bar example to show a list of menu items as buttons to allow the user to navigate through your website based on a fixed position. You can also use anchor tags instead of buttons for better semantic HTML and SEO.

The fixed positioning ensures the navigation remains accessible as users scroll through content, providing consistent access to key actions and navigation.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder />

<BottomNav position="fixed" classes={{ content: "grid-cols-4" }}>
  <BottomNavItem btnName="Home">
    <HomeOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
</BottomNav>
```

## Adding links and active class

Utilize the `href` prop within the `BottomNavItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `BottomNav` component.

By default, the `BottomNavItem` will only be set to active if the `href` and the `activeUrl` match. This ensures precise highlighting of the current page.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ content: "grid-cols-4" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
```

The following example shows how to change the active class styling using the `activeClass` prop. This allows you to customize the appearance of active navigation items to match your brand or design system.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ content: "grid-cols-4", active: "font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
```

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
  let activeUrl = $derived(page.url.pathname);
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ content: "grid-cols-4" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeOutline class={activeUrl === "/" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletOutline class={activeUrl === "/docs/pages/quickstart" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline class={activeUrl === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleOutline class={activeUrl === "/docs/components/accordion" ? svgActiveClass : svgClass} />
  </BottomNavItem>
</BottomNav>
```

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="border" classes={{ content: "grid-cols-4" }}>
  <BottomNavItem btnName="Home">
    <HomeOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
</BottomNav>
```

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items.

The centered primary action draws attention and makes the most important action easily accessible.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline, PlusOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="application" classes={{ content: "grid-cols-5" }}>
  <BottomNavItem btnName="Home" appBtnPosition="left">
    <HomeOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Home</Tooltip>
  <BottomNavItem btnName="Wallet" appBtnPosition="middle">
    <WalletOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
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
    <UserCircleOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
```

## Example with pagination

This example can be used to paginate multiple pages on a single view alongside other menu items.

This keeps pagination accessible without requiring users to scroll to the bottom of content.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { FileCirclePlusOutline, BookmarkOutline, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="pagination" classes={{ content: "grid-cols-6" }}>
  <BottomNavItem btnName="New document">
    <FileCirclePlusOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>New document</Tooltip>
  <BottomNavItem btnName="Bookmark">
    <BookmarkOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Bookmark</Tooltip>
  <div class="col-span-2 flex items-center justify-center">
    <div class="rounded-base mx-2 flex w-full max-w-[128px] items-center justify-between bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400">
      <button
        type="button"
        class="rounded-s-base inline-flex h-8 items-center justify-center bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
      >
        <AngleLeftOutline class="ms-1 h-2 w-2" />
        <span class="sr-only">Previous page</span>
      </button>
      <span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
      <button
        type="button"
        class="rounded-e-base inline-flex h-8 items-center justify-center bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
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
    <UserCircleOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
```

## Button group bottom bar

This example demonstrates a button group layout in the bottom bar.

```svelte
<script lang="ts">
  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, BookmarkOutline, PlusOutline, SearchOutline, AdjustmentsVerticalOutline } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="group" classes={{ content: "grid-cols-5" }}>
    {#snippet header()}
      <BottomNavHeader>
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true} />
        <BottomNavHeaderItem itemName="Following" />
      </BottomNavHeader>
    {/snippet}
    <BottomNavItem btnName="Home" id="group-home">
      <HomeOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Home</Tooltip>
    <BottomNavItem btnName="Bookmark" id="group-bookmark">
      <BookmarkOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
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
  import { ClockOutline, UsersGroupOutline, StarOutline } from "flowbite-svelte-icons";
  let list: ListGroupItemType[] = [
    {
      img: { src: "/images/people/profile-picture-1.jpg", alt: "Neil Sims" },
      comment: 'New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what\'s up? All set for the presentation?"',
      message: "a few moments ago"
    },
    {
      img: { src: "/images/people/profile-picture-2.jpg", alt: "Bonnie Green" },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Leslie Livingston" },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-4.jpg", alt: "Robert Brown" },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Michael Gough" },
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
  <BottomNav position="sticky" navType="card" classes={{ content: "grid-cols-3 pt-2 pb-4" }}>
    <BottomNavItem btnName="Latest" id="card-latest">
      <ClockOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Following" id="card-following">
      <UsersGroupOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Favorites" id="card-favorites">
      <StarOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
  </BottomNav>
</Card>
```

## Accessibility

The Bottom Navigation component follows accessibility best practices:

- **Keyboard Navigation**: All items are keyboard accessible using Tab and Enter/Space
- **ARIA Landmarks**: Use appropriate ARIA roles like `navigation` for the container
- **Focus Indicators**: Clear focus states for keyboard users
- **Screen Reader Support**: Link text and labels are announced properly
- **Touch Targets**: Minimum 44x44px tap targets for mobile usability
- **Contrast**: Text and icons meet WCAG contrast requirements

## See also

- [Navbar](https://flowbite-svelte.com/llm/components/navbar.md)
- [Sidebar](https://flowbite-svelte.com/llm/components/sidebar.md)
- [Tabs](https://flowbite-svelte.com/llm/components/tabs.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)


## Component data

### BottomNav

#### Types

[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L290)

#### Props

- children
- header
- position: "fixed"
- navType: "default"
- class: className
- classes
- activeUrl: ""

### BottomNavHeader

#### Types

[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L303)

#### Props

- children
- class: className
- classes

### BottomNavHeaderItem

#### Types

[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L307)

#### Props

- itemName
- active
- class: className

### BottomNavItem

#### Types

[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L296)

#### Props

- children
- btnName
- appBtnPosition: "middle"
- class: className
- classes
- active: manualActive


## References

- [Flowbite Bottom Navigation](https://flowbite.com/docs/components/bottom-navigation/)
