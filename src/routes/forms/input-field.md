---
layout: formLayout
title: Svelte Input Fields - Flowbite
breadcrumb_title: Input fields
dir: Forms
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow } from '../utils'
  import { onMount } from 'svelte';
  import { Breadcrumb, BreadcrumbItem, Badge, Heading, A } from '$lib'

  import componentProps1 from '../props/Input.json'
  let items1 = componentProps1.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

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

<Htwo label="Input fields" />

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

```svelte example hideScript
<script>
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
</script>

<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <Label for="first_name" class="mb-2">First name</Label>
            <Input type="text" id="first_name" placeholder="John" required/>
        </div>
        <div>
            <Label for="last_name" class="mb-2">Last name</Label>
            <Input type="text" id="last_name" placeholder="Doe" required/>
        </div>
        <div>
            <Label for="company" class="mb-2">Company</Label>
            <Input type="text" id="company" placeholder="Flowbite" required/>
        </div>
        <div>
            <Label for="phone" class="mb-2">Phone number</Label>
            <Input type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <Label for="website" class="mb-2">Website URL</Label>
            <Input type="url" id="website" placeholder="flowbite.com" required/>
        </div>
        <div>
            <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
            <Input type="number" id="visitors" placeholder="" required/>
        </div>
    </div>
    <div class="mb-6">
        <Label for="email" class="mb-2">Email address</Label>
        <Input type="email" id="email" placeholder="john.doe@company.com" required/>
    </div>
    <div class="mb-6">
        <Label for="password" class="mb-2">Password</Label>
        <Input type="password" id="password" placeholder="•••••••••" required/>
    </div>
    <div class="mb-6">
        <Label for="confirm_password" class="mb-2">Confirm password</Label>
        <Input type="password" id="confirm_password" placeholder="•••••••••" required/>
    </div>
    <Checkbox class="mb-6 space-x-1" required>I agree with the <A href="/">terms and conditions</A>.</Checkbox>
    <Button type="submit">Submit</Button>
</form>
```

<Htwo label="Input sizes" />

Use the following examples to apply a small, default or large size for the input fields.

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte example hideScript class="space-y-6"
<script>
  import { Input, Label } from 'flowbite-svelte';
</script>

<Label class="space-y-2">
  <span>Small icon input</span>
  <Input type="email"  placeholder="Small input" size="sm"/>
</Label>

<Label class="space-y-2">
  <span>Default icon input</span>
  <Input type="email"  placeholder="Default input" size="md"/>
</Label>

<Label class="space-y-2">
  <span>Large icon input</span>
  <Input type="email"  placeholder="Large input" size="lg"/>
</Label>

```

<Htwo label="Disabled state" />

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example hideScript
<script>
  import { Input } from 'flowbite-svelte';
</script>

<Input class="mb-6" disabled value="Disabled input" />
<Input class="mb-6" disabled readonly value="Disabled readonly input" />
```

<Htwo label="Validation" />

Use the following example to apply validation styles for success and error messages.

```svelte example hideScript
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<div class="mb-6">
  <Label for='success' color='green' class='block mb-2'>Your name</Label>
  <Input id='success' color='green' placeholder="Success input" />
  <Helper class='mt-2' color='green'><span class="font-medium">Well done!</span> Some success messsage.</Helper>
</div>
<div class="mb-6">
  <Label for='error' color='red' class='block mb-2'>Your name</Label>
  <Input id='success' color='red' placeholder="Success input" />
  <Helper class='mt-2' color='red'><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
</div>
```

<Htwo label="Input with icon" />

```svelte example hideScript class="space-y-6"
<script>
  import { Label, Input, Button, InputAddon, ButtonGroup, Checkbox } from 'flowbite-svelte';
</script>

<Label class="space-y-2">
  <span>Small icon input</span>
  <Input type="email"  placeholder="name@flowbite.com" size="sm">
    <svg slot="startIcon" aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Input>
</Label>

<Label class="space-y-2">
  <span>Default icon input</span>
  <Input type="email"  placeholder="name@flowbite.com" size="md">
    <svg slot="endIcon"  aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
  </Input>
</Label>

<Label class="space-y-2">
  <span>Large icon input</span>
  <Input type="email"  placeholder="name@flowbite.com" size="lg">
    <svg slot="startIcon" aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    <svg slot="endIcon" aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>    
  </Input>
</Label>
```

<Htwo label="Input group" />

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte example hideScript class="space-y-6"
<script>
  import { Label, Input, Button, InputAddon, ButtonGroup, Checkbox } from 'flowbite-svelte';
</script>

<div>
  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full" size="sm">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email"  placeholder="elonmusk" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full" size="md">
    <Input id="input-addon-md" type="email"  placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full" size="lg">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email"  placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label for="input-addon" class="mb-2">Groupped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon" type="email"  placeholder="elonmusk">
    </Input>
    <Button color="blue">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox/></InputAddon>
    <Button color="blue">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email"  placeholder="elonmusk">
    </Input>
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox/></InputAddon>
    <Button color="red">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
```

<Htwo label="Icon click handler" />

This example shows how to add `on:click` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

```svelte example class="space-y-6"
<script>
  import { Button, Label, Input, ButtonGroup, InputAddon, ToolbarButton } from 'flowbite-svelte';
  let show = false;
  let show1 = false;
</script>

<div>
  <Label for="show-password" class="mb-2">Your password</Label>
  <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
    <div slot="startIcon" on:click={() => (show = !show)} class="pointer-events-auto cursor-pointer">
    {#if show}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
    {/if}
    </div>
  </Input>
</div>

<div>
  <Label for="show-password1" class="mb-2">Your password</Label>
  <ButtonGroup class="w-full">
    <InputAddon class="cursor-pointer">
      <svg on:click={() => (show1 = !show1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      {#if show1}
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      {:else}
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      {/if}
      </svg>
    </InputAddon>
    <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here"/>
  </ButtonGroup>
</div>
```

<Htwo label="Helper text" />

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example hideScript
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<Label class='block space-y-2' >
  <span>Your email</span>
  <Input label="Email" id="email" name="email" required placeholder="name@flowbite.com"/>
  <Helper class='text-sm'>We’ll never share your details. Read our <a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</Helper>
</Label>
```

<Htwo label="Search input" />

```svelte example hideScript
<script>
  import { Input, Label, Button } from 'flowbite-svelte';
</script>

<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg">
  <svg slot="startIcon" aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  <Button slot="endIcon" size="sm" type="submit">Search</Button>
  </Input>
</form>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Input</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: Input" />

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
<Badge large={true}>on:input</Badge>
</div>
