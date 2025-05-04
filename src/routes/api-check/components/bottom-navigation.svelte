<script lang="ts">
  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem, Tooltip, Skeleton, ImagePlaceholder, Card, Listgroup, Avatar, type ListGroupItemType } from "$lib";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline, FileCirclePlusOutline, BookmarkSolid, AngleLeftOutline, AngleRightOutline, ClockSolid, UsersGroupOutline, StarSolid, SearchOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";

  let activeUrl = $derived(page.url.pathname);
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";

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

<h1 class="my-4 text-3xl">Bottom Navigation</h1>

<h2 class="my-4 text-2xl">Default bottom navigation</h2>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" innerClass="grid-cols-4">
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
</div>

<h2 class="my-4 text-2xl">Adding links and active class</h2>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4">
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
</div>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4" activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
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
</div>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4">
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
</div>

<h2 class="my-4 text-2xl">Menu items with border</h2>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="border" innerClass="grid-cols-4">
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
</div>

<h2 class="my-4 text-2xl">Application bar example</h2>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="application" innerClass="grid-cols-5">
    <BottomNavItem btnName="Home" appBtnPosition="left">
      <HomeSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Home</Tooltip>
    <BottomNavItem btnName="Wallet" appBtnPosition="middle">
      <WalletSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <Tooltip arrow={false}>Wallet</Tooltip>
    <div class="flex items-center justify-center">
      <BottomNavItem btnName="Create new item" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:focus:ring-primary-800">
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
</div>

<h2 class="my-4 text-2xl">Example with pagination</h2>

<div class="border rounded p-4 my-4 relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="pagination" innerClass="grid-cols-6">
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
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <AngleLeftOutline class="ms-1 h-2 w-2" />
          <span class="sr-only">Previous page</span>
        </button>
        <span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:outline-hidden dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
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
</div>

<h2 class="my-4 text-2xl">Button group bottom bar</h2>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="group" innerClass="grid-cols-5">
    {#snippet header()}
      <BottomNavHeader>
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true} />
        <BottomNavHeaderItem itemName="Following" />
      </BottomNavHeader>
    {/snippet}
    <BottomNavItem btnName="Home" id="group-home" class="grid-cols-4">
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

<h2 class="my-4 text-2xl">Card with bottom bar</h2>

<div class="flex justify-center">
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
    <BottomNav position="sticky" navType="card" innerClass="grid-cols-3 pt-2 pb-4">
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
</div>
