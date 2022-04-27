---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import { SingleCheckbox, Checkbox, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/SingleCheckbox.json'
let items = componentProps.props
import componentProps2 from '../props/Checkbox.json'
let items2 = componentProps2.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

let legend = 'Checkbox variants';
let checkboxOptions= [
  {
    id: 'checkbox-1',
    checked: true,
    label:
      'I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>'
  },
  {
    id: 'checkbox-2',
    label: 'I want to get promotional offers'
  },
  {
    id: 'checkbox-3',
    label: 'Eligible for international shipping (disabled)',
    disabled: true
  },
  {
    id: 'checkbox-4',
    label: 'Free shipping via Flowbite',
    helper:
      "For orders shipped from Flowbite from <span class='font-medium'>€ 25</span> in books or <span>€ 29</span> on other categories</span>"
  }
]

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
      label:'Checkbox',
      href:'/forms/checkbox'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Checkbox Components</h1>

<Htwo label="Examples" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Checkbox options={checkboxOptions} {legend} />
</div>

```html
<script>
import { Checkbox } from 'flowbite-svelte'

let legend = 'Checkbox variants';
let checkboxOptions= [
  {
    id: 'checkbox-1',
    checked: true,
    label:
      'I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>'
  },
  {
    id: 'checkbox-2',
    label: 'I want to get promotional offers'
  },
  {
    id: 'checkbox-3',
    label: 'Eligible for international shipping (disabled)',
    disabled: true
  },
  {
    id: 'checkbox-4',
    label: 'Free shipping via Flowbite',
    helper:
      "For orders shipped from Flowbite from <span class='font-medium'>€ 25</span> in books or <span>€ 29</span> on other categories</span>"
  }
]
</script>

<Checkbox options={checkboxOptions} {legend} />
```

<Htwo label="Signle checkbox" />


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
</div>

```html
<SingleCheckbox name="rememberme" id="rememberme" required label="Remember me" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>SingleCheckbox</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items} rowState='hover' />
</Table>


<h3>Checkbox</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>
