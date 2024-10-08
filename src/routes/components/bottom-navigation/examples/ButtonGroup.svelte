<script>
  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem, Skeleton, ImagePlaceholder } from "$lib";
  import { HomeSolid, BookmarkSolid, PlusOutline, SearchOutline, AdjustmentsVerticalOutline } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-28" />

  <BottomNav position="absolute" navType="group" innerClass="grid-cols-5">
    {#snippet header()}
      <BottomNavHeader>
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true} />
        <BottomNavHeaderItem itemName="Following" />
      </BottomNavHeader>
    {/snippet}
    <BottomNavItem btnName="Home">
      <HomeSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Bookmark">
      <BookmarkSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="New post">
      <PlusOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Search">
      <SearchOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Settings">
      <AdjustmentsVerticalOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>
</div>
