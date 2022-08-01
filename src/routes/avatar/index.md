---
layout: avatarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Breadcrumb, BreadcrumbItem, Tooltip } from "$lib/index"
  import { Home } from 'svelte-heros'
  import alertProp from '../props/Avatar.json'
  // Props table
  export let items = alertProp.props
	let propHeader = ['Name', 'Type', 'Default']

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Avatar</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Avatar</h1>

<ExampleDiv>
<GitHubSource href="avatar/Avatar.svelte">Avatar</GitHubSource>
</ExampleDiv>

<Htwo label="Setup" />

Import `Avatar`.
If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`, `DropdownDivider`.
If you are using tooltip for avatar import `Tooltip`.

```html
<script>
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from "flowbite-svelte"
</script>
```

<Htwo label="Default avatar" />

<p>Use this example to create a circle and rounded avatar on an image element.</p>

<ExampleDiv>
<div class="flex space-x-4">
<Avatar src="/images/profile-picture-2.webp"/>
<Avatar src="/images/profile-picture-2.webp" rounded/>
</div>
</ExampleDiv>

```html
<script>
	import { Avatar } from 'flowbite-svelte';
</script>

	 <Avatar src="/images/profile-picture-2.webp"/>
	 <Avatar src="/images/profile-picture-2.webp" rounded/>
```

<Htwo label="Bordered" />

<p>You can apply a border around the avatar component</p>
<p>If you can use the ring-&#123;color&#125; class from Tailwind CSS to modify ring color.</p>

<ExampleDiv class="flex space-x-4">
  <Avatar src="/images/profile-picture-2.webp" border/>
  <Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300"/>
</ExampleDiv>

```html
<Avatar src="/images/profile-picture-2.webp" border />
<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
```

<Htwo label="Placeholder" />

<p>When there is no custom image available a placehoder is displayed.</p>

<ExampleDiv class="flex space-x-4">
  <Avatar />
  <Avatar rounded />
  <Avatar border />
  <Avatar rounded border />
</ExampleDiv>

```html
<Avatar />
<Avatar rounded />
<Avatar border />
<Avatar rounded border />
```

<Htwo label="Placeholder initials" />

This example can be used to show the initials of the user’s first and last name as a placeholder when no profile picture is available.

<ExampleDiv>
  <Avatar>JL</Avatar>
</ExampleDiv>

```html
<Avatar>JL</Avatar>
```

<Htwo label="Avatar tooltip" />

Use this example to show a tooltip when hovering over the avatar.

<ExampleDiv class="flex space-x-4">
<Tooltip content="Jese Leos">
  <Avatar rounded src="/images/profile-picture-1.webp"/>
</Tooltip>
<Tooltip content="Jese Leos">
  <Avatar rounded src="/images/profile-picture-2.webp"/>
</Tooltip>
<Tooltip content="Bonnie Green">
  <Avatar rounded src="/images/profile-picture-3.webp"/>
</Tooltip>
</ExampleDiv>

```html
<Tooltip content="Jese Leos">
  <Avatar rounded src="/images/profile-picture-1.webp"/>
</Tooltip>
<Tooltip content="Jese Leos">
  <Avatar rounded src="/images/profile-picture-2.webp"/>
</Tooltip>
<Tooltip content="Bonnie Green">
  <Avatar rounded src="/images/profile-picture-3.webp"/>
</Tooltip>
```

<Htwo label="Dot indicator" />

<p>Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).</p>

<ExampleDiv class="flex space-x-4 flex-wrap">
  <Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}}/>
  <Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}} rounded />
  <Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}}/>
  <Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}} rounded/>
  <!-- for positioning tests purpose
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-red-400" border />
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="xl"/>
  -->
</ExampleDiv>

```html
<script>
	<Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}}/>
	<Avatar	src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}} rounded />
	<Avatar	src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}}/>
	<Avatar	src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}} rounded/>
</script>
```

<Htwo label="Stacked" />

<p>Use this example if you want to stack a group of users by overlapping the avatar components.</p>

<ExampleDiv>
<div class="flex mb-5">
<Avatar src="/images/profile-picture-1.webp" stacked/>
<Avatar src="/images/profile-picture-2.webp" stacked />
<Avatar src="/images/profile-picture-3.webp" stacked />
<Avatar stacked />
</div>
<div class="flex">
<Avatar src="/images/profile-picture-1.webp" stacked />
<Avatar src="/images/profile-picture-2.webp" stacked />
<Avatar src="/images/profile-picture-3.webp" stacked />
<Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600">+99</Avatar>
</div>
</ExampleDiv>

```html
<div class="flex mb-5">
	<Avatar src="/images/profile-picture-1.webp" stacked />
	<Avatar src="/images/profile-picture-2.webp" stacked />
	<Avatar src="/images/profile-picture-3.webp" stacked />
	<Avatar stacked />
</div>
<div class="flex">
	<Avatar src="/images/profile-picture-1.webp" stacked />
	<Avatar src="/images/profile-picture-2.webp" stacked />
	<Avatar src="/images/profile-picture-3.webp" stacked />
	<Avatar stacked href="/" class="bg-gray-700 dark:bg-gray-700 text-white hover:bg-gray-600">+99</Avatar>
</div>
```

<Htwo label="Avatar text" />

<p>This example can be used if you want to show additional information in the form of text elements such as the user’s name and join date.</p>

<ExampleDiv>
<div class="flex items-center space-x-4">
    <Avatar src="/images/profile-picture-1.webp" rounded/>
    <div class="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
</ExampleDiv>

```html
<div class="flex items-center space-x-4">
	<Avatar src="/images/profile-picture-1.webp" rounded />
	<div class="space-y-1 font-medium dark:text-white">
		<div>Jese Leos</div>
		<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
	</div>
</div>
```

<Htwo label="User dropdown" />

Use this example if you want to show a dropdown menu when clicking on the avatar component.

<ExampleDiv class="flex justify-center h-64">
  <Dropdown>
    <Avatar slot="trigger" src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} />
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
<Dropdown>
  <Avatar slot="trigger" src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} />
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

<p>Select size from  xs | sm | md | lg | xl.</p>

<ExampleDiv>
<div class=" flex flex-wrap justify-center space-x-4">
<Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
<Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
<Avatar src="/images/profile-picture-3.webp" rounded size="md" />
<Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
<Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
</div>
</ExampleDiv>

```html
<Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
<Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
<Avatar src="/images/profile-picture-3.webp" rounded size="md" />
<Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
<Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
