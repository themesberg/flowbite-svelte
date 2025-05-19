<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownDivider, DropdownHeader, DropdownGroup, Avatar, Checkbox, Radio, Helper, Toggle, Navbar, NavBrand, NavHamburger, NavUl, NavLi, ToolbarButton, Search } from "$lib";
  import { ChevronDownOutline, ChevronRightOutline, ChevronUpOutline, ChevronLeftOutline, DotsHorizontalOutline, DotsVerticalOutline, BellSolid, EyeSolid, UserRemoveSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import P from "$lib/typography/paragraph/P.svelte";

  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-green-500 dark:text-green-300 hover:text-green-700 dark:hover:text-green-500";
  let isOpen = $state(false);
  let group1 = $state(2);
  let group2 = $state(2);
  let group3 = $state(2);
  let searchTerm = $state("");

  const people = [
    { name: "Robert Gouth", checked: false },
    { name: "Jese Leos", checked: false },
    { name: "Bonnie Green", checked: true }
  ];

  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));

  // Function to toggle dropdown
  function toggleDropdown() {
    isOpen = !isOpen;
  }

  // Function to close dropdown
  function closeDropdown() {
    isOpen = false;
  }
</script>

<h1 class="my-4 text-3xl">Dropdown</h1>

<h2 class="my-4 text-2xl">Examples</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Adding links and active class</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} simple>
    <DropdownItem href="/">Home</DropdownItem>
    <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
    <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
    <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
  </Dropdown>
</div>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} class={activeClass} simple>
    <DropdownItem href="/">Home</DropdownItem>
    <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
    <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
    <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown divider</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Separated link</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown header</h2>

<div class="my-4 flex h-80 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown>
    <DropdownHeader>
      <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </DropdownGroup>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Multi-level dropdown</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem class="flex items-center justify-between">
      Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
    </DropdownItem>
    <Dropdown simple placement="right-start">
      <DropdownItem>Overview</DropdownItem>
      <DropdownItem>My downloads</DropdownItem>
      <DropdownItem>Billing</DropdownItem>
    </Dropdown>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Programatic open/close</h2>

<div class="my-4 flex h-64 flex-col items-center justify-center gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <P>Current dropdown state: {isOpen ? "Open" : "Closed"}</P>
  <Button onclick={() => (isOpen = false)}>Close Btn</Button>

  <Button onclick={() => (isOpen = true)}>
    Dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>

  <Dropdown bind:isOpen simple>
    <DropdownItem onclick={() => (isOpen = false)}>Dashboard (close)</DropdownItem>
    <DropdownItem class="flex items-center justify-between">
      Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
    </DropdownItem>
    <Dropdown simple placement="right-start">
      <DropdownItem onclick={() => (isOpen = false)}>Overview (close)</DropdownItem>
      <DropdownItem>My downloads</DropdownItem>
      <DropdownItem>Billing</DropdownItem>
    </Dropdown>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown with checkbox</h2>

<div class="my-4 flex h-52 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-44 space-y-3 p-3 text-sm">
    <li>
      <Checkbox>Default checkbox</Checkbox>
    </li>
    <li>
      <Checkbox checked>Checked state</Checkbox>
    </li>
    <li>
      <Checkbox>Default checkbox</Checkbox>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Background hover</h2>

<div class="my-4 flex h-56 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-48 space-y-1 p-3 text-sm">
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Default checkbox</Checkbox>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox checked>Checked state</Checkbox>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Default checkbox</Checkbox>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Helper text</h2>

<div class="my-4 flex h-96 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-60 space-y-1 p-3 text-sm">
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Enable notifications</Checkbox>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox checked>Enable 2FA auth</Checkbox>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Subscribe newsletter</Checkbox>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown with radio</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>
    Dropdown radio {group1}<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
  <Dropdown simple class="w-44 space-y-3 p-3 text-sm">
    <li>
      <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
    </li>
    <li>
      <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
    </li>
    <li>
      <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Background hover</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-48 space-y-1 p-3">
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group2" bind:group={group2} value={1}>Default radio</Radio>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group2" bind:group={group2} value={2}>Checked state</Radio>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group2" bind:group={group2} value={3}>Default radio</Radio>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Helper text</h2>

<div class="my-4 flex h-96 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-60 space-y-1 p-3">
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown with toggle switch</h2>

<div class="my-4 flex h-64 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown toggle<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown simple class="w-56 space-y-1 p-3">
    <li>
      <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
    </li>
    <li>
      <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
    </li>
    <li>
      <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
    </li>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown navbar</h2>

<div class="my-4 flex h-96 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Navbar>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl class="ms-3 pt-1">
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer">
        Dropdown<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
      </NavLi>
      <Dropdown simple>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<h2 class="my-4 text-2xl">Dropdown with scrolling</h2>

<div class="my-4 flex h-80 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown class="h-48 w-48 overflow-y-auto py-1">
    <DropdownGroup>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos
      </DropdownItem>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth
      </DropdownItem>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green
      </DropdownItem>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall
      </DropdownItem>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall
      </DropdownItem>
      <DropdownItem class="flex items-center gap-2 text-base font-semibold">
        <Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston
      </DropdownItem>
    </DropdownGroup>
    <a href="/" class="text-primary-600 dark:text-primary-500 -mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:hover:bg-gray-600">
      <ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />Add new user
    </a>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Dropdown with search</h2>

<div class="my-4 flex h-96 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button>Dropdown search<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown>
    <div class="p-3">
      <Search size="md" bind:value={searchTerm} />
    </div>
    <DropdownGroup class="h-24 overflow-y-auto">
      {#each filteredItems as person (person.name)}
        <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
        </li>
      {/each}
    </DropdownGroup>
    <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
      <UserRemoveSolid class="text-primary-700 dark:text-primary-700 me-2 h-4 w-4" />Delete user
    </a>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Menu icon</h2>

<div class="my-4 flex h-60 items-start justify-center gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <DotsHorizontalOutline class="dots-menu dark:text-white" />
  <DotsVerticalOutline class="dots-menu dark:text-white" />
  <Dropdown simple triggeredBy=".dots-menu">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Notification bell</h2>

<div class="my-4 flex h-96 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-hidden dark:text-gray-400 dark:hover:text-white">
    <BellSolid class="h-8 w-8" />
    <div class="relative flex">
      <div class="relative end-4 -top-2 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
    </div>
  </div>
  <Dropdown triggeredBy="#bell" class="w-full max-w-sm divide-y divide-gray-100 rounded-sm shadow-sm dark:divide-gray-700 dark:bg-gray-800">
    <div class="py-2 text-center font-bold">Notifications</div>
    <DropdownGroup>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-1.webp" dot={{ color: "bg-gray-300" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            : "Hey, what's up? All set for the presentation?"
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">a few moments ago</div>
        </div>
      </DropdownItem>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-2.webp" dot={{ color: "bg-red-400" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">5 others</span>
            started following you.
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">10 minutes ago</div>
        </div>
      </DropdownItem>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-3.webp" dot={{ color: "bg-green-400" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">141 others</span>
            love your story. See it and view more stories.
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">44 minutes ago</div>
        </div>
      </DropdownItem>
    </DropdownGroup>
    <a href="/" class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
      <div class="inline-flex items-center">
        <EyeSolid class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        View all
      </div>
    </a>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">User avatar</h2>

<div class="my-4 flex h-80 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Avatar class="acs" src="/images/profile-picture-3.webp" dot={{ color: "green" }} />
  <Dropdown triggeredBy=".acs">
    <DropdownHeader>
      <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </DropdownGroup>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Avatar with name</h2>

<div class="my-4 flex h-80 items-start justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button pill color="light" id="avatar_with_name" class="p-1!">
    <Avatar src="/images/profile-picture-3.webp" class="me-2" />
    Bonnie Green
  </Button>
  <Dropdown triggeredBy="#avatar_with_name">
    <DropdownHeader>
      <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
    </DropdownGroup>
    <DropdownHeader>Sign out</DropdownHeader>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Sizes</h2>

<div class="my-4 flex h-80 items-start justify-center gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Dropdown triggeredBy=".sizes">
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
    </DropdownGroup>
    <DropdownHeader>Sign out</DropdownHeader>
  </Dropdown>
  <Button class="sizes" size="sm">
    Small dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
  <Button class="sizes" size="lg">
    Large dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
</div>

<h2 class="my-4 text-2xl">Placement</h2>

<div class="rounded border border-gray-200 dark:border-gray-600 p-4">
  <Dropdown simple placement="top" triggeredBy="#top-dd">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <Dropdown simple placement="bottom" triggeredBy="#bottom-dd">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <Dropdown simple placement="right" triggeredBy="#right-dd">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <Dropdown simple placement="left" triggeredBy="#left-dd">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>

  <div id="placements" class="my-8 flex h-[500px] flex-col items-center justify-center gap-2">
    <Button id="top-dd">Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
    <div class="flex space-x-2 rtl:space-x-reverse">
      <Button id="left-dd"><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
      <Button id="right-dd">Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
    </div>
    <Button id="bottom-dd">Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  </div>
</div>
