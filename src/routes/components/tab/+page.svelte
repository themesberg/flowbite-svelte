<script lang="ts">
  import { Tabs, TabItem } from '$lib';
  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from 'flowbite-svelte-icons';

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
  <TabItem title='Disabled'disabled>
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
  <Tabs style="underline">
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
      <span class="text-red-400 dark:text-red-500">Disabled</span>
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
  <Tabs style="underline">
    <TabItem open>
      {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <UserCircleSolid size="sm" />
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
        <GridSolid size="sm" />
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
        <AdjustmentsVerticalSolid size="sm" />
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
        <ClipboardSolid size="sm" />
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
  <Tabs style="pill">
    <TabItem open>
      {#snippet titleSlot()}
      <div class="flex items-center gap-2">
        <UserCircleSolid size="sm" />
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
        <GridSolid size="sm" />
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
        <AdjustmentsVerticalSolid size="sm" />
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
        <ClipboardSolid size="sm" />
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

<HighlightCompo codeLang="ts" code={modules['./md/pills-tabs.md'] as string} />







