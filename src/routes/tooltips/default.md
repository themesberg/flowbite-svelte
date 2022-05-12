---
layout: tooltipLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
import {Tooltip, Button, Table, TableDefaultRow, Breadcrumb} from '$lib/index'
import componentProps from '../props/Tooltip.json'
// Props table
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tooltips',
      href:'/tooltips/'
    },
    {
      label:'Tooltip default',
      href:'/tooltips/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tooltip</h1>

<Htwo label="Tooltip top" />

<ExampleDiv>
  <Tooltip tip="My tooltip content" top>
    <Button />
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" top>
  <Button />
</Tooltip>
```

<Htwo label="Tooltip bottom" />

<ExampleDiv>
  <Tooltip tip="My tooltip content" bottom>
    <Button />
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" bottom>
  <Button />
</Tooltip>
```

<Htwo label="Tooltip right" />

<ExampleDiv>
  <Tooltip tip="My tooltip content" right>
    <Button />
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" right>
  <Button />
</Tooltip>
```

<Htwo label="Tooltip left" />

<ExampleDiv>
  <Tooltip tip="My tooltip content" left>
    <Button />
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" left>
  <Button />
</Tooltip>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>