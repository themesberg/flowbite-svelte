<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  import { Button, Checkbox, Search, Helper, Radio, Toggle, Dropdown, DropdownDivider, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Navbar, NavBrand, NavUl, NavLi, Avatar, uiHelpers, Label } from '$lib';
  import { ChevronDownOutline, ChevronRightOutline, UserRemoveSolid, DotsVerticalOutline, BellSolid, EyeSolid, ChevronUpOutline, ChevronLeftOutline } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { sineIn, linear } from 'svelte/easing';

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

  let dropdownMultiLevel = uiHelpers();
  let dropdownMultiLevelStatus = $state(false);
  let closeDropdownMultiLevel = dropdownMultiLevel.close;

  let dropdownMultiLevel2 = uiHelpers();
  let dropdownMultiLevelStatus2 = $state(false);
  // let closeDropdownMultiLevel2 = dropdownMultiLevel2.close;

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

  let dropdownTop = uiHelpers();
  let dropdownTopStatus = $state(false);
  let closeDropdownTop = dropdownTop.close;

  let dropdownRight = uiHelpers();
  let dropdownRightStatus = $state(false);
  let closeDropdownRight = dropdownRight.close;

  let dropdownLeft = uiHelpers();
  let dropdownLeftStatus = $state(false);
  let closeDropdownLeft = dropdownLeft.close;

  let dropdownBottom = uiHelpers();
  let dropdownBottomStatus = $state(false);
  let closeDropdownBottom = dropdownBottom.close;

  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };

  let dropdownDividerHeaderFooter = uiHelpers();
  let dropdownDividerHeaderFooterStatus = $state(false);
  let closeDropdownDividerHeaderFooter = dropdownDividerHeaderFooter.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownAStatus = dropdownA.isOpen;
    dropdownBStatus = dropdownB.isOpen;
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
    dropdownTopStatus = dropdownTop.isOpen;
    dropdownRightStatus = dropdownRight.isOpen;
    dropdownLeftStatus = dropdownLeft.isOpen;
    dropdownBottomStatus = dropdownBottom.isOpen;
    dropdownTransition1Status = dropdownTransition1.isOpen;
    dropdownTransition2Status = dropdownTransition2.isOpen;
    dropdownDividerHeaderFooterStatus = dropdownDividerHeaderFooter.isOpen;
  });
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let group1 = $state(2);

  let searchTerm = $state('');
  const people = [
    { name: 'Robert Gouth', checked: false },
    { name: 'Jese Leos', checked: false },
    { name: 'Bonnie Green', checked: true }
  ];
  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));

  let dividerStatus = $state(false);
  const changeDividerStatus = () => {
    dividerStatus = !dividerStatus;
  };
  let headerStatus = $state(false);
  const changeHeaderStatus = () => {
    headerStatus = !headerStatus;
  };
  let footerStatus = $state(false);
  const changeFooterStatus = () => {
    footerStatus = !footerStatus;
  };

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { y: 0, duration: 600, easing: sineIn } },
    { name: 'Slide', transition: slide, params: { x: -100, duration: 400, easing: sineIn } },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear } }
  ];
  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  let transionStatus = $state(true);
  const changeTransitionStatus = () => {
    transionStatus = !transionStatus;
  };
</script>

<H1>Dropdown</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default dropdown</H2>
<CodeWrapper class="flex h-64 items-start justify-center">
  <Button onclick={dropdownA.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownAStatus} closeDropdown={closeDropdownA} params={transitionParams} class="absolute -left-[150px] top-[40px]">
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

<H2>Divider, header, and footer</H2>
<CodeWrapper>
  <div class="flex items-start justify-center">
    <Button onclick={dropdownDividerHeaderFooter.toggle}>
      Dropdown
      <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
    </Button>
    <div class="relative h-96">
      <Dropdown dropdownStatus={dropdownDividerHeaderFooterStatus} closeDropdown={closeDropdownDividerHeaderFooter} params={transitionParams} class="absolute -left-[150px] top-[40px]">
        {#if headerStatus}
          <DropdownHeader>
            <div>Bonnie Green</div>
            <div class="truncate font-medium">name@flowbite.com</div>
          </DropdownHeader>
        {/if}
        <DropdownUl>
          <DropdownLi href="/">Dashboard</DropdownLi>
          {#if dividerStatus}
            <DropdownDivider />
          {/if}
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components">Alert</DropdownLi>
        </DropdownUl>
        {#if footerStatus}
          <DropdownFooter>
            <div class="py-2">
              <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </div>
          </DropdownFooter>
        {/if}
      </Dropdown>
    </div>
  </div>
  <div class="flex justify-center gap-4">
    <Button onclick={changeDividerStatus}>
      Divider {#if dividerStatus}off{:else}on{/if}
    </Button>
    <Button onclick={changeHeaderStatus}>
      Header {#if headerStatus}off{:else}on{/if}
    </Button>
    <Button onclick={changeFooterStatus}>
      Footer {#if footerStatus}off{:else}on{/if}
    </Button>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/divider-header-footer.md'] as string} />
<H2>Transition</H2>
<CodeWrapper>
  <div class="flex items-start justify-center">
    <Button onclick={dropdownTransition2.toggle}>
      Dropdown
      <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
    </Button>

    <div class="relative h-48">
      <Dropdown bind:dropdownStatus={dropdownTransition2Status} closeDropdown={closeDropdownTransition2} transition={currentTransition.transition} params={currentTransition.params} class="absolute -left-[155px] top-[40px]">
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
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="icon_alert_color" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
</CodeWrapper>

<H2>Active link</H2>

<CodeWrapper class="flex h-64 items-start justify-center">
  <Button onclick={dropdownB.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownBStatus} closeDropdown={closeDropdownB} params={transitionParams} class="absolute -left-[150px] top-[40px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/dropdown">Dropdown</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/active-link.md'] as string} />

<H2>Multi-level dropdown</H2>
<CodeWrapper class="flex h-80 items-start justify-center">
  <Button onclick={dropdownMultiLevel.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownMultiLevelStatus} closeDropdown={closeDropdownMultiLevel} params={transitionParams} class="absolute -left-[150px] top-[40px] overflow-visible">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <button onclick={dropdownMultiLevel2.toggle} class="flex p-2 pl-4">Dropdown<ChevronRightOutline class="ms-2 h-6 w-6 text-primary-700 dark:text-white" /></button>
        <div class="relative">
          <Dropdown dropdownStatus={dropdownMultiLevelStatus2} closeDropdown={closeAllMultilevel} params={transitionParams} class="absolute -top-[60px] left-[120px]">
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

<HighlightCompo code={modules['./md/multi-level-dropdown.md'] as string} />

<H2>Dropdown with checkbox</H2>

<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownCheckbox.toggle}>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownCheckboxStatus} closeDropdown={closeDropdownCheckbox} params={transitionParams} class="absolute -left-[195px] top-[45px]">
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
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-checkbox.md'] as string} />

<H2>Helper text</H2>

<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownHelper.toggle}>Dropdown helper text<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownHelperStatus} closeDropdown={closeDropdownHelper} params={transitionParams} class="absolute -left-[240px] top-[45px] w-64 overflow-y-auto p-2 pb-3 text-sm">
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
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-helper-text.md'] as string} />

<H2>Dropdown with radio</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownRadio.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownRadioStatus} closeDropdown={closeDropdownRadio} params={transitionParams} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm">
      <DropdownUl>
        <DropdownHeader class="px-2 py-1">
          <div class="p-0">
            <Search size="md" class="pl-10" />
          </div>
        </DropdownHeader>
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
      <DropdownFooter>
        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-radio.md'] as string} />

<H2>Dropdown with toggle switch</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdownToggle.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownToggleStatus} closeDropdown={closeDropdownToggle} params={transitionParams} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm">
      <DropdownHeader class="px-2 py-2">
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      </DropdownHeader>
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
      <DropdownFooter>
        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-toggle-switch.md'] as string} />

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
          Dropdown<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
        </NavLi>
        <Dropdown dropdownStatus={dropdownNavStatus} closeDropdown={closeDropdownNav} params={transitionParams} class="absolute -top-[20px] left-[120px] md:-left-[20px] md:top-[20px]">
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

<HighlightCompo code={modules['./md/dropdown-navbar.md'] as string} />

<H2>Dropdown with scrolling</H2>
<CodeWrapper class="flex h-80 items-start justify-center">
  <Button onclick={dropdownScroll.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownScrollStatus} closeDropdown={closeDropdownScroll} params={transitionParams} class="absolute -left-[160px] top-[40px] w-48">
      <DropdownUl class="h-40 w-52 overflow-y-auto py-1">
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston</DropdownLi>
        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="overflow-hidden rounded-b-lg py-1">
        <a href="/" class="-mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-primary-500 dark:hover:bg-gray-600">
          <ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />Add new user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-scroll.md'] as string} />

<H2>Dropdown with search</H2>
<CodeWrapper class="flex h-80 items-start justify-center">
  <Button onclick={dropdownSearch.toggle}>
    Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownSearchStatus} closeDropdown={closeDropdownSearch} params={transitionParams} class="absolute -left-[175px] top-[40px] w-52">
      <DropdownHeader>
        <Search size="md" bind:value={searchTerm} class="pl-10" />
      </DropdownHeader>
      <DropdownUl class="h-24 overflow-y-auto p-2">
        {#each filteredItems as person (person.name)}
          <DropdownLi liClass="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
          </DropdownLi>
        {/each}
      </DropdownUl>
      <DropdownFooter class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
        <UserRemoveSolid class="me-2 h-4 w-4 text-primary-700 dark:text-primary-700" />Delete user
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-search.md'] as string} />

<H2>Menu icon</H2>
<CodeWrapper class="flex h-64 items-start justify-center">
  <DotsVerticalOutline onclick={dropdownIcon.toggle} class="dots-menu dark:text-white" />
  <div class="relative">
    <Dropdown dropdownStatus={dropdownIconStatus} closeDropdown={closeDropdownIcon} params={transitionParams} class="absolute -left-[90px] top-[20px]">
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-icon.md'] as string} />

<H2>Notification bell</H2>
<CodeWrapper class="flex h-[450px] items-start justify-center">
  <div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
    <BellSolid class="h-8 w-8" onclick={dropdownNotification.toggle} />
    <div class="relative flex">
      <div class="relative -top-2 end-4 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
    </div>
  </div>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownNotificationStatus} closeDropdown={closeDropdownNotification} params={transitionParams} class="absolute -left-[230px] top-[30px] w-96">
      <DropdownHeader class="py-2 text-center font-bold">Notifications</DropdownHeader>
      <DropdownUl class="max-w-sm space-y-2 divide-y divide-gray-100 rounded p-2 shadow dark:divide-gray-700 dark:bg-gray-800">
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-1.webp" dot={{ color: 'gray' }} rounded />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
              : "Hey, what's up? All set for the presentation?"
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-2.webp" dot={{ color: 'red' }} rounded />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
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
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">141 others</span>
              love your story. See it and view more stories.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
          </div>
        </DropdownLi>
      </DropdownUl>
      <DropdownFooter class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        <div class="inline-flex items-center">
          <EyeSolid class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          View all
        </div>
      </DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/dropdown-notification.md'] as string} />

<H2>User avatar</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: 'green' }} />

  <div class="relative">
    <Dropdown dropdownStatus={dropdownUserStatus} closeDropdown={closeDropdownUser} params={transitionParams} class="absolute -left-[110px] top-[40px]">
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
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/user-avatar.md'] as string} />

<H2>Avatar with name</H2>
<CodeWrapper class="flex h-96 items-start justify-center">
  <Button onclick={dropdownAvatar.toggle} pill color="light" class="!p-1">
    <Avatar src="/images/profile-picture-3.webp" class="me-2" />
    Bonnie Green
  </Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownAvatarStatus} closeDropdown={closeDropdownAvatar} params={transitionParams} class="absolute -left-[160px] top-[50px]">
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
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>
    </Dropdown>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/avatar-with-name.md'] as string} />

<H2>Placement</H2>
<p>Change `Dropdown` class.</p>
<CodeWrapper class="">
  <div id="placements" class="my-8 flex h-[450px] flex-col items-center justify-center gap-2">
    <Button onclick={dropdownTop.toggle}>Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
    <div class="relative">
      <Dropdown dropdownStatus={dropdownTopStatus} closeDropdown={closeDropdownTop} params={transitionParams} class="absolute -left-[90px] -top-[230px]">
        <DropdownUl>
          <DropdownLi href="/">Dashboard</DropdownLi>
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components">Alert</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <div class="flex space-x-2 rtl:space-x-reverse">
      <Button onclick={dropdownLeft.toggle}><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
      <div class="relative">
        <Dropdown dropdownStatus={dropdownLeftStatus} closeDropdown={closeDropdownLeft} params={transitionParams} class="absolute -top-[60px] right-[180px]">
          <DropdownUl>
            <DropdownLi href="/">Dashboard</DropdownLi>
            <DropdownLi href="/components/drawer">Drawer</DropdownLi>
            <DropdownLi href="/components/footer">Footer</DropdownLi>
            <DropdownLi href="/components">Alert</DropdownLi>
          </DropdownUl>
        </Dropdown>
      </div>
      <Button onclick={dropdownRight.toggle}>Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
      <div class="relative">
        <Dropdown dropdownStatus={dropdownRightStatus} closeDropdown={closeDropdownRight} params={transitionParams} class="absolute -top-[60px] left-[0px]">
          <DropdownUl>
            <DropdownLi href="/">Dashboard</DropdownLi>
            <DropdownLi href="/components/drawer">Drawer</DropdownLi>
            <DropdownLi href="/components/footer">Footer</DropdownLi>
            <DropdownLi href="/components">Alert</DropdownLi>
          </DropdownUl>
        </Dropdown>
      </div>
    </div>
    <Button onclick={dropdownBottom.toggle}>Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
    <div class="relative">
      <Dropdown dropdownStatus={dropdownBottomStatus} closeDropdown={closeDropdownBottom} params={transitionParams} class="absolute -left-[90px] -top-[10px]">
        <DropdownUl>
          <DropdownLi href="/">Dashboard</DropdownLi>
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components">Alert</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/placement.md'] as string} />
