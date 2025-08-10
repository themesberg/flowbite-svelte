<script>
  import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
  import {
    ArchiveSolid,
    ArrowRightToBracketOutline,
    CogOutline,
    DollarOutline,
    GridSolid,
    InboxOutline,
    ProfileCardOutline,
    SalePercentOutline,
    ShoppingBagSolid,
    UsersGroupSolid
  } from 'flowbite-svelte-icons';

  const menu = [
    { name: 'Sales', href: '/', icon: ShoppingBagSolid },
    { name: 'Users', href: '/', icon: UsersGroupSolid },
    { name: 'Inbox', href: '/', icon: InboxOutline },
    { name: 'Profile', href: '/', icon: ProfileCardOutline },
    { name: 'Settings', href: '/settings', icon: CogOutline },
    { name: 'Prouducts', href: '/', icon: ArchiveSolid },
    { name: 'Pricing', href: '/pages/pricing', icon: DollarOutline },
    { name: 'Billing', href: '/', icon: SalePercentOutline },
    { name: 'Logout', href: '/', icon: ArrowRightToBracketOutline }
  ];
  let { open = $bindable() } = $props();
</script>

<ToolbarButton size="lg" class="-mx-0.5 hover:text-gray-900 dark:hover:text-white">
  <GridSolid size="lg" />
</ToolbarButton>
<MegaMenu items={menu}>
  {#snippet children({ item })}
    <a href={item.href} class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
      <item.icon class="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-300" />
      <div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
    </a>
  {/snippet}
</MegaMenu>
