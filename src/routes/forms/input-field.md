---
layout: formLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../utils'
  import { onMount } from 'svelte';
  import { Input, Label, Helper, Iconinput, Button, Breadcrumb, BreadcrumbItem, Badge, Heading } from '$lib'

  import componentProps1 from '../props/Input.json'
  let items1 = componentProps1.props
  import componentProps2 from '../props/Iconinput.json'
  let items2 = componentProps2.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  // Iconinput event handler
	let show = false;
  let show1 = false;

</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Input</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Input</Heading>

<CompoDescription>Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Input.svelte">Input</GitHubSource>
</ExampleDiv>

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.


<Htwo label="Setup" />

```html
<script>
	import { Input, Label, Helper } from 'flowbite-svelte';
</script>
```

<Htwo label="Input sizes" />

Use the following examples to apply a small, default or large size for the input fields.

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

<Htwo label="Disabled state" />

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

<ExampleDiv>
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</ExampleDiv>

```html
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

<Htwo label="Validation" />

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

<Htwo label="Input group" />

This example can be used to add a descriptive icon or additional text inside the input field.

With the Iconinput component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-blue-700 dark:text-blue-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-blue-700 dark:text-blue-500 hover:underline">other icon sets</a>. Use iconClass to modify the icon color.


<ExampleDiv>
	<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border small icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com"
			size="sm">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border default icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com">
      <svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border large icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com"
			size="lg">
      <svg aria-hidden="true" class="w-7 h-7 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Small icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border"
			size="sm">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Default icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
       </Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Large icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border"
			size="lg">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
		</Iconinput>
	</div>
</ExampleDiv>

```html
<script>
  import { Iconinput } from 'flowbite-svelte'
</script>

<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border small icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com"
			size="sm">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border default icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com">
      <svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="input-group-1" class="block mb-2">No border large icon input</Label>
		<Iconinput
			noBorder
			id="email"
			type="email"
			placeholder="name@flowbite.com"
			size="lg">
      <svg aria-hidden="true" class="w-7 h-7 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Small icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border"
			size="sm">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
		</Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Default icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
       </Iconinput>
	</div>
	<div class="mb-6">
		<Label for="website-admin" class="block mb-2">Large icon input</Label>
		<Iconinput
			id="website-admin"
			placeholder="elonmusk"
			label="Border"
			size="lg">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
		</Iconinput>
	</div>
```

<Htwo label="Iconinput click handler" />

This example shows how to add `on:click` event handler to `Iconinput`. By clicking an icon, it toggles icon and `type`:

<ExampleDiv>
<div class="mb-6">
	<Label for="website-admin" class="block mb-2">Your password</Label>
	<Iconinput
		placeholder="Your password here"
		type={show ? 'text' : 'password'}
		iconClass="dark:text-red-500">
      <div on:click={() => (show = !show)}>
      {@html show ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'}
      </div>
    </Iconinput>
</div>
<div class="mb-6">
	<Label for="website-admin" class="block mb-2">No border</Label>
	<Iconinput
    noBorder
    pointerEvent
		placeholder="Your password here"
		type={show1 ? 'text' : 'password'}
		iconClass="dark:text-red-500">
      <div on:click={() => (show1 = !show1)}>
      {@html show1 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'}
      </div>
    </Iconinput>
</div>
</ExampleDiv>

```html
<script>
  let show = false;
  let show1 = false;
</script>
<div class="mb-6">
	<Label for="website-admin" class="block mb-2">Your password</Label>
	<Iconinput
		placeholder="Your password here"
		type={show ? 'text' : 'password'}
		iconClass="dark:text-red-500">
      <div on:click={() => (show = !show)}>
      {@html show ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'}
      </div>
    </Iconinput>
</div>
<div class="mb-6">
	<Label for="website-admin" class="block mb-2">No border</Label>
	<Iconinput
    noBorder
    pointerEvent
		placeholder="Your password here"
		type={show1 ? 'text' : 'password'}
		iconClass="dark:text-red-500">
      <div on:click={() => (show1 = !show1)}>
      {@html show1 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>'}
      </div>
    </Iconinput>
</div>
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

<Htwo label="Search input" />

<ExampleDiv>
<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <div class="relative">
  <Iconinput noBorder id="search" placeholder="Search" class="p-4">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  </Iconinput>
  <Button textSize="text-sm" class="text-white absolute right-2.5 bottom-2" type="submit">Submit</Button>
  </div>
</form>
</ExampleDiv>

```html
<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <div class="relative">
  <Iconinput noBorder id="search" placeholder="Search" class="p-4">
  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  </Iconinput>
  <Button textSize="text-sm" class="text-white absolute right-2.5 bottom-2" type="submit">Submit</Button>
  </div>
</form>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Input</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Iconinput</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: DropdownItem" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
<Badge large={true}>on:paste</Badge>
</div>
