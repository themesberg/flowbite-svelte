---
layout: tooltipLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Tooltip, Button, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Tooltip.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tooltips</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tooltips</h1>

<Htwo label="Tooltip top" />

<ExampleDiv>
  <Tooltip content="Tooltip content">
    <Button>Default tooltip</Button>
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip content="Tooltip content">
  <Button>Default tooltip</Button>
</Tooltip>
```

<Htwo label="Tooltip styles" />

<ExampleDiv>
 <div class="flex gap-2">
<Tooltip content="Tooltip content" style="light">
  <Button>Light tooltip</Button>
</Tooltip>
<Tooltip content="Tooltip content" style="dark">
  <Button>Dark tooltip</Button>
</Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" style="light">
  <Button>Light tooltip</Button>
</Tooltip>
<Tooltip content="Tooltip content" style="dark">
  <Button>Dark tooltip</Button>
</Tooltip>
```

<Htwo label="Placement" />

<ExampleDiv>
<div class="flex gap-2">
  <Tooltip content="Tooltip content" placement="top">
    <Button>Tooltip top</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="right">
    <Button>Tooltip right</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="bottom">
    <Button>Tooltip bottom</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="left">
    <Button>Tooltip left</Button>
  </Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" placement="top">
  <Button>Tooltip top</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="right">
  <Button>Tooltip right</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="bottom">
  <Button>Tooltip bottom</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="left">
  <Button>Tooltip left</Button>
</Tooltip>
```

<Htwo label="Triggering" />

<ExampleDiv>
<div class="flex gap-2">
  <Tooltip content="Tooltip content" trigger="hover">
    <Button>Tooltip hover</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" trigger="click">
    <Button>Tooltip click</Button>
  </Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" trigger="hover">
  <Button>Tooltip hover</Button>
</Tooltip>
<Tooltip content="Tooltip content" trigger="click">
  <Button>Tooltip click</Button>
</Tooltip>
```

<Htwo label="Disable arrow" />

<ExampleDiv>
  <Tooltip content="Tooltip content" arrow={false}>
    <Button>Default tooltip</Button>
  </Tooltip>
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>