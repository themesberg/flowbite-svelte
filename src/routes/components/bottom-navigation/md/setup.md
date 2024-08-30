<script>
  import { page } from '$app/stores';
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Card, Listgroup, Avatar } from 'svelte-5-ui-lib';
  import { HomeSolid, WalletSolid, AdjustmentsVerticalSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let svgClass = 'mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500';
  let svgActiveClass = 'mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700';
  let activeUrl = $state('')

  $effect(()=>{
    activeUrl = $page.url.pathname
  })
</script>