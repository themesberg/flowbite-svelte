<script lang="ts">
  import { Tabs, TabItem, Timeline, TimelineItem, Button } from '$lib';
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid, ArrowRightOutline } from 'flowbite-svelte-icons';

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

<H1>Tabs</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default tabs</H2>
<CodeWrapper>
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
    <TabItem title="Disabled" disabled>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/default-tabs.md'] as string} />

<H2>Tabs with underline</H2>
<CodeWrapper>
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
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/tabs-with-underline.md'] as string} />

<H2>Tabs with icons</H2>
<CodeWrapper>
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
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/tabs-with-icons.md'] as string} />

<H2>Pills tabs</H2>
<CodeWrapper>
  <Tabs tabStyle="pill">
    <TabItem open>
      {#snippet titleSlot()}Profile{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}Dashboard{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}Settings{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}Contacts{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Contacts:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/pills-tabs.md'] as string} />

<H2>Full width tabs</H2>
<CodeWrapper>
  <Tabs tabStyle="full" ulClass="flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0">
    <TabItem class="w-full" open>
      {#snippet titleSlot()}Profile{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}Dashboard{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}Settings{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      {#snippet titleSlot()}Users{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/full-width-tabs.md'] as string} />

<H2>Components in tab contents</H2>
<CodeWrapper>
  <Tabs>
    <TabItem open>
      {#snippet titleSlot()}Profile{/snippet}
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
      {#snippet titleSlot()}Dashboard{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}Settings{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}Users{/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/components-in-tab-contents.md'] as string} />
