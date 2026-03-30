<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { FileCirclePlusOutline, BookmarkOutline, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
  const navIconClass = "group-hover:text-fg-brand text-body mb-1 h-6 w-6";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="pagination" classes={{ content: "grid-cols-6" }}>
  <BottomNavItem btnName="New document">
    <FileCirclePlusOutline class={navIconClass} />
  </BottomNavItem>
  <Tooltip arrow={false}>New document</Tooltip>
  <BottomNavItem btnName="Bookmark">
    <BookmarkOutline class={navIconClass} />
  </BottomNavItem>
  <Tooltip arrow={false}>Bookmark</Tooltip>
  <div class="col-span-2 flex items-center justify-center">
    <div class="rounded-base bg-neutral-tertiary text-body mx-2 flex w-full max-w-[128px] items-center justify-between">
      <button
        type="button"
        class="rounded-s-base bg-neutral-tertiary hover:bg-neutral-tertiary-medium focus:ring-default inline-flex h-8 items-center justify-center px-1 focus:ring-2 focus:outline-hidden"
      >
        <AngleLeftOutline class="ms-1 h-2 w-2" />
        <span class="sr-only">Previous page</span>
      </button>
      <span class="mx-1 shrink-0 text-sm font-medium">1 of 345</span>
      <button
        type="button"
        class="rounded-e-base bg-neutral-tertiary hover:bg-neutral-tertiary-medium focus:ring-default inline-flex h-8 items-center justify-center px-1 focus:ring-2 focus:outline-hidden"
      >
        <AngleRightOutline class="me-1 h-2 w-2" />
        <span class="sr-only">Next page</span>
      </button>
    </div>
  </div>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class={navIconClass} />
  </BottomNavItem>
  <Tooltip arrow={false}>Settings</Tooltip>
  <BottomNavItem btnName="Profile">
    <UserCircleOutline class={navIconClass} />
  </BottomNavItem>
  <Tooltip arrow={false}>Profile</Tooltip>
</BottomNav>
