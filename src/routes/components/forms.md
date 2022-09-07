---
layout: formLayout
dir: Components
title: Forms
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { onMount } from 'svelte';
	import { Input, Label, Helper, Iconinput, Fileupload, Textarea, Select, Checkbox, Radio, Toggle, Breadcrumb, BreadcrumbItem, Heading } from '$lib'
  import componentProps from '../props/Input.json'
  import componentProps2 from '../props/Label.json'
	import componentProps3 from '../props/Helper.json'
  import componentProps4 from '../props/Iconinput.json'
	import componentProps5 from '../props/Fileupload.json'
  import componentProps6 from '../props/Textarea.json'
  import componentProps7 from '../props/Select.json'
	import componentProps8 from '../props/Checkbox.json'
	import componentProps9 from '../props/Radio.json'
	import componentProps10 from '../props/Toggle.json'

	let items = componentProps.props
  let items2 = componentProps2.props
	let items3 = componentProps3.props
	let items4 = componentProps4.props
	let items5 = componentProps5.props
	let items6 = componentProps6.props
	let items7 = componentProps7.props
	let items8 = componentProps8.props
	let items9 = componentProps9.props
	let items10 = componentProps10.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let fileuploadprops = {
    id : 'user_avatar'
  }
  let fileuploadprops2 = {
    id : 'user_avatar2',
  }
	
	function handleVoiceBtn() {
    alert('You clicked voice button');
  }

	let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
	let selected;

  let countries = [
    {value:"us", name: "United States"},
    {value:"ca", name: "Canada"},
    {value:"fr", name: "France"},
  ]
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite</CompoDescription>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

<Htwo label="Input Sizes" />

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

<ExampleDiv>
<div class='mb-6'>
  <Label for='large-input' class='block mb-2'>Large input</Label>
  <Input id="large-input" size="lg" placeholder="Large input" />
</div>
<div class='mb-6'>
  <Label for='default-input' class='block mb-2'>Default input</Label>
  <Input id='default-input' placeholder="Default input" />
</div>
<div class='mb-6'>
  <Label for='large-input' class='block mb-2'>Small input</Label>
  <Input size="sm" placeholder="Small input" label="Small input"/>
</div>
</ExampleDiv>

```html
<script>
import { Input, Label } from 'flowbite-svelte'
</script>
<div class='mb-6'>
  <Label for='large-input' class='block mb-2'>Large input</Label>
  <Input id="large-input" size="lg" placeholder="Large input" />
</div>
<div class='mb-6'>
  <Label for='default-input' class='block mb-2'>Default input</Label>
  <Input id='default-input' placeholder="Default input" />
</div>
<div class='mb-6'>
  <Label for='large-input' class='block mb-2'>Small input</Label>
  <Input size="sm" placeholder="Small input" label="Small input"/>
</div>
```

<Htwo label="Disabled" />

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

<ExampleDiv>
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</ExampleDiv>

```html
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

<Htwo label="Helper text" />

Use the helper prop to add your helper text. You can use HTML in the helper text.

<ExampleDiv>
<Label class='block mb-2' >Your email</Label>
<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com"/>
<Helper class='text-sm mt-2'>We’ll never share your details. Read our <a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</Helper>
</ExampleDiv>

```html
<Label class='block mb-2' >Your email</Label>
<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com"/>
<Helper class='text-sm mt-2'>We’ll never share your details. Read our <a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</Helper>
```

<Htwo label="Input element with icon" />

With the Iconinput component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-blue-700 dark:text-blue-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-blue-700 dark:text-blue-500 hover:underline">other icon sets</a>. Use iconClass to modify the icon color.

<ExampleDiv>
<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Iconinput noBorder id="email" type="email" iconClass="h-4 w-4 mr-2 dark:text-green-500" placeholder="name@flowbite.com">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Iconinput>
</div>
</ExampleDiv>

```html
<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Iconinput noBorder id="email" type="email" iconClass="h-4 w-4 mr-2 dark:text-green-500" placeholder="name@flowbite.com">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Iconinput>
</div>
```

<Htwo label="Input element with addon" />

<ExampleDiv>
<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <Iconinput id="website-admin" placeholder="elonmusk" label="Border" iconClass="h-4 w-4 mr-2 dark:text-red-500">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Iconinput>
</div>
</ExampleDiv>

```html
<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <Iconinput id="website-admin" placeholder="elonmusk" label="Border" iconClass="h-4 w-4 mr-2 dark:text-red-500">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Iconinput>
</div>
```

<Htwo label="Form validation" />

Use the following example to apply validation styles for success and error messages.

<ExampleDiv>
<div class="mb-6">
  <Label for='success' color='green' class='block mb-2'>Your name</Label>
  <Input id='success' color='green' placeholder="Success input" />
  <Helper class='mt-2' color='green'><span class="font-medium">Well done!</span> Some success messsage.</Helper>
</div>
<div class="mb-6">
  <Label for='error' color='red' class='block mb-2'>Your name</Label>
  <Input id='success' color='red' placeholder="Success input" />
  <Helper class='mt-2' color='red'><span class="font-medium">Well done!</span> Some success messsage.</Helper>
</div>
</ExampleDiv>

```html
<div class="mb-6">
  <Label for='success' color='green' class='block mb-2'>Your name</Label>
  <Input id='success' color='green' placeholder="Success input" />
  <Helper class='mt-2' color='green'><span class="font-medium">Well done!</span> Some success messsage.</Helper>
</div>
<div class="mb-6">
  <Label for='error' color='red' class='block mb-2'>Your name</Label>
  <Input id='success' color='red' placeholder="Success input" />
  <Helper class='mt-2' color='red'><span class="font-medium">Well done!</span> Some success messsage.</Helper>
</div>
```

<Htwo label="Textarea" />

<ExampleDiv>
<Textarea {...textareaprops} />
</ExampleDiv>

```html
<script>
import { Textarea } from 'flowbite-svelte'
let textareaprops = {
  id: 'message',
  name: 'message',
  label: 'Your message',
  rows: 4,
  placeholder: 'Leave a comment...',
};
</script>

<Textarea {...textareaprops} />
```

<Htwo label="Select input" />

Get started with the default example of a select input component to get a single option selection.

<ExampleDiv>
<Label>Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
</ExampleDiv>

```html
<script>
  import { Select} from 'flowbite-svelte'

  let selected;

  let countries = [
    {value:"us", name: "United States"},
    {value:"ca", name: "Canada"},
    {value:"fr", name: "France"},
  ]
</script>

<Label>Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
```

<Htwo label="Checkbox" />

<ExampleDiv class="flex flex-col gap-4">
<Checkbox>Default checkbox</Checkbox>
<Checkbox checked >Checked state</Checkbox>
</ExampleDiv>

```html
<script>
	import { Checkbox, Label, Helper } from 'flowbite-svelte';
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
```

<Htwo label="Radio buttons" />

<ExampleDiv class="flex flex-col gap-4">
<Radio name="example">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
</ExampleDiv>

```html
<script>
	import { Radio, Label, Helper } from 'flowbite-svelte';
</script>

<Radio name="example">Default radio</Radio>
<Radio name="example" checked>Checked state</Radio>
```

<Htwo label="File upload" />

<ExampleDiv>
<Label>Upload file</Label>
<Fileupload {...fileuploadprops} />
</ExampleDiv>

```html
<script>
import { Fileupload } from 'flowbite-svelte'

let fileuploadprops = {
  id : 'user_avatar'
}

let fileuploadprops2 = {
  id : 'user_avatar2'
}
</script>

<Fileupload {...fileuploadprops} />
```

<Htwo label="Toggle Switch" />


<ExampleDiv class="flex flex-col gap-2">
  <Toggle>Toggle me</Toggle>
  <Toggle checked={true}>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</ExampleDiv>

```html
<script>
  import { Toggle } from 'flowbite-svelte'
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Input</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Label</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Helper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Iconinput</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Fileupload</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Textarea</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Select</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Checkbox</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Radio</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items9} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Toggle</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items10} rowState='hover' />
</TableProp>

