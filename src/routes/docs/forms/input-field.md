---
layout: componentLayout
title: Svelte Input Fields - Flowbite
breadcrumb_title: Svelte Input Fields
component_title: Input Field
dir: Forms
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList  } from '../../utils'
  import { onMount } from 'svelte';
  import { Badge, A } from '$lib'
  import { props as items1 } from '../../props/Input.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover","on:paste","on:input"];
</script>



The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Setup

```svelte example hideOutput
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>
```

## Input fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

```svelte example hideScript
<script>
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
</script>

<form>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required  />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Last name</Label>
      <Input type="text" id="last_name" placeholder="Doe" required />
    </div>
    <div>
      <Label for="company" class="mb-2">Company</Label>
      <Input type="text" id="company" placeholder="Flowbite" required />
    </div>
    <div>
      <Label for="phone" class="mb-2">Phone number</Label>
      <Input type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>
    <div>
      <Label for="website" class="mb-2">Website URL</Label>
      <Input type="url" id="website" placeholder="flowbite.com" required />
    </div>
    <div>
      <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
      <Input type="number" id="visitors" placeholder="" required />
    </div>
  </div>
  <div class="mb-6">
    <Label for="email" class="mb-2">Email address</Label>
    <Input type="email" id="email" placeholder="john.doe@company.com" required />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" placeholder="•••••••••" required />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Confirm password</Label>
    <Input type="password" id="confirm_password" placeholder="•••••••••" required />
  </div>
  <Checkbox class="mb-6 space-x-1" required>I agree with the <A href="/">terms and conditions</A>.</Checkbox>
  <Button type="submit">Submit</Button>
</form>
```

## Input sizes

Use the following examples to apply a small, default or large size for the input fields.

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte example hideScript class="space-y-6"
<script>
  import { Input, Label } from 'flowbite-svelte';
</script>

<Label class="space-y-2">
  <span>Small icon input</span>
  <Input type="email" placeholder="Small input" size="sm" />
</Label>

<Label class="space-y-2">
  <span>Default icon input</span>
  <Input type="email" placeholder="Default input" size="md" />
</Label>

<Label class="space-y-2">
  <span>Large icon input</span>
  <Input type="email" placeholder="Large input" size="lg" />
</Label>
```

## Disabled state

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example hideScript
<script>
  import { Input } from 'flowbite-svelte';
</script>

<Input class="mb-6" disabled value="Disabled input" />
<Input class="mb-6" disabled readonly value="Disabled readonly input" />
```

## Validation

Use the following example to apply validation styles for success and error messages.

```svelte example hideScript
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<div class="mb-6">
  <Label for="success" color="green" class="block mb-2">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green"
    ><span class="font-medium">Well done!</span> Some success message.</Helper>
</div>
<div class="mb-6">
  <Label for="error" color="red" class="block mb-2">Your name</Label>
  <Input id="success" color="red" placeholder="Success input" />
  <Helper class="mt-2" color="red"><span class="font-medium">Oh, snapp!</span> Some error message.</Helper>
</div>
```

## Input with icon

```svelte example hideScript class="space-y-6"
<script>
  import { Label, Input, Button, CloseButton } from 'flowbite-svelte';
</script>

<Label class="space-y-2">
  <span>Small input - left icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="sm">
    <svg slot="left" aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
  </Input>
</Label>

<Label class="space-y-2">
  <span>Default input - right icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="md">
    <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
  </Input>
</Label>

<Label class="space-y-2">
  <span>Large input - both icons</span>
  <Input type="email" placeholder="name@flowbite.com" size="lg">
    <svg slot="left" aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
    <CloseButton slot="right" />
  </Input>
</Label>
```

## Input group

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte example hideScript class="space-y-6"
<script>
  import { Label, Input, Button, InputAddon, ButtonGroup, Checkbox } from 'flowbite-svelte';
</script>

<div>
  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full" size="sm">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email" placeholder="elonmusk" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full" size="md">
    <Input id="input-addon-md" type="email" placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full" size="lg">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email" placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label for="input-addon" class="mb-2">Grouped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon" type="email" placeholder="elonmusk" />
    <Button color="blue">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email" placeholder="elonmusk" />
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox /></InputAddon>
    <Button color="red">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
```

## Icon click handler

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
    <button slot="left" on:click={() => (show = !show)} class="pointer-events-auto">
      {#if show}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
      {/if}
    </button>
  </Input>
</div>

<div>
  <Label for="show-password1" class="mb-2">Your password</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <button on:click={() => (show1 = !show1)}>
        {#if show1}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
        {/if}
      </button>
    </InputAddon>
    <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
  </ButtonGroup>
</div>
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example hideScript
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<Label class="block space-y-2">
  <span>Your email</span>
  <Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
  <Helper class="text-sm">We’ll never share your details. Read our <a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</Helper>
</Label>
```

## Number input

By default the `Input` component binds the `value` as `string`. If you need a variable bound as `number` you need to use a specialised version of `Input` called `NumberInput`.

```svelte example
<script>
  import { NumberInput, Label } from 'flowbite-svelte';
  let value = 5;
</script>

<Label class="space-y-2 mb-4">
  <span>Your Email</span>
  <NumberInput bind:value />
</Label>

<p>Value: {value}</p>
<p>Type of value: {typeof value}</p>
```

## Search input

```svelte example hideScript
<script>
  import { Input, Label, Button } from 'flowbite-svelte';
</script>

<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg">
    <svg slot="left" aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    <Button slot="right" size="sm" type="submit">Search</Button>
  </Input>
</form>
```

## Dropdown

Use this example to show a dropdown menu right next to the input field.

```svelte example
<script>
  import { Input, InputAddon, ButtonGroup, Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';
</script>

<ButtonGroup class="w-full">
  <Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    <Chevron>All categories</Chevron>
  </Button>
  <Dropdown>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button color="blue" class="!p-2.5" type="submit">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </Button>
</ButtonGroup>
```

## Advanced usage

If you need a full control over `input` HTML element while still re-using the Flowbite formatting, you can put the `input` element as a default slot. The example below is in fact the implementation of the above mentioned `NumberInput`.

```svelte example class="space-y-4"
<script>
  import { Input } from 'flowbite-svelte';
  let value = 5;
</script>

<Input let:props>
  <div slot="left">#</div>
  <input type="number" {...props} bind:value />
</Input>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

### Input

<TableProp>
<TableDefaultRow items={items1} rowState='hover' />
</TableProp>

## Forwarded Events: Input

<DocBadgeList items={events} />

