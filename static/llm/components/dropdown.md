# Svelte Dropdown - Flowbite


The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when clicking outside of the triggering element.

## Setup

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from "flowbite-svelte";
</script>
```

## Examples

If you want to show a dropdown menu when clicking on an element add the `Dropdown` and `DropdownItem` components.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

## Adding links and active class

Utilize the `href` prop within the `DropdownItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Dropdown` component:

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown {activeUrl} simple>
  <DropdownItem href="/">Home</DropdownItem>
  <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
  <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
  <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
</Dropdown>
```

To change the active class, use the `activeClass` prop:

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-green-500 dark:text-green-300 hover:text-green-700 dark:hover:text-green-500";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown {activeUrl} class={activeClass} simple>
  <DropdownItem href="/">Home</DropdownItem>
  <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
  <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
  <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
</Dropdown>
```

## Dropdown divider

You can use the `DropdownDivider` component to add separate elements inside the dropdown menu. Note that you have a natural divider between main content of the `Dropdown` and its header and footer.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Separated link</DropdownItem>
</Dropdown>
```

## Dropdown header

Use this example to show extra information outside of the list of menu items inside the dropdown.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownGroup, DropdownHeader } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Multi-level dropdown

Use this example to enable multi-level dropdown menus by adding stacked elements inside of each other.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

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
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the dropdown. Press `ESC` to close it.

## Programatic open/close

When you want to control your dropdown open status via javascript code you can bind to `open` property.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, P } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  let isOpen = $state(false);
</script>

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
```

## Dropdown with checkbox

Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.

```svelte
<script lang="ts">
  import { Button, Dropdown, Checkbox } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

### Background hover

Use this example to update the background color of a menu item when using a list of checkbox elements.

```svelte
<script lang="ts">
  import { Button, Dropdown, Checkbox } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

### Helper text

Add an extra helper text to each checkbox element inside the dropdown menu list with this example.

```svelte
<script lang="ts">
  import { Button, Dropdown, Checkbox, Helper } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Dropdown with radio

Add multiple radio elements inside your dropdown menu to enable more advanced input interaction.

```svelte
<script lang="ts">
  import { Button, Dropdown, Radio } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group1 = $state(2);
</script>

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
```

### Background hover

Use this example to update the background color of a menu item when using a list of radio elements.

```svelte
<script lang="ts">
  import { Button, Dropdown, Radio } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group2 = $state(2);
</script>

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
```

### Helper text

Add an extra helper text to each radio element inside the dropdown menu list with this example.

```svelte
<script lang="ts">
  import { Button, Dropdown, Radio, Helper } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group3 = $state(2);
</script>

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
```

## Dropdown with toggle switch

Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.

```svelte
<script lang="ts">
  import { Button, Dropdown, Toggle } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Dropdown navbar

<p>You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use Navbar components.</p>

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Dropdown with scrolling

This example can be used when you want to show a long list of items that won’t affect the height of the dropdown menu by enabling a scrolling behaviour.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Dropdown with search

Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownGroup, Checkbox, Search } from "flowbite-svelte";
  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";
  let searchTerm = $state("");
  const people = [
    { name: "Robert Gouth", checked: false },
    { name: "Jese Leos", checked: false },
    { name: "Bonnie Green", checked: true }
  ];
  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));
</script>

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
```

## Menu icon

Use the menu icon trigger element on components such as cards as an alternative element to the button.

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { DotsHorizontalOutline, DotsVerticalOutline } from "flowbite-svelte-icons";
</script>

<DotsHorizontalOutline class="dots-menu dark:text-white" />
<DotsVerticalOutline class="dots-menu dark:text-white" />
<Dropdown simple triggeredBy=".dots-menu">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

## Notification bell

Use this example to show a list of notifications inside your application by providing more detailed information such as the user avatar, content and time of notification triggered by a notification bell icon.

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { BellSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

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
```

## User avatar

This example can be used to show a list of menu items and options when a user is logged into your application.

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

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
```

## Avatar with name

Use this example to also show the name or email of the user next to the avatar for the dropdown menu.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

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
```

## Sizes

<p>The dropdown menus work with buttons of all sizes including smaller or larger ones.</p>

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownHeader, DropdownGroup } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

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
```

## Placement

You can also use the `placement={top|right|bottom|left}` options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronUpOutline, ChevronRightOutline, ChevronLeftOutline } from "flowbite-svelte-icons";
</script>

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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="placements" class="my-8 flex h-96 flex-col items-center justify-center gap-2">
  <Button id="top-dd">Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="flex space-x-2 rtl:space-x-reverse">
    <Button id="left-dd"><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
    <Button id="right-dd">Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  </div>
  <Button id="bottom-dd">Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
</div>
```

## Double placement

As dropdown is implemented using the [Floating UI](https://floating-ui.com) library, placement can be further specified by using the `Placement` type defined in [Floating UI docs](https://floating-ui.com/docs/computePosition#placement)

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/dom";
  import { ChevronDownOutline, ChevronUpOutline } from "flowbite-svelte-icons";
  let placement: Placement | undefined = $state("left");
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  onmousedown={(e) => {
    const placementValue = (e.target as HTMLElement | null)?.dataset.placement;
    if (placementValue) placement = placementValue as Placement;
  }}
>
  <Button data-placement="left-start">
    Left start<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
  <Button data-placement="right-end">
    Right end<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
</div>

<Dropdown simple {placement} triggeredBy="[data-placement]">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

## Transition

Since the `Dropdown` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { scale, blur } from "svelte/transition";
</script>

<Button>Scale<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple transition={scale} transitionParams={{ duration: 800 }}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>

<Button>Blur<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple transition={blur} transitionParams={{ duration: 800 }}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

## Events

`DropdownItem` renders to link or button or div wrapped with `<li/>` element depending whether you supplied the `href` or `onclick` property.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  const handleClick = (e: Event) => {
    e.preventDefault();
    alert("Clicked on: " + e.target);
  };
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple>
  <DropdownItem href="/link" onclick={handleClick}>Rendered as link</DropdownItem>
  <DropdownItem onclick={handleClick}>Rendered as button</DropdownItem>
</Dropdown>
```

### onclose and ontoggle

Use `onclose` to run a callback when the dropdown closes. For more control over state changes, use `ontoggle` which fires on both open and close events.

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  // onclose fires only when closing
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple onclose={(ev) => console.log("Dropdown closed", ev)}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
</Dropdown>
```

```svelte
<script lang="ts">
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown
  simple
  ontoggle={(ev) => {
    // ontoggle fires on all state changes (open/closed), requiring the state check
    if (ev.newState === "closed") {
      console.log("closed by ontoggle");
    }
  }}
>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
</Dropdown>
```

## Component data

### Dropdown

#### Types

[DropdownProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L636)

#### Props

- children
- simple: false
- placement: "bottom"
- offset: 2
- class: className
- activeUrl: ""
- isOpen: $bindable(false)
- onclose

### DropdownDivider

#### Types

[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L642)

#### Props

- class: className

### DropdownGroup

#### Types

[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L658)

#### Props

- children
- class: className

### DropdownHeader

#### Types

[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L644)

#### Props

- children
- class: className

### DropdownItem

#### Types

[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L650)

#### Props

- aClass
- children
- activeClass
- liClass
- classes
- class: className


## References

- [Flowbite Dropdown](https://flowbite.com/docs/components/drawer/)
