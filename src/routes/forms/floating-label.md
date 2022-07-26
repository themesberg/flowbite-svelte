---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { onMount } from 'svelte';
  import { FloatingLabelInput, Helper, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/FloatingLabelInput.json'
   import componentProps2 from '../props/Helper.json'
  let items = componentProps.props
  let items2 = componentProps2.props
  
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Floating label</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Floating label</h1>

<Htwo label="Examples" />

<p>Get started with the following three styles for the floating label component and use the label tag as a visual placeholder using the peer-placeholder-shown and peer-focus utility classes from Tailwind CSS.</p>

<ExampleDiv>
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
<FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>
<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />
<FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard" />
</div>
</ExampleDiv>

```html
<script>
  import { FloatingLabelInput } from 'flowbite-svelte'
</script>

<FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>
<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />
<FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard" />
```

<Htwo label="Disabled state" />

<p>Apply the disabled attribute to the input fields to disallow the user from changing the content.</p>

<ExampleDiv>
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
<FloatingLabelInput style="filled" id="disabled_filled" name="disabled_filled" type="text" label="Disabled filled" disabled/>
<FloatingLabelInput style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" label="Disabled outlined" disabled/>
<FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" label="Disabled standard" disabled/>
</div>
</ExampleDiv>

```html
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
<FloatingLabelInput style="filled" id="disabled_filled" name="disabled_filled" type="text" label="Disabled filled" disabled/>
<FloatingLabelInput style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" label="Disabled outlined" disabled/>
<FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" label="Disabled standard" disabled/>
</div>
```

<Htwo label="Validation" />

<p>Use the following examples of input validation for the success and error messages by applying the validation text below the input field and using the green or red color classes from Tailwind CSS.</p>

<ExampleDiv>
<!-- Success messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="green" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text" label="Filled success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text" label="Outlined success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text" label="Standard success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
</div>
<!-- Error messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="red" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text" label="Filled error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text" label="Outlined error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text" label="Standard error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
</div>
</ExampleDiv>

```html
<!-- Success messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="green" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text" label="Filled success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text" label="Outlined success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text" label="Standard success"/>
    <Helper color="green"><span class="font-medium">Well done!</span> Some success message.</Helper>
  </div>
</div>
<!-- Error messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="red" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text" label="Filled error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text" label="Outlined error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text" label="Standard error"/>
    <Helper color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
  </div>
</div>
```

<Htwo label="Sizes" />

<p>Use the small and default sizes of the floating label input fields from the following example.</p>

<ExampleDiv>
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
<FloatingLabelInput size="small" style="filled" id="small_filled" name="small_filled" type="text" label="Small filled"/>
<FloatingLabelInput size="small" style="outlined" id="small_outlined" name="small_outlined" type="text" label="Small outlined" />
<FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text" label="Small standard" />
</div>
<div class="grid gap-6 items-end md:grid-cols-3">
<FloatingLabelInput style="filled" id="default_filled" name="default_filled" type="text" label="Default filled"/>
<FloatingLabelInput style="outlined" id="default_outlined" name="default_outlined" type="text" label="Default outlined" />
<FloatingLabelInput id="default_standard" name="default_standard" type="text" label="Default standard" />
</div>
</ExampleDiv>

```html
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
<FloatingLabelInput size="small" style="filled" id="small_filled" name="small_filled" type="text" label="Small filled"/>
<FloatingLabelInput size="small" style="outlined" id="small_outlined" name="small_outlined" type="text" label="Small outlined" />
<FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text" label="Small standard" />
</div>
<div class="grid gap-6 items-end md:grid-cols-3">
<FloatingLabelInput style="filled" id="default_filled" name="default_filled" type="text" label="Default filled"/>
<FloatingLabelInput style="outlined" id="default_outlined" name="default_outlined" type="text" label="Default outlined" />
<FloatingLabelInput id="default_standard" name="default_standard" type="text" label="Default standard" />
</div>
```

<Htwo label="Helper text" />

<p>Add a helper text in addition to the label if you want to show more information below the input field.</p>

<ExampleDiv>
<FloatingLabelInput style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text" label="Floating helper"/>
<Helper>Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</Helper>
</ExampleDiv>

```html
<FloatingLabelInput style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text" label="Floating helper"/>
<Helper>Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</Helper>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>Helper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={items2} rowState='hover' />
</TableProp>