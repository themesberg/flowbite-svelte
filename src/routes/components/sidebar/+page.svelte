<script lang="ts">
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarDropdownWrapper
  } from '$lib';
  import {
    ChartSolid,
    GridSolid,
    MailBoxSolid,
    UserSolid,
    ArrowRightToBracketSolid,
    EditSolid,
    ShoppingBagSolid,
    FireSolid,
    BookSolid,
    RestoreWindowOutline
  } from 'flowbite-svelte-icons';
  import PlusPlaceholder from '../../utils/PlusPlaceholder.svelte';
  const spanclass = 'flex-1 ms-3 whitespace-nowrap';
  const activeClass =
    'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  const nonActiveClass =
    'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
  const sidebarEx1 = [
    {
      label: 'Dashboard',
      href: '/',
      iconName: ChartSolid
    },
    {
      label: 'Kanban',
      href: '/',
      iconName: GridSolid,
      subContent: 'Pro'
    },
    {
      label: 'Inbox',
      href: '/',
      iconName: MailBoxSolid,
      subContent: '3'
    },
    {
      label: 'Sidebar',
      href: '/components/sidebar',
      iconName: UserSolid
    }
  ];

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Sidebar</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default Sidebar</H2>
<CodeWrapper class="relative">
  <Sidebar aclass="p-2" asideclass="absolute top-6 left-6 z-40">
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanclass}>
        {#snippet icon()}
          <GridSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            Pro
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanclass}>
        {#snippet icon()}
          <MailBoxSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
          >
            3
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        {#snippet icon()}
          <UserSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>
  <div class="h-96 overflow-scroll px-4 sm:ml-64">
    <div
      class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"
    >
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-sidebar.md'] as string} />

<H2>Using object</H2>
<CodeWrapper class="relative">
  <Sidebar aclass="p-2" asideclass="absolute top-6 left-6 z-40">
    <SidebarGroup>
      {#each sidebarEx1 as { label, href, iconName, subContent }}
        <SidebarItem {label} {href} {spanclass}>
          {#snippet icon()}
            <svelte:component
              this={iconName}
              class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          {/snippet}
          {#snippet subtext()}
            <span
              class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {subContent}
            </span>
          {/snippet}
        </SidebarItem>
      {/each}
    </SidebarGroup>
  </Sidebar>
  <div class="h-96 overflow-scroll px-4 sm:ml-64">
    <div
      class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"
    >
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/using-object.md'] as string} />

<H2>Adding active class</H2>

<CodeWrapper class="relative">
  <Sidebar
    {activeClass}
    {nonActiveClass}
    aclass="p-2"
    asideclass="absolute top-6 left-6 z-40"
  >
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanclass}>
        {#snippet icon()}
          <GridSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            Pro
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanclass}>
        {#snippet icon()}
          <MailBoxSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
          >
            3
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        {#snippet icon()}
          <UserSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>
  <div class="h-96 overflow-scroll px-4 sm:ml-64">
    <div
      class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"
    >
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/adding-active-class.md'] as string} />

<H2>Multi-level dropdown</H2>

<CodeWrapper class="relative">
  <Sidebar aclass="p-2" asideclass="absolute top-6 left-6 z-40">
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce" btnclass="p-2">
        {#snippet icon()}
          <ShoppingBagSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        <SidebarItem label="Sidebar" href="/components/sidebar" />
        <SidebarItem label="Billing" />
        <SidebarItem label="Invoice" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanclass}>
        {#snippet icon()}
          <GridSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            Pro
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanclass}>
        {#snippet icon()}
          <MailBoxSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
          >
            3
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet icon()}
          <UserSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>

  <div class="h-128 overflow-scroll px-4 sm:ml-64">
    <div
      class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"
    >
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/multi-level-dropdown.md'] as string} />

<H2>Content separator</H2>

<CodeWrapper>
  <Sidebar aclass="p-2">
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanclass}>
        {#snippet icon()}
          <GridSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            Pro
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanclass}>
        {#snippet icon()}
          <MailBoxSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
          >
            3
          </span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/sidebar">
        {#snippet icon()}
          <UserSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarItem label="Upgrade to Pro">
        {#snippet icon()}
          <FireSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Documentation">
        {#snippet icon()}
          <BookSolid
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Components">
        {#snippet icon()}
          <RestoreWindowOutline
            class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>
</CodeWrapper>

<HighlightCompo code={modules['./md/content-separator.md'] as string} />
