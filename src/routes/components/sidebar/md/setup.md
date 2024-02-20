<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { ChartSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, EditSolid, ShoppingBagSolid, FireSolid, BookSolid, RestoreWindowOutline } from 'flowbite-svelte-icons';
  import PlusPlaceholder from '../../utils/PlusPlaceholder.svelte';
  const spanclass = 'flex-1 ms-3 whitespace-nowrap';
  const activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  const nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
</script>