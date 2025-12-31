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
