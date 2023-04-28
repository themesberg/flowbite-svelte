---
layout: componentLayout
title: Svelte List Group - Flowbite
breadcrumb_title: Svelte List Group
component_title: List Group
dir: Components
description: Use the list group component to display a series of items, buttons or links inside a single element
thumnailSize: w-36
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  import { props as items1 } from '../../props/Listgroup.json'
  import { props as items2 } from '../../props/ListgroupItem.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover"];
</script>



The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

## Setup

```svelte example hideOutput
<script>
  import { Listgroup, ListgroupItem } from 'flowbite-svelte'
</script>
```

## Default list group

Here’s an example of a list group that you can use right away.

```svelte example
<script>
  import { Listgroup } from 'flowbite-svelte'
  let simpleList = ["Profile", "Settings", "Messages", "Download"]
</script>

<Listgroup items={simpleList} let:item class="w-48">
  {item}
</Listgroup>
```

## List group with links

You can also display a series of links inside the list group element. Notice how items provide the `href` field.

You need to set the list to `active` mode to enable hovering, focus and links.

If list is active and data items contain `href` field entries are presented as `<a>` elements.

```svelte example
<script>
  import { Listgroup } from 'flowbite-svelte'
  let links = [
    { name: "Accordions", href: "/accordion", current: true },
    { name: "Alerts", href: "/alerts" },
    { name: "Badges", href: "/badges"  },
    { name: "Breadcrumbs", href: "/breadcrumbs" },
  ];
</script>

<Listgroup active items={links} let:item class="w-48">
  {item.name}
</Listgroup>
```

## List group with buttons

It is also possible to display a list of button element inside the list group component. The following example includes an active and disabled item as well.

You need to set the list to `active` mode to enable hovering, focus and `on:click`.

If list is active and data items do not contain `href` field entries are presented as `<button>` elements triggering `on:click` events.

```svelte example
<script>
  import { Listgroup } from 'flowbite-svelte'
  let buttons = [
    { name: "Profile", mycustomfield: "data1", current: true },
    { name: "Settings", mycustomfield: "data2" },
    { name: "Messages", mycustomfield: "data3" },
    { name: "Download", mycustomfield: "data4",  disabled: true },
  ];
</script>

<Listgroup active items={buttons} let:item class="w-48" on:click={(e) => alert(Object.entries(e.detail))}>
  {item.name}
</Listgroup>
```

## List group with icons

Use the following example to create a list of buttons as a menu together with SVG icons.

```svelte example
<script>
  import { Listgroup, UserCircle, InformationCircle } from 'flowbite-svelte'
  let icons = [
    { name: "Profile",   icon: UserCircle },
    { name: "Settings",  icon:InformationCircle },
    { name: "Messages",  icon:UserCircle },
    { name: "Download", icon:InformationCircle },
  ];
</script>

<Listgroup active items={icons} let:item class="w-48" on:click={console.log}>
    <svelte:component this={item.icon} class="mr-2 w-5 h-5" />
    {item.name}
</Listgroup>
```

## Advanced

When non standard usage is needed you can omit the `items` props and add elements directly to the list.
Usage of hidden so far `ListgroupItem` helps you with proper layout.

```svelte example
<script>
  import { Listgroup, ListgroupItem, Avatar } from 'flowbite-svelte'
</script>

<Listgroup active class="w-48">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">User list</h3>
    <ListgroupItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-1.webp" size="xs"/>Jese Leos
    </ListgroupItem>
    <ListgroupItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-2.webp" size="xs"/>Robert Gouth
    </ListgroupItem>
    <ListgroupItem class="text-base font-semibold gap-2">
      <Avatar src="/images/profile-picture-3.webp" size="xs"/>Bonnie Green
    </ListgroupItem>
    <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
Delete user
  </a>
</Listgroup>
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Listgroup

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

### ListgroupItem

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

## Forwarded Events

### ListgroupItem

<DocBadgeList items={events} />


## References

<P>
  <A href="https://flowbite.com/docs/components/list-group/" target="_blank" rel="noreferrer" class="link"
    >Flowbite List Group</A
  >
</P>
