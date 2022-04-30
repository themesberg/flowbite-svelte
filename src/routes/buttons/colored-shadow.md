---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { ColorShadowButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/ColorShadowButton.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Buttons',
      href:'/buttons/'
    },
    {
      label:'Colored shadow button',
      href:'/buttons/colored-shadow'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Colored Shadow Buttons</h1>

<Htwo label="text-sm" />

<ExampleDiv>
<ColorShadowButton color="blue" >Blue</ColorShadowButton>
<ColorShadowButton color="green" >Green</ColorShadowButton>
<ColorShadowButton color="cyan" >Cyan</ColorShadowButton>
<ColorShadowButton color="teal" >Teal</ColorShadowButton>
<ColorShadowButton color="lime" >Lime</ColorShadowButton>
<ColorShadowButton color="red" >Red</ColorShadowButton>
<ColorShadowButton color="pink" >Ping</ColorShadowButton>
<ColorShadowButton color="purple" >Purple</ColorShadowButton>
</ExampleDiv>

```html
<ColorShadowButton color="blue" >Blue</ColorShadowButton>
<ColorShadowButton color="green" >Green</ColorShadowButton>
<ColorShadowButton color="cyan" >Cyan</ColorShadowButton>
<ColorShadowButton color="teal" >Teal</ColorShadowButton>
<ColorShadowButton color="lime" >Lime</ColorShadowButton>
<ColorShadowButton color="red" >Red</ColorShadowButton>
<ColorShadowButton color="pink" >Ping</ColorShadowButton>
<ColorShadowButton color="purple" >Purple</ColorShadowButton>
```

<Htwo label="text-xs" />

<ExampleDiv>
<ColorShadowButton color="blue"  textSize="text-xs" >Blue</ColorShadowButton>
<ColorShadowButton color="green" textSize="text-xs" >Green</ColorShadowButton>
<ColorShadowButton color="cyan"  textSize="text-xs" >Cyan</ColorShadowButton>
<ColorShadowButton color="teal"  textSize="text-xs" >Teal</ColorShadowButton>
<ColorShadowButton color="lime"  textSize="text-xs" >Lime</ColorShadowButton>
<ColorShadowButton color="red"   textSize="text-xs" >Red</ColorShadowButton>
<ColorShadowButton color="pink"  textSize="text-xs" >Ping</ColorShadowButton>
<ColorShadowButton color="purple" textSize="text-xs" >Purple</ColorShadowButton>
</ExampleDiv>

```html
<ColorShadowButton color="blue"  textSize="text-xs" >Blue</ColorShadowButton>
<ColorShadowButton color="green" textSize="text-xs" >Green</ColorShadowButton>
<ColorShadowButton color="cyan"  textSize="text-xs" >Cyan</ColorShadowButton>
<ColorShadowButton color="teal"  textSize="text-xs" >Teal</ColorShadowButton>
<ColorShadowButton color="lime"  textSize="text-xs" >Lime</ColorShadowButton>
<ColorShadowButton color="red"   textSize="text-xs" >Red</ColorShadowButton>
<ColorShadowButton color="pink"  textSize="text-xs" >Ping</ColorShadowButton>
<ColorShadowButton color="purple" textSize="text-xs" >Purple</ColorShadowButton>
```

<Htwo label="text-base" />

<ExampleDiv>
<ColorShadowButton color="blue"  textSize="text-base" >Blue</ColorShadowButton>
<ColorShadowButton color="green" textSize="text-base" >Green</ColorShadowButton>
<ColorShadowButton color="cyan"  textSize="text-base" >Cyan</ColorShadowButton>
<ColorShadowButton color="teal"  textSize="text-base" >Teal</ColorShadowButton>
<ColorShadowButton color="lime"  textSize="text-base" >Lime</ColorShadowButton>
<ColorShadowButton color="red"   textSize="text-base" >Red</ColorShadowButton>
<ColorShadowButton color="pink"  textSize="text-base" >Ping</ColorShadowButton>
<ColorShadowButton color="purple" textSize="text-base" >Purple</ColorShadowButton>
</ExampleDiv>

```html
<ColorShadowButton color="blue" textSize="text-base">Blue</ColorShadowButton>
<ColorShadowButton color="green" textSize="text-base">Green</ColorShadowButton>
<ColorShadowButton color="cyan" textSize="text-base">Cyan</ColorShadowButton>
<ColorShadowButton color="teal" textSize="text-base">Teal</ColorShadowButton>
<ColorShadowButton color="lime" textSize="text-base">Lime</ColorShadowButton>
<ColorShadowButton color="red" textSize="text-base">Red</ColorShadowButton>
<ColorShadowButton color="pink" textSize="text-base">Ping</ColorShadowButton>
<ColorShadowButton color="purple" textSize="text-base">Purple</ColorShadowButton>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
