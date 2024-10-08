<script>
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "$lib";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="application" innerClass="grid-cols-5">
    <BottomNavItem btnName="Home" appBtnPosition="left" btnClass="static">
      <HomeSolid id="home" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Wallet" appBtnPosition="middle">
      <WalletSolid id="wallet" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <div class="flex items-center justify-center">
      <BottomNavItem btnName="Create new item" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">
        <PlusOutline id="create" class="text-white" />
      </BottomNavItem>
    </div>
    <BottomNavItem btnName="Settings" appBtnPosition="middle">
      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Profile" appBtnPosition="right">
      <UserCircleSolid id="profile" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>
</div>
