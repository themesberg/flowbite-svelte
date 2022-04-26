---
layout: formLayout
---

<script>
import { onMount } from 'svelte';
import { Input, Iconinput, FloatingLabelInput, Toggle, Textarea, Select, Fileupload, Radio, SingleCheckbox, Checkbox, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import { AtSymbolOutline , MailOutline } from 'svelte-heros'
import componentProps from '../props/Toggle.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

let props = {
  name: 'toggle-example',
  id: 'toggle-example',
  label: 'Toggle me',
  checked: false,
  disabled: false
};
let props2 = {
  name: 'toggle-example-checked',
  id: 'toggle-example-checked',
  label: 'Toggle me (checked)',
  checked: true,
  disabled: false
};
let props3 = {
  name: 'toggle-example-disabled',
  id: 'toggle-example-disabled',
  label: 'Toggle me (disabled)',
  checked: false,
  disabled: true
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

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Toggle {...props}/>

<Toggle {...props2}/>

<Toggle {...props3}/>
</div>

```html
<script>
import { Toggle } from 'flowbite-svelte'
let props = {
		name: 'toggle-example',
		id: 'toggle-example',
		label: 'Toggle me',
		labelClass: 'flex relative items-center mb-4 cursor-pointer',
		divClass:
			'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600',
		spanClass: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
		checked: false,
		disabled: false
	};
let props2 = {
		name: 'toggle-example-checked',
		id: 'toggle-example-checked',
		label: 'Toggle me (checked)',
		checked: true,
		disabled: false
	};
let props3 = {
		name: 'toggle-example-disabled',
		id: 'toggle-example-disabled',
		label: 'Toggle me (disabled)',
		checked: false,
		disabled: true
	};
 let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...',
	};
</script>

<Toggle {...props}/>

<Toggle {...props2}/>

<Toggle {...props3}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
