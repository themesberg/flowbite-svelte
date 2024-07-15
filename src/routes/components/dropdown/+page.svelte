<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import {
    Button,
    Dropdown,
    DropdownDivider,
    DropdownItem,
    uiHelpers
  } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let transitionParams2 = {
    x: -100,
    duration: 400,
    easing: sineIn
  };

  let transitionParams3 = {
    y: 0,
    duration: 600,
    easing: sineIn
  };

  let dropdownA = uiHelpers();
  let dropdownB = uiHelpers();
  let dropdownC = uiHelpers();
  let dropdownTransition1 = uiHelpers();
  let dropdownTransition2 = uiHelpers();

  let dropdownAStatus = $state(false);
  let closeDropdownA = dropdownA.close;

  let dropdownBStatus = $state(false);
  let closeDropdownB = dropdownB.close;

  let dropdownCStatus = $state(false);
  let closeDropdownC = dropdownC.close;

  let dropdownTransition1Status = $state(false);
  let closeDropdownTransition1 = dropdownTransition1.close;

  let dropdownTransition2Status = $state(false);
  let closeDropdownTransition2 = dropdownTransition2.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownAStatus = dropdownA.isOpen;
    dropdownBStatus = dropdownB.isOpen;
    dropdownCStatus = dropdownC.isOpen;
    dropdownTransition1Status = dropdownTransition1.isOpen;
    dropdownTransition2Status = dropdownTransition2.isOpen;
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
  <Button onclick={dropdownA.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownAStatus}
      closeDropdown={closeDropdownA}
      {transitionParams}
      divClass="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/components/drawer">Drawer</DropdownItem>
        <DropdownItem href="/components/footer">Footer</DropdownItem>
        <DropdownItem href="/components">Alert</DropdownItem>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown1.md'] as string} />

<H2>Active link</H2>

<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownB.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownBStatus}
      closeDropdown={closeDropdownB}
      {transitionParams}
      divClass="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/components/dropdown">Dropdown</DropdownItem>
        <DropdownItem href="/components/footer">Footer</DropdownItem>
        <DropdownItem href="/dropdown">Dropdown</DropdownItem>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown header, footer, and divider</H2>

<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownC.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownCStatus}
      closeDropdown={closeDropdownC}
      {transitionParams}
      divClass="absolute top-[40px] -left-[150px]"
    >
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

<H2>Transtions</H2>

<H3>Slide in/out left</H3>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownTransition1.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownTransition1Status}
      closeDropdown={closeDropdownTransition1}
      transitionParams={transitionParams2}
      divClass="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/components/drawer">Drawer</DropdownItem>
        <DropdownItem href="/components/footer">Footer</DropdownItem>
        <DropdownItem href="/components">Alert</DropdownItem>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H3>Blur</H3>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownTransition2.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-3 w-3 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownTransition2Status}
      closeDropdown={closeDropdownTransition2}
      transitionParams={transitionParams3}
      transitionType="blur"
      divClass="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/components/drawer">Drawer</DropdownItem>
        <DropdownItem href="/components/footer">Footer</DropdownItem>
        <DropdownItem href="/components">Alert</DropdownItem>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>
