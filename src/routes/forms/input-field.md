---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { onMount } from 'svelte';
  import { Input, Label, Helper, Iconinput, Button, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import { AtSymbol , Mail, Search } from 'svelte-heros'
  import componentProps1 from '../props/Input.json'
  let items1 = componentProps1.props
  import componentProps2 from '../props/Iconinput.json'
  let items2 = componentProps2.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let ref

  onMount(() => {
    ref.focus();
  });
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms">Forms</BreadcrumbItem>
  <BreadcrumbItem>Input</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Input</h1>

<p>The Input component allows you to change the input size, add disabled, helper text, and floating label.</p>

<Htwo label="Sizes" />

<p>User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.</p>

<Htwo label="Examples" />

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

<p>Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.</p>

<ExampleDiv>
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</ExampleDiv>

```html
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

<Htwo label="Validation" />

<p>Use the following example to apply validation styles for success and error messages.</p>

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

<Htwo label="Input group" />

<p>This example can be used to add a descriptive icon or additional text inside the input field.</p>

<p>With the Iconinput component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-blue-700 dark:text-blue-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-blue-700 dark:text-blue-500 hover:underline">other icon sets</a>. Use iconClass to modify the icon color.</p>

<ExampleDiv>
<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Iconinput noBorder id="email" type="email" icon={Mail} iconClass="h-4 w-4 mr-2 dark:text-green-500" placeholder="name@flowbite.com" />
</div>
<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <Iconinput id="website-admin" placeholder="elonmusk" label="Border" icon={AtSymbol} iconClass="h-4 w-4 mr-2 dark:text-red-500"/>
</div>
</ExampleDiv>

```html
<script>
  import { Iconinput } from 'flowbite-svelte'
</script>
<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Iconinput noBorder id="email" type="email" icon={Mail} iconClass="h-4 w-4 mr-2 dark:text-green-500" placeholder="name@flowbite.com" />
</div>
<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <Iconinput id="website-admin" placeholder="elonmusk" label="Border" icon={AtSymbol} iconClass="h-4 w-4 mr-2 dark:text-red-500"/>
</div>
```

<Htwo label="Helper text" />

<p>Use the helper prop to add your helper text. You can use HTML in the helper text.</p>

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

<Htwo label="Search input" />

<ExampleDiv>
<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <div class="relative">
  <Iconinput noBorder id="search" icon={Search} iconClass="h-5 w-5 mr-2 dark:text-green-500" placeholder="Search" class="p-4" />
  <Button textSize="text-sm" class="text-white absolute right-2.5 bottom-2" type="submit">Submit</Button>
  </div>
</form>
</ExampleDiv>

```html
<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <div class="relative">
  <Iconinput noBorder id="search" icon={Search} iconClass="h-5 w-5 mr-2 dark:text-green-500" placeholder="Search" class="p-4" />
  <Button textSize="text-sm" class="text-white absolute right-2.5 bottom-2" type="submit">Submit</Button>
  </div>
</form>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Input</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>Iconinput</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

