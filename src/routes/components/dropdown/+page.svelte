<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import {
    Button, Checkbox, Search, Helper, Radio, Toggle,
    Dropdown,
    DropdownDivider,
    DropdownUl,
    DropdownLi, DropdownHeader, DropdownFooter, Navbar, NavBrand,  NavUl, NavLi, Avatar,
    uiHelpers
  } from '$lib';
  import { ChevronDownOutline, ChevronRightOutline, UserRemoveSolid,  DotsVerticalOutline, BellSolid, EyeSolid } from 'flowbite-svelte-icons';
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

  let dropdownCheckbox = uiHelpers();
  let dropdownCheckboxStatus = $state(false);
  let closeDropdownCheckbox = dropdownCheckbox.close;

  let dropdownRadio = uiHelpers();
  let dropdownRadioStatus = $state(false);
  let closeDropdownRadio = dropdownRadio.close;

  let dropdownToggle = uiHelpers();
  let dropdownToggleStatus = $state(false);
  let closeDropdownToggle = dropdownToggle.close;

  let dropdownHelper = uiHelpers();
  let dropdownHelperStatus = $state(false);
  let closeDropdownHelper = dropdownHelper.close;

  let nav = uiHelpers();
  let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
  let dropdownNav = uiHelpers();
  let dropdownNavStatus = $state(false);
  let closeDropdownNav = dropdownNav.close;

  let dropdownScroll = uiHelpers();
  let dropdownScrollStatus = $state(false);
  let closeDropdownScroll = dropdownScroll.close;

  let dropdownSearch = uiHelpers();
  let dropdownSearchStatus = $state(false);
  let closeDropdownSearch = dropdownSearch.close;

  let dropdownIcon = uiHelpers();
  let dropdownIconStatus = $state(false);
  let closeDropdownIcon = dropdownIcon.close;

  let dropdownNotification = uiHelpers();
  let dropdownNotificationStatus = $state(false);
  let closeDropdownNotification = dropdownNotification.close;

  let dropdownUser = uiHelpers();
  let dropdownUserStatus = $state(false);
  let closeDropdownUser = dropdownUser.close;

  let dropdownAvatar = uiHelpers();
  let dropdownAvatarStatus = $state(false);
  let closeDropdownAvatar = dropdownAvatar.close;

  let dropdownTransition1 = uiHelpers();
  let dropdownTransition1Status = $state(false);
  let closeDropdownTransition1 = dropdownTransition1.close;

  let dropdownTransition2 = uiHelpers();
  let dropdownTransition2Status = $state(false);
  let closeDropdownTransition2 = dropdownTransition2.close;

  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownAStatus = dropdownA.isOpen;
    dropdownBStatus = dropdownB.isOpen;
    dropdownCStatus = dropdownC.isOpen;
    dropdownDividerStatus = dropdownDivider.isOpen;
    dropdownMultiLevelStatus2 = dropdownMultiLevel2.isOpen;
    dropdownMultiLevelStatus = dropdownMultiLevel.isOpen;
    dropdownCheckboxStatus = dropdownCheckbox.isOpen;
    dropdownRadioStatus = dropdownRadio.isOpen;
    dropdownToggleStatus = dropdownToggle.isOpen;
    dropdownHelperStatus = dropdownHelper.isOpen;
    navStatus = nav.isOpen;
    dropdownNavStatus = dropdownNav.isOpen;
    dropdownScrollStatus = dropdownScroll.isOpen;
    dropdownSearchStatus = dropdownSearch.isOpen;
    dropdownIconStatus = dropdownIcon.isOpen;
    dropdownNotificationStatus = dropdownNotification.isOpen;
    dropdownUserStatus = dropdownUser.isOpen;
    dropdownAvatarStatus = dropdownAvatar.isOpen;
    dropdownTransition1Status = dropdownTransition1.isOpen;
    dropdownTransition2Status = dropdownTransition2.isOpen;
  });
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let group1 = $state(2);

  let searchTerm = $state('')
  const people = [
    { name: 'Robert Gouth', checked: false },
    { name: 'Jese Leos', checked: false },
    { name: 'Bonnie Green', checked: true },
  ]
  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));

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
        <div class="relative">
          <Dropdown
          dropdownStatus={dropdownMultiLevelStatus2}
          closeDropdown={closeAllMultilevel}
          {transitionParams}
          class="absolute -top-[60px] left-[120px]"
          >
            <DropdownUl class="z-100">
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

<H2>Dropdown with checkbox</H2>

<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownCheckbox.toggle}
    >Dropdown checkbox<ChevronDownOutline
      class="ms-2 h-6 w-6 text-white dark:text-white"
    /></Button
  >
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownCheckboxStatus}
      closeDropdown={closeDropdownCheckbox}
      {transitionParams}
      class="overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[200px]"
    >
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Bonnie Green</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Bonnie Green</Checkbox>
        </DropdownLi>
      </DropdownUl>
      {#snippet header()}
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      {/snippet}
      {#snippet footer()}
        <a
          href="/"
          class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
        >
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Helper text</H2>

<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownHelper.toggle}
    >Dropdown helper text<ChevronDownOutline
      class="ms-2 h-6 w-6 text-white dark:text-white"
    /></Button
  >
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownHelperStatus}
      closeDropdown={closeDropdownHelper}
      {transitionParams}
      class="w-64 overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[240px]"
    >
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Enable notifications</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Enable 2FA auth</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Subscribe newsletter</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
      </DropdownUl>
      {#snippet header()}
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      {/snippet}
      {#snippet footer()}
        <a
          href="/"
          class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
        >
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown with radio</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownRadio.toggle}
    >Dropdown radio<ChevronDownOutline
      class="ms-2 h-6 w-6 text-white dark:text-white"
    /></Button
  >
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownRadioStatus}
      closeDropdown={closeDropdownRadio}
      {transitionParams}
      class="overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[170px]"
    >
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
        </DropdownLi>
      </DropdownUl>
      {#snippet header()}
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      {/snippet}
      {#snippet footer()}
        <a
          href="/"
          class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
        >
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown with toggle switch</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownToggle.toggle}
    >Dropdown radio<ChevronDownOutline
      class="ms-2 h-6 w-6 text-white dark:text-white"
    /></Button
  >
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownToggleStatus}
      closeDropdown={closeDropdownToggle}
      {transitionParams}
      class="overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[180px]"
    >
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
        </DropdownLi>
      </DropdownUl>
      {#snippet header()}
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      {/snippet}
      {#snippet footer()}
        <a
          href="/"
          class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
        >
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown navbar</H2>
<CodeWrapper class="h-96">
  <Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
    {#snippet brand()}
      <NavBrand siteName="Svelte 5">
        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
      </NavBrand>
    {/snippet}
  
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/components/navbar">Navbar</NavLi>
      <div class="relative">
        <NavLi onclick={dropdownNav.toggle} class="cursor-pointer">
          Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown
          dropdownStatus={dropdownNavStatus}
          closeDropdown={closeDropdownNav}
          {transitionParams}
          class="absolute -top-[20px] left-[120px] md:top-[20px] md:-left-[20px]"
        >
          <DropdownUl class="p-2">
            <DropdownLi href="/">Home</DropdownLi>
            <DropdownDivider />
            <DropdownLi href="/components/drawer">Drawer</DropdownLi>
            <DropdownLi href="/components/footer">Footer</DropdownLi>
            <DropdownLi href="/components/alert">Alert</DropdownLi>
          </DropdownUl>
        </Dropdown>
      </div>
      <NavLi href="/components/footer">Footer</NavLi>
    </NavUl>
  </Navbar>
</CodeWrapper>

<H2>Dropdown with scrolling</H2>
<CodeWrapper class="flex h-80 items-start justify-center">
  <Button onclick={dropdownScroll.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownScrollStatus}
      closeDropdown={closeDropdownScroll}
      {transitionParams}
      class="absolute top-[40px] -left-[150px]"
    >
      <DropdownUl class="overflow-y-auto py-1 h-40 w-52">
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="py-1 overflow-hidden rounded-b-lg">
      <a href="/" class="flex items-center px-3 py-2 -mb-1 text-sm font-medium text-primary-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-primary-500 hover:underline">
        <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" />Add new user
      </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Dropdown with search</H2>
<CodeWrapper class="flex h-80 items-start justify-center">
  <Button onclick={dropdownSearch.toggle}
    >Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownSearchStatus}
      closeDropdown={closeDropdownSearch}
      {transitionParams}
      class="absolute top-[40px] -left-[150px] w-52"
    >
    <DropdownHeader>
      <Search size="md" bind:value={searchTerm} class="pl-10"/>
    </DropdownHeader>
      <DropdownUl class="overflow-y-auto p-2 h-24">
        {#each filteredItems as person (person.name)}
          <DropdownLi liClass="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
          </DropdownLi>
        {/each}
      </DropdownUl>
      <DropdownFooter class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
        <UserRemoveSolid class="w-4 h-4 me-2 text-primary-700 dark:text-primary-700" />Delete user
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Menu icon</H2>
<CodeWrapper class="flex h-64 items-start justify-center">
  <DotsVerticalOutline onclick={dropdownIcon.toggle} class="dots-menu dark:text-white" />
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownIconStatus}
      closeDropdown={closeDropdownIcon}
      {transitionParams}
      class="absolute top-[20px] -left-[90px]"
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

<H2>Notification bell</H2>
<CodeWrapper class="flex h-[450px] items-start justify-center">
  <div id="bell" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
    <BellSolid class="w-8 h-8" onclick={dropdownNotification.toggle}/>
    <div class="flex relative">
      <div class="inline-flex relative -top-2 end-4 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
    </div>
  </div>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownNotificationStatus}
      closeDropdown={closeDropdownNotification}
      {transitionParams}
      class="absolute top-[30px] -left-[230px] w-96"
    >
      <DropdownHeader class="text-center py-2 font-bold">Notifications</DropdownHeader>
      <DropdownUl class="p-2 space-y-2 max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-1.webp" dot={{ color: 'gray' }} rounded />
          <div class="ps-3 w-full">
            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
              : "Hey, what's up? All set for the presentation?"
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-2.webp" dot={{ color: 'red' }} rounded />
          <div class="ps-3 w-full">
            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">5 others</span>
              started following you.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'green' }} rounded />
          <div class="ps-3 w-full">
            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">141 others</span>
              love your story. See it and view more stories.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
          </div>
        </DropdownLi>
      </DropdownUl>
      <DropdownFooter class="block py-2 -my-1 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
        <div class="inline-flex items-center">
          <EyeSolid class="me-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
        View all
        </div>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>User avatar</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: 'green' }} />

  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownUserStatus}
      closeDropdown={closeDropdownUser}
      {transitionParams}
      class="absolute top-[40px] -left-[100px]"
    >
      <DropdownHeader class="px-4 py-2">
        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
        Sign out
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Avatar with name</H2>
<CodeWrapper class="flex h-96 items-start justify-center">

  <Button onclick={dropdownAvatar.toggle} pill color="light" class="!p-1">
    <Avatar src="/images/profile-picture-3.webp" class="me-2" />
    Bonnie Green
  </Button>
  <div class="relative">
    <Dropdown
      dropdownStatus={dropdownAvatarStatus}
      closeDropdown={closeDropdownAvatar}
      {transitionParams}
      class="absolute top-[50px] -left-[160px]"
    >
      <DropdownHeader class="px-4 py-2">
        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
        Sign out
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>