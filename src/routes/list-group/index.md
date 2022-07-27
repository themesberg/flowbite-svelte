---
layout: listgroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Avatar, List, ListItem, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import {
    Adjustments,
    UserCircle,
    InboxIn,
    CloudDownload,
    Home
  } from "svelte-heros";
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
    { name: "Settings",  icon:Adjustments },
    { name: "Messages",  icon:InboxIn },
    { name: "Download", icon:CloudDownload },
  ];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/footer">List group</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">List group</h1>

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
    { name: "Settings",  icon:Adjustments },
    { name: "Messages",  icon:InboxIn },
    { name: "Download", icon:CloudDownload },
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
        <InboxIn class="w-5 h-5 mr-1" />Delete user
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
      <InboxIn class="w-5 h-5 mr-1" />Delete user
  </a>
</List>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={componentProps.props} rowState='hover' />
</TableProp>
