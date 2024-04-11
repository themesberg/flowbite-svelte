<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import {
    Button,
    Dropdown,
    DropdownDivider,
    DropdownItem,
    uiHelpers
  } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';

  let dropdown = uiHelpers();

  let isOpen = $state(false);
  let toggle = dropdown.toggle;
  let close = dropdown.close;

  let dropdown2 = uiHelpers();
  let isOpen2 = $state(false);
  let toggle2 = dropdown2.toggle;
  let close2 = dropdown2.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    isOpen = dropdown.isOpen;
    isOpen2 = dropdown2.isOpen;
  });
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Dropdown</H1>

<H2>Default dropdown</H2>

<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown {isOpen} divclass="absolute top-[40px] -left-[150px]">
      {#snippet header()}
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
      {/snippet}
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
        <DropdownItem href="/components/footer">Footer</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/dropdown">Dropdown</DropdownItem>
      {/snippet}
      {#snippet footer()}
        <div class="py-2">
          <a
            href="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </div>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown1.md'] as string} />
