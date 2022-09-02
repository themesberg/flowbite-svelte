---
layout: dropdownLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Avatar, Button, Checkbox, Label, Helper, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Popover,
    Navbar,NavBrand,NavHamburger, NavUl, NavLi, Radio, Toggle, SimpleSearch, Breadcrumb, BreadcrumbItem, Badge, ToolbarButton, ChevronDown, Heading  } from '$lib'
  import Chevron from "$lib/utils/Chevron.svelte";
  import componentProps from '../props/Dropdown.json'
  import componentProps2 from '../props/DropdownDivider.json'
  import componentProps3 from '../props/DropdownHeader.json'
  import componentProps4 from '../props/DropdownItem.json'
  // Props table
  export let propItems = componentProps.props
  export let propItems2 = componentProps2.props
  export let propItems3 = componentProps3.props
  export let propItems4 = componentProps4.props

  let propHeader = ['Name', 'Type', 'Default']
  let slotHeader = ['Name', 'Description']

  let slotItems = [['trigger', 'Dropdown trigger icon/button.'],['content','Dropdown content']]
  let slotDropdownHeader = [['default', 'Dropdown header content.']]
  let slotDropdownItem = [['default', 'Dropdown item content.']]

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let group1=2, group2=2, group3=2;

  const handleClick = ()=>{
    alert ('Clicked.')
  }

  let dropdownOpen = false;
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Dropdown</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Dropdown</Heading>

<CompoDescription>Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements</CompoDescription>

<ExampleDiv>
<GitHubSource href="dropdowns/Dropdown.svelte">Dropdown</GitHubSource>
<GitHubSource href="dropdowns/DropdownItem.svelte">DropdownItem</GitHubSource>
<GitHubSource href="dropdowns/DropdownDivider.svelte">DropdownDivider</GitHubSource>
<GitHubSource href="dropdowns/DropdownHeader.svelte">DropdownHeader</GitHubSource>
</ExampleDiv>

The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when clicking outside of the triggering element.

<Htwo label="Setup" />

```html
<script>
  import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
</script>
```

<Htwo label="Examples" />

If you want to show a dropdown menu when clicking on an element add the `Dropdown` and `DropdownItem` components.

<ExampleDiv class="flex justify-center items-start h-64">
  <Button><Chevron>Dropdown button</Chevron></Button>
  <Dropdown class="w-44">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown class="w-44">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Dropdown divider" />

You can use the `DropdownDivider` component to add separate elements inside the dropdown menu.

<ExampleDiv class="flex justify-center items-start h-64">
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Separated link</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Separated link</DropdownItem>
</Dropdown>
```

<Htwo label="Dropdown header" />

Use this example to show extra information outside of the list of menu items inside the dropdown.

<ExampleDiv class="flex justify-center items-start h-80">
<Dropdown label="Dropdown button" class="w-44">
  <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown button" class="w-44">
  <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Multi-level dropdown" />

Use this example to enable multi-level dropdown menus by adding stacked elements inside of each other.

<ExampleDiv class="flex justify-center items-start h-64">
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
  <Dropdown placement="right-start" offset="100" class="w-44">
    <DropdownItem>Overview</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
  <Dropdown placement="right-start" class="w-44">
    <DropdownItem>Overview</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Programatic open/close" />

When you want to control your dropdown open status via javascript code you can bind to `open` property.

<ExampleDiv class="flex justify-center items-start h-64">
  <Button><Chevron>Dropdown button</Chevron></Button>
  <Dropdown class="w-44" bind:open={dropdownOpen}>
    <DropdownItem on:click={() => dropdownOpen = false}>Dashboard (close)</DropdownItem>
    <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
    <Dropdown placement="right-start" class="w-44">
      <DropdownItem on:click={() => dropdownOpen = false}>Overview (close)</DropdownItem>
      <DropdownItem>My downloads</DropdownItem>
      <DropdownItem>Billing</DropdownItem>
    </Dropdown>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown class="w-44" bind:open={dropdownOpen}>
  <DropdownItem on:click={() => dropdownOpen = false}>Dashboard (close)</DropdownItem>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Dropdown</Chevron></DropdownItem>
  <Dropdown placement="right-start" class="w-44">
    <DropdownItem on:click={() => dropdownOpen = false}>Overview (close)</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Dropdown with checkbox" />

Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.

<ExampleDiv class="flex justify-center items-start h-52">
  <Dropdown label="Dropdown checkbox" class="w-44">
    <DropdownItem tabindex="-1">
      <Checkbox>Default checkbox</Checkbox>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Checkbox checked>Checked state</Checkbox>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Checkbox>Default checkbox</Checkbox>
    </DropdownItem>
  </Dropdown>
</ExampleDiv>


```html
<script>
  import { ..., ...., Checkbox } from 'flowbite-svelte'
</script>
<Dropdown label="Dropdown checkbox" class="w-44">
  <DropdownItem tabindex="-1">
    <Checkbox>Default checkbox</Checkbox>
  </DropdownItem>
  <DropdownItem tabindex="-1">
    <Checkbox checked>Checked state</Checkbox>
  </DropdownItem>
  <DropdownItem tabindex="-1">
    <Checkbox>Default checkbox</Checkbox>
  </DropdownItem>
</Dropdown>
```

<Htwo label="Checkbox: Background hover" />

Use this example to update the background color of a menu item when using a list of checkbox elements.


<ExampleDiv class="flex justify-center items-start h-56">
  <Dropdown label="Dropdown checkbox" class="w-48" >
    <ul slot="content" class="p-3 space-y-1">
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Default checkbox</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Checked state</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Default checkbox</Checkbox>
      </DropdownItem>
    </ul>
  </Dropdown>
</ExampleDiv>


```html
<Dropdown label="Dropdown checkbox" class="w-48">
  <ul slot="content" class="p-3 space-y-1">
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Default checkbox</Checkbox>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox checked>Checked state</Checkbox>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Default checkbox</Checkbox>
    </DropdownItem>
  </ul>
</Dropdown>
```


<Htwo label="Checkbox: Helper text" />

Add an extra helper text to each checkbox element inside the dropdown menu list with this example.


<ExampleDiv class="flex justify-center items-start h-96">
  <Dropdown label="Dropdown checkbox" class="w-60" >
    <ul slot="content" class="p-3 space-y-1">
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Enable notifications</Checkbox>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Enable 2FA auth</Checkbox>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Subscribe newsletter</Checkbox>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
    </ul>
  </Dropdown>
</ExampleDiv>


```html
<script>
  import { ..., ..., Helper } from 'flowbite-svelte'
</script>
<Dropdown label="Dropdown checkbox" class="w-60" >
  <ul slot="content" class="p-3 space-y-1">
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Enable notifications</Checkbox>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox checked>Enable 2FA auth</Checkbox>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox>Subscribe newsletter</Checkbox>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
  </ul>
</Dropdown>
```

<Htwo label="Dropdown with radio" />

Add multiple radio elements inside your dropdown menu to enable more advanced input interaction.

<ExampleDiv class="flex justify-center items-start h-64">
  <Dropdown label="Dropdown radio" class="w-44">
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={1}>Default radio</Radio>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={2}>Checked state</Radio>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={3}>Default radio</Radio>
    </DropdownItem>
  </Dropdown>
</ExampleDiv>


```html
<script>
  import { ..., ..., Radio } from 'flowbite-svelte'
  let group1 = 2;
</script>

<Dropdown label="Dropdown radio" class="w-44">
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={1}>Default radio</Radio>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={2}>Checked state</Radio>
    </DropdownItem>
    <DropdownItem tabindex="-1">
      <Radio bind:group={group1} value={3}>Default radio</Radio>
    </DropdownItem>
</Dropdown>
```

<Htwo label="Radio: Background hover" />

Use this example to update the background color of a menu item when using a list of radio elements.


<ExampleDiv class="flex justify-center items-start h-64">
  <Dropdown label="Dropdown radio" class="w-48">
    <ul slot="content" class="p-3 space-y-1">
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group2} value={1}>Default radio</Radio>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group2} value={2}>Checked state</Radio>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group2} value={3}>Default radio</Radio>
      </DropdownItem>
    </ul>
  </Dropdown>
</ExampleDiv>


```html
<script>
  let group2 = 2;
</script>

<Dropdown label="Dropdown radio" class="w-48">
  <ul slot="content" class="p-3 space-y-1">
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group2} value={1}>Default radio</Radio>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group2} value={2}>Checked state</Radio>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group2} value={3}>Default radio</Radio>
    </DropdownItem>
  </ul>
</Dropdown>
```


<Htwo label="Radio: Helper text" />

Add an extra helper text to each radio element inside the dropdown menu list with this example.


<ExampleDiv class="flex justify-center items-start h-96">
  <Dropdown label="Dropdown radio" class="w-60" trigger="hover">
    <ul slot="content" class="p-3 space-y-1">
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group3} value={1}>Enable notifications</Radio>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group3} value={2}>Enable 2FA auth</Radio>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
      <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio bind:group={group3} value={3}>Subscribe newsletter</Radio>
        <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
      </DropdownItem>
    </ul>
  </Dropdown>
</ExampleDiv>


```html
<Dropdown label="Dropdown radio" class="w-60" >
  <ul slot="content" class="p-3 space-y-1">
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group3} value={1}>Enable notifications</Radio>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group3} value={2}>Enable 2FA auth</Radio>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio bind:group={group3} value={3}>Subscribe newsletter</Radio>
      <Helper class="pl-6">Some helpful instruction goes over here.</Helper>
    </DropdownItem>
  </ul>
</Dropdown>
```

<Htwo label="Dropdown with toggle switch" />

Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.

<ExampleDiv class="flex justify-center items-start h-64">
  <Dropdown label="Dropdown toggle" class="w-56">
  <ul slot="content" class="p-3 space-y-1">
    <DropdownItem class="rounded" tabindex="-1">
      <Toggle>Default toggle</Toggle>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1">
      <Toggle checked>Checked state</Toggle>
    </DropdownItem>
    <DropdownItem class="rounded" tabindex="-1">
      <Toggle>Default toggle</Toggle>
    </DropdownItem>
  </ul>
  </Dropdown>
</ExampleDiv>

```html
<script>
  import { ..., ..., Toggle } from 'flowbite-svelte'
</script>

<Dropdown label="Dropdown radio" class="w-56">
<ul slot="content" class="p-3 space-y-1">
  <DropdownItem class="rounded" tabindex="-1">
    <Toggle>Default radio</Toggle>
  </DropdownItem>
  <DropdownItem class="rounded" tabindex="-1">
    <Toggle checked>Checked state</Toggle>
  </DropdownItem>
  <DropdownItem class="rounded" tabindex="-1">
    <Toggle>Default radio</Toggle>
  </DropdownItem>
</ul>
</Dropdown>
```

<Htwo label="Dropdown navbar" />

<p>You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use Navbar components.</p>

<ExampleDiv class="flex justify-center items-start h-64">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} class="ml-3">
			<NavLi href="/" active={true}>Home</NavLi>
      <NavLi id="nav_dropdown" class="flex items-center"><Chevron>Dropdown</Chevron></NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
  <Dropdown placement="bottom" triggeredBy="#nav_dropdown" offset="18">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
	</Navbar>
</ExampleDiv>

```html
<script>
  import { ..., ...., Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte'
</script>
<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} class="ml-3">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi id="nav_dropdown" class="flex items-center"><Chevron>Dropdown</Chevron></NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
<Dropdown placement="bottom" triggeredBy="#nav_dropdown" offset="18">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</Navbar>
```

<Htwo label="Dropdown with scrolling" />

This example can be used when you want to show a long list of items that won’t affect the height of the dropdown menu by enabling a scrolling behaviour.

<ExampleDiv class="flex justify-center items-start h-80">
  <Dropdown label="Project users" class="w-48">
    <svelte:fragment slot="content">
      <ul class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200">
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
      </ul>
      <a href="/" class="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Add new user
      </a>
    </svelte:fragment>
  </Dropdown>
</ExampleDiv>

```html
<script>
  import { ..., ..., Avatar } from 'flowbite-svelte'
</script>
<Dropdown label="Project users" class="w-48">
  <svelte:fragment slot="content">
      <ul class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200">
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
      </ul>
    <a href="/" class="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Add new user
    </a>
  </svelte:fragment>
</Dropdown>
```

<Htwo label="Dropdown with search" />

Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.

<ExampleDiv class="flex justify-center items-start h-96">
<Dropdown label="Project users" class="w-60">
  <svelte:fragment slot="content">
    <div class="p-3">
      <SimpleSearch btnClass="hidden"/>
    </div>
    <ul class="overflow-y-auto px-3 pb-3 space-y-1 h-48">
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Bonnie Green</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Bonnie Green</Checkbox>
      </DropdownItem>
    </ul>
    <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Delete user
    </a>
  </svelte:fragment>
</Dropdown>
</ExampleDiv>

```html
<script>
  import { ..., ..., SimpleSearch, Checkbox,  } from 'flowbite-svelte'
</script>
<Dropdown label="Project users" class="w-60">
  <svelte:fragment slot="content">
    <div class="p-3">
      <SimpleSearch btnClass="hidden"/>
    </div>
    <ul class="overflow-y-auto px-3 pb-3 space-y-1 h-48">
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox checked>Bonnie Green</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem class="rounded" liClass="p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox>Bonnie Green</Checkbox>
      </DropdownItem>
    </ul>
    <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>Delete user
    </a>
  </svelte:fragment>
</Dropdown>
```

<Htwo label="Menu icon" />

Use the menu icon trigger element on components such as cards as an alternative element to the button.

<ExampleDiv class="flex justify-center items-start gap-2 h-60">
  <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
  </ToolbarButton>
  <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
  </ToolbarButton>
  <Dropdown class="w-44" triggeredBy=".dots-menu">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
  <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
  </ToolbarButton>
  <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
  </ToolbarButton>
  <Dropdown class="w-44" triggeredBy=".dots-menu">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
```

<Htwo label="Notification bell" />

Use this example to show a list of notifications inside your application by providing more detailed information such as the user avatar, content and time of notification triggered by a notification bell icon.

<ExampleDiv class="flex justify-center items-start h-96">
  <div id="bell" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
    <div class="flex relative">
      <div class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
    </div>
  </div>
  <Dropdown class="w-full max-w-sm" triggeredBy="#bell">
    <ul slot="content" class="rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
      <DropdownHeader class="font-bold text-center"  divider={false}>Notifications</DropdownHeader>
      <DropdownItem class="flex space-x-4 ">
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
    </ul>
  </Dropdown>
</ExampleDiv>

```html
<div id="bell" class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
  <div class="flex relative">
    <div class="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
  </div>
</div>
<Dropdown class="w-full max-w-sm" triggeredBy="#bell">
  <ul slot="content" class="rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700">
    <DropdownHeader class="font-bold text-center"  divider={false}>Notifications</DropdownHeader>
    <DropdownItem class="flex space-x-4 ">
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
  </ul>
</Dropdown>
```

<Htwo label="User avatar" />

This example can be used to show a list of menu items and options when a user is logged into your application.

<ExampleDiv class="flex justify-center items-start h-64">
  <Avatar class="acs" src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} />
  <Dropdown triggeredBy=".acs">
    <DropdownHeader>
      <span class="block text-sm"> Bonnie Green </span>
      <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
<Avatar class="acs" src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} />
<Dropdown triggeredBy=".acs">
  <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Avatar with name" />

Use this example to also show the name or email of the user next to the avatar for the dropdown menu.

<ExampleDiv class="flex justify-center items-start h-64">
  <Button pill color="light" id="avatar_with_name" class="!p-1">
    <Avatar src="/images/profile-picture-3.webp" class="mr-2"/>
    Bonnie Green
  </Button>
  <Dropdown inline triggeredBy="#avatar_with_name">
    <DropdownHeader>
      <span class="block text-sm"> Bonnie Green </span>
      <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
<Dropdown inline>
  <svelte:fragment slot="label" >
    <Avatar src="/images/profile-picture-3.webp" class="mr-2"/>
    Bonnie Green
  </svelte:fragment>
  <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Sizes" />

<p>The dropdown menus work with buttons of all sizes including smaller or larger ones.</p>

<ExampleDiv class="flex justify-center items-start gap-2 h-64">
  <Button size="sm"><Chevron>Small dropdown</Chevron></Button>
  <Dropdown>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <Button size="lg"><Chevron>Large dropdown</Chevron></Button>
  <Dropdown>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</ExampleDiv>

```html
<Dropdown label="Small dropdown" size="sm">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Large dropdown" size="lg">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Placement" />

<p>You can also use the placement="top|right|bottom|left" options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.</p>

<ExampleDiv class="flex justify-center items-center gap-2 h-96">
<Dropdown label="Dropdown top" placement="top">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown right" placement="right">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown bottom" placement="bottom">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown left" placement="left">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown top" placement="top">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown right" placement="right">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown bottom" placement="bottom">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown left" placement="left">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Double placement"/>

<ExampleDiv class="flex justify-center items-center gap-2">
<Dropdown label="Dropdown left start" placement="left-start">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown right start" placement="right-start">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown left start" placement="left-start">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown label="Dropdown right start" placement="right-start">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

<Htwo label="Events" />

The `DropdownItem` component has `on:click` event.

<ExampleDiv class="flex justify-center h-32">
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem on:click={handleClick}>Click me</DropdownItem>
</Dropdown>
</ExampleDiv>

```html
<Dropdown label="Dropdown button" class="w-44">
  <DropdownItem on:click={handleClick}>Click me</DropdownItem>
</Dropdown>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Dropdown</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={propItems} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>DropdownDivider</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={propItems2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>DropdownHeader</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={propItems3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>DropdownItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={propItems4} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<h3 class='text-xl w-full dark:text-white py-4'>Dropdown</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>DropdownDivider</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotDropdownHeader} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>DropdownItem</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotDropdownItem} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: DropdownItem" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
</div>