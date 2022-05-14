<script>
  import '../app.css';
  import { Navbar, Sidebar, SidebarItem, SidebarItems, SidebarItemGroup } from '$lib';
  import { HiMenuAlt1Outline } from 'svelte-icons/hi';
  import categories from '../categories';
  import highlightStyle from 'svelte-highlight/styles/github-dark-dimmed';
  import { FaGithub } from 'svelte-icons/fa';

  let collapsed = false;
</script>

<svelte:head>
  {@html highlightStyle}
  <title>Flowbite Svelte Components</title>
</svelte:head>

<div class="flex h-screen w-full flex-col overflow-hidden">
  <Navbar class="border-b" fluid>
    <div class="flex items-center">
      <button on:click={() => (collapsed = !collapsed)}>
        <HiMenuAlt1Outline class="mr-6 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400" />
      </button>
      <span class="text-xl font-semibold dark:text-white">Flowbite Svelte Components</span>
    </div>
    <div class="flex items-center gap-2">
      <a
        class="cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        href="https://github.com/edde746/flowbite-svelte-but-better"
        title="Github Repository"
        target="_blank"
        rel="noreferrer"
      >
        <!-- <BsGithub class="h-5 w-5" /> -->
        <FaGithub class="h-5 w-5 text-black dark:text-white" />
      </a>
    </div>
  </Navbar>
  <div class="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
    <Sidebar {collapsed}>
      <SidebarItems>
        <SidebarItemGroup>
          {#each categories as { href, icon, title }}
            <SidebarItem {icon} {href}>
              {title}
            </SidebarItem>
          {/each}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    <main class="flex-1 overflow-auto p-4">
      <slot />
    </main>
  </div>
</div>
