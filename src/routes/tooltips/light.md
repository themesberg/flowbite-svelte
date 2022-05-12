---
layout: tooltipLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
import {LightTooltip, Button, Table, TableDefaultRow, Breadcrumb} from '$lib/index'
import componentProps from '../props/LightTooltip.json'
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
      label:'Tooltip light',
      href:'/tooltips/light'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Light Tooltip</h1>

<Htwo label="LigtTootip top" />

<ExampleDiv>
  <LightTooltip tip="My tooltip content" top>
    <Button />
  </LightTooltip>
</ExampleDiv>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" top>
  <Button />
</LightTooltip>
```

<Htwo label="LightTooltip bottom" />

<ExampleDiv>
  <LightTooltip tip="My tooltip content" bottom>
    <Button />
  </LightTooltip>
</ExampleDiv>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" bottom>
  <Button />
</LightTooltip>
```

<Htwo label="LightTooltip right" />

<ExampleDiv>
  <LightTooltip tip="My tooltip content" right>
    <Button />
  </LightTooltip>
</ExampleDiv>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" right>
  <Button />
</LightTooltip>
```

<Htwo label="LightTooltip left" />

<ExampleDiv>
  <LightTooltip tip="My tooltip content" left>
    <Button />
  </LightTooltip>
</ExampleDiv>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" left>
  <Button />
</LightTooltip>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>