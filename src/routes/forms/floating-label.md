---
layout: formLayout
---


<script>
import { onMount } from 'svelte';
import { FloatingLabelInput, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/FloatingLabelInput.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

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
      label:'Floating label',
      href:'/forms/floating-label'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Floating label Components</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<form>
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
</div>

```html
<script>
  import { FloatingLabelInput } from 'flowbite-svelte'
</script>

<form> 
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
