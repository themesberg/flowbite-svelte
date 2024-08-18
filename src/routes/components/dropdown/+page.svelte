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
    DropdownUl,
    DropdownLi, DropdownHeader, DropdownFooter,
    uiHelpers
  } from '$lib';
  import { ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
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
  let dropdownAStatus = $state(false);
  let closeDropdownA = dropdownA.close;

  let dropdownB = uiHelpers();
  let dropdownBStatus = $state(false);
  let closeDropdownB = dropdownB.close;

  let dropdownC = uiHelpers();
  let dropdownCStatus = $state(false);
  let closeDropdownC = dropdownC.close;

  let dropdownDivider = uiHelpers();
  let dropdownDividerStatus = $state(false);
  let closeDropdownDivider = dropdownDivider.close;

  let dropdownMultiLevel = uiHelpers();
  let dropdownMultiLevelStatus = $state(false);
  let closeDropdownMultiLevel = dropdownMultiLevel.close;

  let dropdownMultiLevel2 = uiHelpers();
  let dropdownMultiLevelStatus2 = $state(false);
  let closeDropdownMultiLevel2 = dropdownMultiLevel2.close;

  let dropdownTransition1 = uiHelpers();
  let dropdownTransition1Status = $state(false);
  let closeDropdownTransition1 = dropdownTransition1.close;

  let dropdownTransition2 = uiHelpers();
  let dropdownTransition2Status = $state(false);
  let closeDropdownTransition2 = dropdownTransition2.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownAStatus = dropdownA.isOpen;
    dropdownBStatus = dropdownB.isOpen;
    dropdownCStatus = dropdownC.isOpen;
    dropdownDividerStatus = dropdownDivider.isOpen;
    dropdownMultiLevelStatus2 = dropdownMultiLevel2.isOpen;
    dropdownMultiLevelStatus = dropdownMultiLevel.isOpen;
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

<CodeWrapper class="flex h-64 items-start justify-center">
  <Button onclick={dropdownA.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownAStatus}
      closeDropdown={closeDropdownA}
      {transitionParams}
      class="absolute top-[40px] -left-[150px]"
    >
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown1.md'] as string} />

<H2>Active link</H2>

<CodeWrapper class="flex h-64 items-start justify-center">
  <Button onclick={dropdownB.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownBStatus}
      closeDropdown={closeDropdownB}
      {transitionParams}
      class="absolute top-[40px] -left-[150px]"
    >
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/dropdown">Dropdown</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown divider</H2>
<CodeWrapper class="flex h-64 items-start justify-center">
  <Button onclick={dropdownDivider.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownDividerStatus}
    closeDropdown={closeDropdownDivider}
    {transitionParams}
    class="absolute top-[40px] -left-[150px]"
  >
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownDivider />
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>
</CodeWrapper>

<H2>Dropdown header adn footer</H2>

<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownC.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownCStatus}
      closeDropdown={closeDropdownC}
      {transitionParams}
      class="absolute top-[40px] -left-[150px]"
    >
      <DropdownHeader>
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/dropdown">Dropdown</DropdownLi>
      </DropdownUl>
      <DropdownFooter>
        <div class="py-2">
          <a
            href="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </div>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Transtions</H2>

<H3>Slide in/out left</H3>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownTransition1.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownTransition1Status}
      closeDropdown={closeDropdownTransition1}
      transitionParams={transitionParams2}
      class="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownUl>
          <DropdownLi href="/">Dashboard</DropdownLi>
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components">Alert</DropdownLi>
        </DropdownUl>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H3>Blur</H3>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownTransition2.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownTransition2Status}
      closeDropdown={closeDropdownTransition2}
      transitionParams={transitionParams3}
      transitionType="blur"
      class="absolute top-[40px] -left-[150px]"
    >
      {#snippet children()}
        <DropdownUl>
          <DropdownLi href="/">Dashboard</DropdownLi>
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components">Alert</DropdownLi>
        </DropdownUl>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Multi-level dropdown</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownMultiLevel.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownMultiLevelStatus}
      closeDropdown={closeDropdownMultiLevel}
      {transitionParams}
      class="absolute top-[40px] -left-[150px] overflow-visible"
    >
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <button onclick={dropdownMultiLevel2.toggle} class="flex p-2 pl-4">
          Dropdown<ChevronRightOutline class="w-6 h-6 ms-2 text-primary-700 dark:text-white" /></button>
        <div class="">
          <Dropdown
          dropdownStatus={dropdownMultiLevelStatus2}
          closeDropdown={closeDropdownMultiLevel2}
          {transitionParams}
          class="z-100 absolute top-[10px] left-[120px]"
          >
            <DropdownUl>
              <DropdownLi href="/">Home</DropdownLi>
              <DropdownLi href="/components/footer">Footer</DropdownLi>
              <DropdownLi href="/components">Alert</DropdownLi>
            </DropdownUl>
          </Dropdown>
        </div>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>
