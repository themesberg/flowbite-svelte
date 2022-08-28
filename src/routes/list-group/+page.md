---
layout: listgroupLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Avatar, List, ListItem, Breadcrumb, BreadcrumbItem, Badge, UserCircle, InformationCircle } from '$lib'
  import {  InboxIn } from "svelte-heros";

  import componentProps from '../props/List.json'
  // Props table
	let propHeader = ['Name', 'Type', 'Default']

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let simpleList = ["Profile", "Settings", "Messages", "Download"]

  let links = [
    { name: "Accordions", href: "/accordions", current: true },
    { name: "Alerts", href: "/alerts" },
    { name: "Badges", href: "/badges"  },
    { name: "Breadcrumbs", href: "/breadcrumbs" },
  ];

  let buttons = [
    { name: "Profile", mycustomfield: "data1", current: true },
    { name: "Settings", mycustomfield: "data2" },
    { name: "Messages", mycustomfield: "data3" },
    { name: "Download", mycustomfield: "data4",  disabled: true },
  ];

  let icons = [
    { name: "Profile",   icon: UserCircle },
    { name: "Settings",  icon:InformationCircle },
    { name: "Messages",  icon:UserCircle },
    { name: "Download", icon:InformationCircle },
  ];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/footer">List group</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">List group</h1>

<CompoDescription>Use the list group component to display a series of items, buttons or links inside a single element</CompoDescription>

<ExampleDiv>
<GitHubSource href="list-group/List.svelte">List</GitHubSource>
<GitHubSource href="list-group/LisListItemt.svelte">ListItem</GitHubSource>
</ExampleDiv>

The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

<Htwo label="Setup" />

```html
<script>
  import { List, ListItem } from 'flowbite-svelte'
</script>
```

<Htwo label="Default list group" />

Here’s an example of a list group that you can use right away.

<ExampleDiv>
  <List items={simpleList} let:item class="w-48">
    {item}
  </List>
</ExampleDiv>

```html
<script>
  import {List} from "flowbite-svelte";

  let simpleList = ["Profile", "Settings", "Messages", "Download"]
</script>

<List items={simpleList} let:item class="w-48">
  {item}
</List>
```

<Htwo label="List group with links" />

You can also display a series of links inside the list group element. Notice how items provide the `href` field.

You need to set the list to `active` mode to enable hovering, focus and links.

If list is active and data items contain `href` field entries are presented as `<a>` elements.

<ExampleDiv>
  <List active items={links} let:item class="w-48">
    {item.name}
  </List>
</ExampleDiv>

```html
<script>
  import {List} from "flowbite-svelte";

  let links = [
    { name: "Accordions", href: "/accordions", current: true },
    { name: "Alerts", href: "/alerts" },
    { name: "Badges", href: "/badges"  },
    { name: "Breadcrumbs", href: "/breadcrumbs" },
  ];
</script>

<List active items={links} let:item class="w-48">
  {item.name}
</List>
```

<Htwo label="List group with buttons" />

It is also possible to display a list of button element inside the list group component. The following example includes an active and disabled item as well.

You need to set the list to `active` mode to enable hovering, focus and `on:click`.

If list is active and data items do not contain `href` field entries are presented as `<button>` elements triggering `on:click` events.

<ExampleDiv>
  <List active items={buttons} let:item class="w-48" on:click={(e) => alert(Object.entries(e.detail))}>
    {item.name}
  </List>
</ExampleDiv>

```html
<script>
  import {List} from "flowbite-svelte";

  let buttons = [
    { name: "Profile", mycustomfield: "data1", current: true },
    { name: "Settings", mycustomfield: "data2" },
    { name: "Messages", mycustomfield: "data3" },
    { name: "Download", mycustomfield: "data4",  disabled: true },
  ];
</script>

<List active items={buttons} let:item class="w-48" on:click={(e) => alert(Object.entries(e.detail))}>
  {item.name}
</List>
```

<Htwo label="List group with icons" />

Use the following example to create a list of buttons as a menu together with SVG icons.

<ExampleDiv>
  <List active items={icons} let:item class="w-48" on:click={console.log}>
      <svelte:component this={item.icon} class="mr-2 w-5 h-5" />
      {item.name}
  </List>
</ExampleDiv>

```html
<script>
    let icons = [
    { name: "Profile",   icon: UserCircle },
    { name: "Settings",  icon:InformationCircle },
    { name: "Messages",  icon:UserCircle },
    { name: "Download", icon:InformationCircle },
  ];
</script>

<List active items={icons} let:item class="w-48" on:click={console.log}>
    <svelte:component this={item.icon} class="mr-2 w-5 h-5" />
    {item.name}
</List>
```

<Htwo label="Advanced" />

When non standard usage is needed you can omit the `items` props and add elements directly to the list.
Usage of hidden so far `ListItem` helps you with proper layout.

<ExampleDiv>
  <List active class="w-48">
      <h3 class="text-center bg-red-500 text-white font-bold rounded-t-lg">User list</h3>
      <ListItem class="text-base font-semibold gap-2">
        <Avatar src="/images/profile-picture-1.webp" size="xs"/>Jese Leos
      </ListItem>
      <ListItem class="text-base font-semibold gap-2">
        <Avatar src="/images/profile-picture-2.webp" size="xs"/>Robert Gouth
      </ListItem>
      <ListItem class="text-base font-semibold gap-2">
        <Avatar src="/images/profile-picture-3.webp" size="xs"/>Bonnie Green
      </ListItem>
      <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
Delete user
    </a>
  </List>
</ExampleDiv>

```html
<List active class="w-48">
    <h3 class="text-center bg-red-500 text-white font-bold rounded-t-lg">User list</h3>
    <ListItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-1.webp" size="xs"/>Jese Leos
    </ListItem>
    <ListItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-2.webp" size="xs"/>Robert Gouth
    </ListItem>
    <ListItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-3.webp" size="xs"/>Bonnie Green
    </ListItem>
    <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>Delete user
  </a>
</List>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={componentProps.props} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: ListItem" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
</div>
