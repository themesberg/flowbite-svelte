<script>
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip } from "$lib";
  import { FileCirclePlusOutline, BookmarkSolid, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="pagination" innerClass="grid-cols-6">
    <BottomNavItem btnName="New document">
      <FileCirclePlusOutline id="create" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#create">New document</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Bookmark">
      <BookmarkSolid id="bookmark" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#bookmark">Bookmark</Tooltip>
    </BottomNavItem>
    <div class="col-span-2 flex items-center justify-center">
      <div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400">
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <AngleLeftOutline class="ms-1 h-2 w-2" />
          <span class="sr-only">Previous page</span>
        </button>
        <span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <AngleRightOutline class="me-1 h-2 w-2" />
          <span class="sr-only">Next page</span>
        </button>
      </div>
    </div>
    <BottomNavItem btnName="Settings">
      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Profile">
      <UserCircleSolid id="profile" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#profile">Profile</Tooltip>
    </BottomNavItem>
  </BottomNav>
</div>
