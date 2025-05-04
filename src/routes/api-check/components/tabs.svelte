<script>
  import { Tabs, TabItem, Timeline, TimelineItem, Button, P, A, Badge } from "$lib";
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<h1 class="my-4 text-3xl">Tabs</h1>

<p>The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.</p>

<h2 class="my-4 text-2xl">Default tabs</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs>
    <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem disabled>
      {#snippet titleSlot()}
        <span class="text-gray-400 dark:text-gray-500">Disabled</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<h2 class="my-4 text-2xl">Tabs with underline</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs tabStyle="underline">
    <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem disabled>
      {#snippet titleSlot()}
        <span class="text-gray-400 dark:text-gray-500">Disabled</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<h2 class="my-4 text-2xl">Tabs with icons</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs tabStyle="underline">
    <TabItem open>
      {#snippet titleSlot()}
        <div class="flex items-center gap-2">
          <UserCircleSolid size="md" />
          Profile
        </div>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <div class="flex items-center gap-2">
          <GridSolid size="md" />
          Dashboard
        </div>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <div class="flex items-center gap-2">
          <AdjustmentsVerticalSolid size="md" />
          Settings
        </div>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <div class="flex items-center gap-2">
          <ClipboardSolid size="md" />
          Contacts
        </div>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Contacts:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<h2 class="my-4 text-2xl">Pills tabs</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs tabStyle="pill">
    <TabItem open>
      {#snippet titleSlot()}
        <span>Profile</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Dashboard</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Settings</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Users</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<h2 class="my-4 text-2xl">Full width tabs</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs tabStyle="full" class="flex divide-x divide-gray-200 rounded-lg shadow-sm rtl:divide-x-reverse dark:divide-gray-700">
    <TabItem class="w-full" open>
      {#snippet titleSlot()}
        <span>Profile</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}
        <span>Dashboard</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}
        <span>Settings</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}
        <span>Users</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<h2 class="my-4 text-2xl">Components in tab contents</h2>

<div class="my-4 my-4 rounded rounded border p-4">
  <Tabs>
    <TabItem open>
      {#snippet titleSlot()}
        <span>Profile</span>
      {/snippet}
      <Timeline>
        <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <Button color="alternative">
            Learn more
            <ArrowRightOutline class="ms-2 h-5 w-5" />
          </Button>
        </TimelineItem>
        <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </TimelineItem>
        <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </TimelineItem>
      </Timeline>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Dashboard</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Settings</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Users</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>
