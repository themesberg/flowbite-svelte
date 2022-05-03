---
layout: badgeLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { BadgeIcon, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import {InformationCircleOutline} from 'svelte-heros'
  import componentProps from '../props/BadgeLink.json'
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
      label:'Badges',
      href:'/badges/'
    },
    {
      label:'Icon badge',
      href:'/badges/badge-icon'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Badges with Icon</h1>

<p>You can use <a href="https://github.com/shinokada/svelte-heroicons" target="_blank">Svelte-heroicon.</a></p>

```html
<script>
  import {BadgeIcon} from 'flowbite-svelte'
  import {InformationCircleOutline} from 'svelte-heros'
  let link="/"
</script>
```

<Htwo label="Size xs" />

<ExampleDiv>
<BadgeIcon name="Default" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Red" color="red" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Green" color="green" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
</ExampleDiv>

```html
<BadgeIcon name="Default" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Red" color="red" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Green" color="green" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" ><InformationCircleOutline class="mr-1" size="14"/></BadgeIcon>
```

<Htwo label="Size sm" />

<ExampleDiv>
<BadgeIcon name="Default" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="16"/></BadgeIcon>
</ExampleDiv>

```html
<BadgeIcon name="Default" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-sm" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
```

<Htwo label="Size base" />

<ExampleDiv>
<BadgeIcon name="Default" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
</ExampleDiv>

```html
<BadgeIcon name="Default" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Gray" color="gray" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Red" color="red" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Green" color="green" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Yellow" color="yellow" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Indigo" color="indigo" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Purple" color="purple" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
<BadgeIcon name="Pink" color="pink" textSize="text-base" ><InformationCircleOutline class="mr-1" size="18"/></BadgeIcon>
```

<Htwo label="Badges with icon only" />

<ExampleDiv>
<BadgeIcon textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="gray" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="red" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="green" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="yellow" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="indigo" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="purple" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
<BadgeIcon color="pink" textSize="text-base"><InformationCircleOutline size="16" /></BadgeIcon>
</ExampleDiv>

```html
<BadgeIcon textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="gray" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="red" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="green" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="yellow" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="indigo" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="purple" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
<BadgeIcon color="pink" textSize="text-base"><InformationCircleOutline class="mr-1" size="18" /></BadgeIcon>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>