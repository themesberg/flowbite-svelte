<script>
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip } from "$lib";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";

  let activeUrl = $state($page.url.pathname);
  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav {activeUrl} position="absolute" navType="application" innerClass="grid-cols-5">
    <BottomNavItem btnName="Home" appBtnPosition="left" btnClass="static">
      <HomeSolid id="home" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#home">Home</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Wallet" appBtnPosition="middle">
      <WalletSolid id="wallet" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#wallet">Wallet</Tooltip>
    </BottomNavItem>
    <div class="flex items-center justify-center">
      <BottomNavItem btnName="Create new item" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-hidden dark:focus:ring-primary-800">
        <PlusOutline id="create" class="text-white" />
        <Tooltip arrow={false} triggeredBy="#create">Create new item</Tooltip>
      </BottomNavItem>
    </div>
    <BottomNavItem btnName="Settings" appBtnPosition="middle">
      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Profile" appBtnPosition="right">
      <UserCircleSolid id="profile" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false} triggeredBy="#profile">Profile</Tooltip>
    </BottomNavItem>
  </BottomNav>
</div>
