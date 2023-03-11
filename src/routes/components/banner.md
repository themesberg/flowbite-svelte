---
layout: componentLayout
title: Svelte Sticky Banner - Flowbite
breadcrumb_title: Sticky Banner
dir: Components
description: Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS
---


<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  // Props table
  import { props as avatarProps } from '../props/Avatar.json'
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let name;
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="avatar/Avatar.svelte">Avatar</GitHubSource>
</ExampleDiv>

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

<Htwo label="Setup" />

Import `Avatar`.
If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`, `DropdownDivider`.
If you are using tooltip for avatar import `Tooltip`.

```svelte
<script>
  import { Banner, Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from "flowbite-svelte"
</script>
```

<Htwo label="Default sticky banner" />

Use this example to create a circle and rounded avatar on an image element.

```svelte example class="flex flex-col h-64" hideScript 
<script>
  import { Banner } from "flowbite-svelte"
</script>
<div class="relative">
  <div id="sticky-banner" tabindex="-1" class="top-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div class="flex items-center mx-auto">
      <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
          <span class="sr-only">Light bulb</span>
        </span>
        <span>New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
      </p>
    </div>
  </div>
</div>

```

<Htwo label="Bordered" />

You can apply a border around the avatar component.

If you can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify ring color.

```svelte example class="flex gap-4 relative h-64" hideScript
<script>
  import { Banner } from "flowbite-svelte"
</script>
  <Banner fixed={false}>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
        <span class="sr-only">Light bulb</span>
      </span>
      <span>New hello identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
    </p>
  </Banner>
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
  import {Avatar, Indicator} from 'flowbite-svelte'
</script>
<Avatar src="/images/profile-picture-3.webp" dot={{color:"red"}}/>
<Avatar src="/images/profile-picture-3.webp" dot={{placement: "top-right", color:"red"}} rounded />
<Avatar src="/images/profile-picture-5.webp" dot={{placement: "bottom-right", color:"green"}} />
<Avatar src="/images/profile-picture-5.webp" dot={{placement: "bottom-right"}} rounded />


<Avatar dot={{}}/>

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
<Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+99</Avatar>
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

  <Avatar id="user-drop" src="/images/profile-picture-3.webp" dot={{color:'green'}} />
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
  <A href="https://flowbite.com/docs/components/avatar/" target="_blank" rel="noreferrer" class="link">
  Flowbite Avatar
  </A>
</P>
