<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline, PlusOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="application" classes={{ inner: "grid-cols-5" }}>
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
