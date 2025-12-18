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
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
