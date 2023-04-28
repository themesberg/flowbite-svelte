---
layout: componentLayout
title: Svelte Dropdown - Flowbite
breadcrumb_title: Svelte Dropdown
component_title: Dropdown
dir: Components
description: Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements
thumnailSize: w-28
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, P, A  } from '$lib'
  import { props as propItems} from '../../props/Dropdown.json'
  import { props as propItems2} from '../../props/DropdownDivider.json'
  import { props as propItems3} from '../../props/DropdownHeader.json'
  import { props as propItems4} from '../../props/DropdownItem.json'

  // slot
  let slotHeader = ['Name', 'Description']
  let slotItems = [['header', 'Dropdown fixed top element.'],['footer','Dropdown fixed bottom element.']]
  let slotDropdownHeader = [['default', 'Dropdown header content.']]
  let slotDropdownItem = [['default', 'Dropdown item content.']]

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keyup","on:mouseenter","on:mouseleave"];
</script>



The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when clicking outside of the triggering element.

## Setup

```svelte example hideOutput
<script>
  import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
</script>
```

## Examples

If you want to show a dropdown menu when clicking on an element add the `Dropdown` and `DropdownItem` components.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown >
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

## Dropdown divider

You can use the `DropdownDivider` component to add separate elements inside the dropdown menu.
Note that you have a natural divider between main content of the `Dropdown` and its header and footer.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, DropdownDivider, Chevron } from 'flowbite-svelte'
</script>
<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownDivider/>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Separated link</DropdownItem>
</Dropdown>
```

## Dropdown header

Use this example to show extra information outside of the list of menu items inside the dropdown.

```svelte example class="flex justify-center items-start h-80"
<script>
  import { Button, Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Chevron } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown>
  <div slot="header" class="px-4 py-2">
    <span class="block text-sm text-gray-900 dark:text-white"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </div>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Multi-level dropdown

Use this example to enable multi-level dropdown menus by adding stacked elements inside of each other.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, DropdownDivider, Chevron } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem>Overview</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Programatic open/close

When you want to control your dropdown open status via javascript code you can bind to `open` property.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, DropdownDivider, Chevron } from 'flowbite-svelte'
  let dropdownOpen = false;
</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown bind:open={dropdownOpen}>
  <DropdownItem on:click={() => dropdownOpen = false}>Dashboard (close)</DropdownItem>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem on:click={() => dropdownOpen = false}>Overview (close)</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Dropdown with checkbox

Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.

```svelte example class="flex justify-center items-start h-52"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Checkbox } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown checkbox</Chevron></Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm">
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

```svelte example class="flex justify-center items-start h-56"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Checkbox } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown checkbox</Chevron></Button>
<Dropdown class="w-48 p-3 space-y-1 text-sm">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Default checkbox</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Checked state</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Default checkbox</Checkbox>
  </li>
</Dropdown>
```

### Helper text

Add an extra helper text to each checkbox element inside the dropdown menu list with this example.

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Checkbox, Helper } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown checkbox</Chevron></Button>
<Dropdown class="w-60 p-3 space-y-1 text-sm">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Enable notifications</Checkbox>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Enable 2FA auth</Checkbox>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Subscribe newsletter</Checkbox>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
</Dropdown>
```

## Dropdown with radio

Add multiple radio elements inside your dropdown menu to enable more advanced input interaction.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte'
  let group1=2;
</script>

<Button><Chevron>Dropdown radio {group1}</Chevron></Button>
<Dropdown class="w-44 p-3 space-y-3 text-sm">
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

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte'
  let group2=2;
</script>

<Button><Chevron>Dropdown radio</Chevron></Button>
<Dropdown class="w-48 p-3 space-y-1">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={1}>Default radio</Radio>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={2}>Checked state</Radio>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={3}>Default radio</Radio>
  </li>
</Dropdown>
```

### Helper text

Add an extra helper text to each radio element inside the dropdown menu list with this example.

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Radio, Helper} from 'flowbite-svelte'
  let group3=2;
</script>

<Button><Chevron>Dropdown radio</Chevron></Button>
<Dropdown class="w-60 p-3 space-y-1">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
    <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
  </li>
</Dropdown>
```

## Dropdown with toggle switch

Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.

```svelte example class="flex justify-center items-start h-64"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Toggle } from 'flowbite-svelte'
  let group2=2;
</script>

<Button><Chevron>Dropdown toggle</Chevron></Button>
<Dropdown class="w-56 p-3 space-y-1">
  <li>
    <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
  </li>
  <li>
    <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
  </li>
  <li>
    <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
  </li>
</Dropdown>
```

## Dropdown navbar

<p>You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use Navbar components.</p>

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, DropdownDivider, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte'
  let group3=2;
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} class="ml-3">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
    <Dropdown offset="18">
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem slot="footer">Sign out</DropdownItem>
    </Dropdown>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Dropdown with scrolling

This example can be used when you want to show a long list of items that won’t affect the height of the dropdown menu by enabling a scrolling behaviour.

```svelte example class="flex justify-center items-start h-80"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Avatar } from 'flowbite-svelte'
</script>

<Button><Chevron>Project users</Chevron></Button>
<Dropdown class="w-48 overflow-y-auto py-1 h-48">
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-1.webp" size="xs"/>Jese Leos
  </DropdownItem>
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-2.webp" size="xs"/>Robert Gouth
  </DropdownItem>
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-3.webp" size="xs"/>Bonnie Green
  </DropdownItem>
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-1.webp" size="xs"/>Robert Wall
  </DropdownItem>
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-2.webp" size="xs"/>Joseph Mcfall
  </DropdownItem>
  <DropdownItem class="flex items-center text-base font-semibold gap-2">
    <Avatar src="/images/profile-picture-3.webp" size="xs"/>Leslie Livingston
  </DropdownItem>
  <a slot="footer" href="/" class="flex items-center px-3 py-2 -mb-1 text-sm font-medium text-blue-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Add new user
  </a>
</Dropdown>
```

## Dropdown with search

Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Button, Dropdown, DropdownItem, Chevron, Checkbox, Search } from 'flowbite-svelte'
</script>

<Button><Chevron>Project users</Chevron></Button>
<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
  <div slot="header" class="p-3">
    <Search size="md"/>
  </div>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Bonnie Green</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Bonnie Green</Checkbox>
  </li>
  <a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Delete user
  </a>
</Dropdown>
```

## Menu icon

Use the menu icon trigger element on components such as cards as an alternative element to the button.

```svelte example class="flex justify-center items-start gap-4 h-60"
<script>
  import { Button, Dropdown, DropdownItem, ToolbarButton, MenuButton, DropdownDivider } from 'flowbite-svelte'
</script>
<MenuButton class="dots-menu dark:text-white" />
<MenuButton class="dots-menu dark:text-white" vertical />
<Dropdown triggeredBy=".dots-menu">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Notification bell

Use this example to show a list of notifications inside your application by providing more detailed information such as the user avatar, content and time of notification triggered by a notification bell icon.

```svelte example class="flex justify-center items-start h-96"
<script>
  import { Button, Dropdown, DropdownItem, DropdownHeader, Avatar } from 'flowbite-svelte'
</script>

<div id="bell" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
  <div class="flex relative">
    <div class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
  </div>
</div>
<Dropdown triggeredBy="#bell" class="w-full max-w-sm rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
  <div slot="header" class="text-center py-2 font-bold">Notifications</div>
  <DropdownItem class="flex space-x-4">
    <Avatar src="/images/profile-picture-1.webp" dot={{color:'bg-gray-300'}} rounded />
    <div class="pl-3 w-full">
        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
        <div class="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
    </div>
  </DropdownItem>
  <DropdownItem class="flex space-x-4">
    <Avatar src="/images/profile-picture-2.webp" dot={{color:'bg-red-400'}} rounded />
    <div class="pl-3 w-full">
        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
        <div class="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
    </div>
  </DropdownItem>
  <DropdownItem class="flex space-x-4">
    <Avatar src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} rounded />
    <div class="pl-3 w-full">
        <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
        <div class="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
    </div>
  </DropdownItem>
  <a slot="footer" href="/" class="block py-2 -my-1 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
    <div class="inline-flex items-center">
      <svg class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
        View all
    </div>
  </a>
</Dropdown>
```

## User avatar

This example can be used to show a list of menu items and options when a user is logged into your application.

```svelte example class="flex justify-center items-start h-80"
<script>
  import { Button, Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Avatar class="acs" src="/images/profile-picture-3.webp" dot={{color:'green'}} />
<Dropdown triggeredBy=".acs">
  <div slot="header" class="px-4 py-2">
    <span class="block text-sm text-gray-900 dark:text-white"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </div>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Avatar with name

Use this example to also show the name or email of the user next to the avatar for the dropdown menu.

```svelte example class="flex justify-center items-start h-80"
<script>
  import { Button, Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Button pill color="light" id="avatar_with_name" class="!p-1">
  <Avatar src="/images/profile-picture-3.webp" class="mr-2"/>
  Bonnie Green
</Button>
<Dropdown inline triggeredBy="#avatar_with_name">
  <div slot="header" class="px-4 py-2">
    <span class="block text-sm text-gray-900 dark:text-white"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </div>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Sizes

<p>The dropdown menus work with buttons of all sizes including smaller or larger ones.</p>

```svelte example class="flex justify-center items-start gap-4 h-80"
<script>
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
</script>

<Dropdown triggeredBy=".sizes">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
<Button class="sizes" size="sm"><Chevron>Small dropdown</Chevron></Button>
<Button class="sizes" size="lg"><Chevron>Large dropdown</Chevron></Button>
```

## Placement

You can also use the `placement={top|right|bottom|left}` options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.

```svelte example
<script>
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
  let placement = 'left';
</script>

<Dropdown {placement} triggeredBy="#placements button"
  on:show={e=> placement = e.target.textContent.trim().split(' ')[1]}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>

<div id="placements" class="flex flex-col justify-center items-center gap-2 h-96 my-8">
  <Button><Chevron placement="top">Dropdown top</Chevron></Button>
  <div class="space-x-2">
    <Button><Chevron placement="left">Dropdown left</Chevron></Button>
    <Button><Chevron placement="right">Dropdown right</Chevron></Button>
  </div>
  <Button><Chevron placement="bottom">Dropdown bottom</Chevron></Button>
</div>
```

## Double placement

```svelte example class="flex justify-center items-center gap-2 h-96"
<script>
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
  let placement='left'
</script>

<Button data-placement="left-start"><Chevron placement="left">Dropdown left start</Chevron></Button>
<Button data-placement="right-end"><Chevron placement="right">Dropdown right end</Chevron></Button>
<Dropdown {placement} triggeredBy="[data-placement]" on:show={e => placement = e.target.dataset.placement}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem slot="footer">Sign out</DropdownItem>
</Dropdown>
```

## Events

`DropdownItem` renders to link or button wrapped with `<li/>` element depending whether you supplied the `href` property.
Therefore you can catch standard events on it like `on:click`.

```svelte example class="flex justify-center items-start h-40"
<script>
  import { Button, Dropdown, DropdownItem, Checkbox, Chevron } from 'flowbite-svelte'
  const handleClick = (e)=> {
    e.preventDefault();
    alert ('Clicked on: ' + e.target)
  }

</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown>
  <DropdownItem href="/link" on:click={handleClick}>Rendered as link</DropdownItem>
  <DropdownItem on:click={handleClick}>Rendered as button</DropdownItem>
</Dropdown>
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Dropdown

<TableProp>
  <TableDefaultRow items={propItems} rowState='hover' />
</TableProp>

### DropdownDivider

<TableProp>
  <TableDefaultRow items={propItems2} rowState='hover' />
</TableProp>

### DropdownHeader

<TableProp>
  <TableDefaultRow items={propItems3} rowState='hover' />
</TableProp>

### DropdownItem

<TableProp>
  <TableDefaultRow items={propItems4} rowState='hover' />
</TableProp>

## Slots

### Dropdown

<TableProp header={slotHeader}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

### DropdownDivider

<TableProp header={slotHeader}>
  <TableDefaultRow items={slotDropdownHeader} rowState='hover' />
</TableProp>

### DropdownItem

<TableProp header={slotHeader}>
  <TableDefaultRow items={slotDropdownItem} rowState='hover' />
</TableProp>

## Forwarded Events

### DropdownItem

<DocBadgeList items={events} />

## References

<P>
  <A href="https://flowbite.com/docs/components/dropdowns/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Dropdown</A
  >
</P>
