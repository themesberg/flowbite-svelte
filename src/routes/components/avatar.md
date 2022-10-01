---
layout: componentLayout
title: Svelte Avatar - Flowbite
breadcrumb_title: Avatar
dir: Components
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  // Props table
  import { props as avatarProps } from '../props/Avatar.json'
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let name;
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>


<CompoDescription>Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes</CompoDescription>

<ExampleDiv>
<GitHubSource href="avatar/Avatar.svelte">Avatar</GitHubSource>
</ExampleDiv>

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

<Htwo label="Setup" />

Import `Avatar`.
If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`, `DropdownDivider`.
If you are using tooltip for avatar import `Tooltip`.

```svelte
<script>
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from "flowbite-svelte"
</script>
```

<Htwo label="Default avatar" />

Use this example to create a circle and rounded avatar on an image element.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<div class="flex space-x-4">
  <Avatar src="/images/profile-picture-2.webp"/>
  <Avatar src="/images/profile-picture-2.webp" rounded/>
</div>
```

<Htwo label="Bordered" />

You can apply a border around the avatar component.

If you can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify ring color.

```svelte example class="flex gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<Avatar src="/images/profile-picture-2.webp" border/>
<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300"/>
```

<Htwo label="Placeholder" />

When there is no custom image available a placehoder is displayed.

```svelte example class="flex gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<Avatar />
<Avatar rounded />
<Avatar border />
<Avatar rounded border />
```

<Htwo label="Placeholder initials" />

This example can be used to show the initials of the user’s first and last name as a placeholder when no profile picture is available.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
  <Avatar>JL</Avatar>
```

<Htwo label="Avatar tooltip" />

Use this example to show a tooltip when hovering over the avatar.

```svelte example class="flex gap-4"
<script>
  import {Avatar, Tooltip} from 'flowbite-svelte'
</script>
  <Avatar data-name="Jese Leos" rounded src="/images/profile-picture-1.webp"/>
  <Avatar data-name="Robert Gouth" rounded src="/images/profile-picture-2.webp"/>
  <Avatar data-name="Bonnie Green" rounded src="/images/profile-picture-3.webp"/>
  <Tooltip triggeredBy="[data-name]" on:show={e => name = e.target.dataset.name}>{name}</Tooltip>
```

<Htwo label="Dot indicator" />

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

```svelte example class="flex gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}}/>
<Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}} rounded />
<Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}}/>
<Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}} rounded/>
```

<Htwo label="Stacked" />

Use this example if you want to stack a group of users by overlapping the avatar components.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
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
```

<Htwo label="Avatar text" />

This example can be used if you want to show additional information in the form of text elements such as the user’s name and join date.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<div class="flex items-center space-x-4">
    <Avatar src="/images/profile-picture-1.webp" rounded/>
    <div class="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
```

<Htwo label="User dropdown" />

Use this example if you want to show a dropdown menu when clicking on the avatar component.

```svelte example class="flex justify-center h-96"
<script>
  import {Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider} from 'flowbite-svelte'
</script>

  <Avatar id="user-drop" src="/images/profile-picture-3.webp" dot={{color:'bg-green-400'}} />
  <Dropdown triggeredBy="#user-drop">
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

Select size from  xs | sm | md | lg | xl.

```svelte example class="flex flex-col gap-4" hideScript
<script>
  import {Avatar} from 'flowbite-svelte'
</script>
<div class=" flex flex-wrap justify-center space-x-4">
  <Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="md" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
</div>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={avatarProps} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/avatar/" target="_blank" class="link">
  Flowbite Avatar
  </A>
</P>
