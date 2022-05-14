<script>
  import {
    Sidebar,
    SidebarCTA,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItemWrapper,
    SidebarItems,
    SidebarLogo,
    Badge,
    Button,
  } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import {
    HiArrowSmRightSolid,
    HiChartPieSolid,
    HiInboxSolid,
    HiShoppingBagSolid,
    HiSupportSolid,
    HiTableSolid,
    HiUserSolid,
    HiViewBoardsSolid,
    HiXOutline,
  } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default sidebar</span>
    <Card>
      <Sidebar class="!bg-gray-50" collapsed={false}>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
            <SidebarItem href="#" icon={HiViewBoardsSolid} label="Pro" labelColor="gray">Kanban</SidebarItem>
            <SidebarItem href="#" icon={HiInboxSolid} label="3">Inbox</SidebarItem>
            <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
            <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      <HighlightSvelte
        code={`<Sidebar class="!bg-gray-50" collapsed={false}>
  <SidebarItems>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
      <SidebarItem href="#" icon={HiViewBoardsSolid} label="Pro" labelColor="gray">Kanban</SidebarItem>
      <SidebarItem href="#" icon={HiInboxSolid} label="3">Inbox</SidebarItem>
      <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
      <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
      <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
      <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
</Sidebar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Multi-level dropdown </span>
    <Card>
      <Sidebar class="!bg-gray-50" collapsed={false}>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
            <SidebarCollapse icon={HiShoppingBagSolid} label="E-commerce">
              <SidebarItem href="#">Products</SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
            <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
            <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      <HighlightSvelte
        code={`<Sidebar class="!bg-gray-50" collapsed={false}>
  <SidebarItems>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
      <SidebarCollapse icon={HiShoppingBagSolid} label="E-commerce">
        <SidebarItem href="#">Products</SidebarItem>
      </SidebarCollapse>
      <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
      <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
      <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
      <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
      <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
</Sidebar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Content separator </span>
    <Card>
      <Sidebar class="!bg-gray-50" collapsed={false}>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
            <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
            <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
            <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
            <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Upgrade to Pro</SidebarItem>
            <SidebarItem href="#" icon={HiViewBoardsSolid}>Documentation</SidebarItem>
            <SidebarItem href="#" icon={HiSupportSolid}>Help</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      <HighlightSvelte
        code={`<Sidebar class="!bg-gray-50" collapsed={false}>
  <SidebarItems>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
      <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
      <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
      <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
      <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
      <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
      <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
    </SidebarItemGroup>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Upgrade to Pro</SidebarItem>
      <SidebarItem href="#" icon={HiViewBoardsSolid}>Documentation</SidebarItem>
      <SidebarItem href="#" icon={HiSupportSolid}>Help</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
</Sidebar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">CTA button </span>
    <Card>
      <Sidebar class="!bg-gray-50" collapsed={false}>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
            <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
            <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
            <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
            <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
        <SidebarCTA>
          <div class="mb-3 flex items-center">
            <Badge color="yellow">Beta</Badge>
            <Button
              aria-label="Close"
              class="-mx-1.5 -my-1.5 ml-auto !h-6 !w-6 bg-transparent !p-1 text-blue-900 hover:bg-blue-200 dark:!bg-blue-900 dark:text-blue-200 dark:hover:!bg-blue-800"
              data-collapse-toggle="dropdown-cta"
            >
              <span class="sr-only"> Close </span>
              <HiXOutline class="h-4 w-4" />
            </Button>
          </div>
          <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in
            your profile.
          </p>
          <a
            class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            Turn new navigation off
          </a>
        </SidebarCTA>
      </Sidebar>
      <HighlightSvelte
        code={`<Sidebar class="!bg-gray-50" collapsed={false}>
  <SidebarItems>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
      <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
      <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
      <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
      <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
      <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
      <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
  <SidebarCTA>
    <div class="mb-3 flex items-center">
      <Badge color="yellow">Beta</Badge>
      <Button
        aria-label="Close"
        class="-mx-1.5 -my-1.5 ml-auto !h-6 !w-6 bg-transparent !p-1 text-blue-900 hover:bg-blue-200 dark:!bg-blue-900 dark:text-blue-200 dark:hover:!bg-blue-800"
        data-collapse-toggle="dropdown-cta"
      >
        <span class="sr-only"> Close </span>
        <HiXOutline class="h-4 w-4" />
      </Button>
    </div>
    <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
      Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in
      your profile.
    </p>
    <a
      class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      href="#"
    >
      Turn new navigation off
    </a>
  </SidebarCTA>
</Sidebar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Logo branding </span>
    <Card>
      <Sidebar class="!bg-gray-50" collapsed={false}>
        <SidebarLogo href="#" img="favicon.png" imgAlt="Flowbite logo">Flowbite</SidebarLogo>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
            <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
            <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
            <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
            <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
            <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      <HighlightSvelte
        code={`<Sidebar class="!bg-gray-50" collapsed={false}>
  <SidebarLogo href="#" img="favicon.png" imgAlt="Flowbite logo">Flowbite</SidebarLogo>
  <SidebarItems>
    <SidebarItemGroup>
      <SidebarItem href="#" icon={HiChartPieSolid}>Dashboard</SidebarItem>
      <SidebarItem href="#" icon={HiViewBoardsSolid}>Kanban</SidebarItem>
      <SidebarItem href="#" icon={HiInboxSolid}>Inbox</SidebarItem>
      <SidebarItem href="#" icon={HiUserSolid}>Users</SidebarItem>
      <SidebarItem href="#" icon={HiShoppingBagSolid}>Products</SidebarItem>
      <SidebarItem href="#" icon={HiArrowSmRightSolid}>Sign In</SidebarItem>
      <SidebarItem href="#" icon={HiTableSolid}>Sign Up</SidebarItem>
    </SidebarItemGroup>
  </SidebarItems>
</Sidebar>`}
      />
    </Card>
  </div>
</div>
