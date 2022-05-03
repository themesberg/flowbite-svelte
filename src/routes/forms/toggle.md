---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
import { onMount } from 'svelte';
import { Toggle, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import { AtSymbolOutline , MailOutline } from 'svelte-heros'
import componentProps from '../props/Toggle.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let props = {
  name: 'toggle-example',
  id: 'toggle-example',
  label: 'Toggle me',
  value:'toggle1'
};
let props2 = {
  name: 'toggle-example-checked',
  id: 'toggle-example-checked',
  label: 'Checked toggle',
  checked: true,
  value:'toggle2'
};
let props3 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Disabled toggle',
  disabled: true,
  value:'toggle3'
};
let props4 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Disabled checked',
  checked: true,
  disabled: true,
  value:'toggle4'
};
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Toggle',
      href:'/forms/toggle'
    }
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Toggle Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<div class="w-full py-2">
<Toggle {...props} />
</div>
<div class="w-full py-2">
<Toggle {...props2}/>
</div>
<div class="w-full py-2">
<Toggle {...props3}/>
</div>
<div class="w-full py-2">
<Toggle {...props4}/>
</div>
</ExampleDiv>

```html
<script>
import { Toggle } from 'flowbite-svelte'

let props = {
  name: 'toggle-example',
  id: 'toggle-example',
  label: 'Toggle me',
  value:'toggle'
};
let props2 = {
  name: 'toggle-example-checked',
  id: 'toggle-example-checked',
  label: 'Checked toggle',
  checked: true,
  value:'toggle'
};
let props3 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Disabled toggle',
  disabled: true,
  value:'toggle'
};
let props4 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Disabled checked',
  checked: true,
  disabled: true,
  value:'toggle'
};
</script>

<Toggle {...props}/>

<Toggle {...props2}/>

<Toggle {...props3}/>

<Toggle {...props4}/>
```

<Htwo label="Colors" />

<ExampleDiv class="flex justify-between">

<Toggle color="red" value='red-toggle' name="red-toggle" id="red-toggle" label="Red" checked/>

<Toggle color="green" value='green-toggle' name="green-toggle" id="green-toggle" label="Green" checked/>

<Toggle color="purple" value='purple-toggle' name="purple-toggle" id="purple-toggle" label="Purple" checked/>

<Toggle color="yellow" value='yellow-toggle' name="yellow-toggle" id="yellow-toggle" label="Yellow" checked/>

<Toggle color="teal" value='teal-toggle' name="teal-toggle" id="teal-toggle" label="Teal" checked/>

<Toggle color="orange" value='orange-toggle' name="orange-toggle" id="orange-toggle" label="Orange" checked/>

</ExampleDiv>

```html
<Toggle color="red" value='red-toggle' name="red-toggle" id="red-toggle" label="Red" checked/>

<Toggle color="green" value='green-toggle' name="green-toggle" id="green-toggle" label="Green" checked/>

<Toggle color="purple" value='purple-toggle' name="purple-toggle" id="purple-toggle" label="Purple" checked/>

<Toggle color="yellow" value='yellow-toggle' name="yellow-toggle" id="yellow-toggle" label="Yellow" checked/>

<Toggle color="teal" value='teal-toggle' name="teal-toggle" id="teal-toggle" label="Teal" checked/>

<Toggle color="orange" value='orange-toggle' name="orange-toggle" id="orange-toggle" label="Orange" checked/>
```

<Htwo label="Sizes" />

<ExampleDiv>
<div class="w-full py-2">
<Toggle size="small" value='small-toggle' name="small-toggle" id="small-toggle" label="Small toggle" checked/>
</div>
<div class="w-full py-2">
<Toggle value='default-toggle' name="default-toggle" id="default-toggle" label="Default toggle" checked/>
</div>
<div class="w-full py-2">
<Toggle size="large" value='large-toggle' name="large-toggle" id="large-toggle" label="Large toggle" checked/>
</div>
</ExampleDiv>

```html
<Toggle size="small" value='small-toggle' name="small-toggle" id="small-toggle" label="Small toggle" checked/>

<Toggle value='default-toggle' name="default-toggle" id="default-toggle" label="Default toggle" checked/>

<Toggle size="large" value='large-toggle' name="large-toggle" id="large-toggle" label="Large toggle" checked/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
