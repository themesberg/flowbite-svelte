---
layout: componentLayout
title: Svelte Input Fields - Flowbite
breadcrumb_title: Svelte Input Fields
component_title: Input Field
dir: Forms
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList, CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { onMount } from 'svelte';
  import { Badge, A } from '$lib'

  const components = 'Input, InputAddon'
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

```svelte example
<script>
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
</script>

<form>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required />
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
      <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
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
  <Checkbox class="mb-6 space-x-1 rtl:space-x-reverse" required>
    I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
  </Checkbox>
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

## Clearable

This example shows how to create an input field where the user can remove the
text with one click.

```svelte example hideScript
<script>
  import { Input } from 'flowbite-svelte';
</script>

<Input clearable value="Clearable input" />
```

## Validation

Use the following example to apply validation styles for success and error messages.

```svelte example
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<div class="mb-6">
  <Label for="success" color="green" class="block mb-2">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green">
    <span class="font-medium">Well done!</span>
    Some success message.
  </Helper>
</div>
<div class="mb-6">
  <Label for="error" color="red" class="block mb-2">Your name</Label>
  <Input id="error" color="red" placeholder="Error input" />
  <Helper class="mt-2" color="red">
    <span class="font-medium">Oh, snapp!</span>
    Some error message.
  </Helper>
</div>
```

## Input with icon

```svelte example class="space-y-6"
<script>
  import { Label, Input, Button, CloseButton } from 'flowbite-svelte';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<Label class="space-y-2">
  <span>Small input - left icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="sm">
    <EnvelopeSolid slot="left" class="w-4 h-4" />
  </Input>
</Label>

<Label class="space-y-2">
  <span>Default input - right icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="md">
    <EnvelopeSolid slot="right" class="w-5 h-5" />
  </Input>
</Label>

<Label class="space-y-2">
  <span>Large input - both icons</span>
  <Input type="email" placeholder="name@flowbite.com" size="lg">
    <EnvelopeSolid slot="left" class="w-6 h-6" />
    <CloseButton slot="right" />
  </Input>
</Label>
```

## Input group

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte example class="space-y-6"
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
    <Button color="primary">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="primary">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email" placeholder="elonmusk" />
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
```

## Icon click handler

This example shows how to add `on:click` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

```svelte example class="space-y-6"
<script>
  import { Button, Label, Input, ButtonGroup, InputAddon, ToolbarButton } from 'flowbite-svelte';
  import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
  let show = false;
  let show1 = false;
</script>

<div>
  <Label for="show-password" class="mb-2">Your password</Label>
  <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
    <button slot="left" on:click={() => (show = !show)} class="pointer-events-auto">
      {#if show}
        <EyeOutline class="w-6 h-6" />
      {:else}
        <EyeSlashOutline class="w-6 h-6" />
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
          <EyeOutline class="w-6 h-6" />
        {:else}
          <EyeSlashOutline class="w-6 h-6" />
        {/if}
      </button>
    </InputAddon>
    <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
  </ButtonGroup>
</div>
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
<script>
  import { Input, Label, Helper } from 'flowbite-svelte';
</script>

<Label class="block space-y-2">
  <span>Your email</span>
  <Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
  <Helper class="text-sm">
    We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Privacy Policy </a>
    .
  </Helper>
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
  <span>Your Age</span>
  <NumberInput bind:value />
</Label>
<div class="dark:text-white">
  <p>Value: {value}</p>
  <p>Type of value: {typeof value}</p>
</div>
```

## Search input

```svelte example
<script>
  import { Input, Label, Button } from 'flowbite-svelte';
  import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<form>
  <Label for="search" class="block mb-2">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg">
    <SearchOutline slot="left" class="w-6 h-6 text-gray-500 dark:text-gray-400" />
    <Button slot="right" size="sm" type="submit">Search</Button>
  </Input>
</form>
```

## Dropdown

Use this example to show a dropdown menu right next to the input field.

```svelte example class="h-64"
<script>
  import { Input, InputAddon, ButtonGroup, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
</script>

<ButtonGroup class="w-full">
  <Button color="none" class="shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    All categories<ChevronDownOutline class="w-6 h-6 ms-2" />
  </Button>
  <Dropdown>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button color="primary" class="p-2.5!" type="submit">
    <SearchOutline class="w-5 h-5" />
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

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Input styling

- Use the `class` prop to overwrite the `input` tag class.
- Use the `classRight` and/or `classLeft` prop to overwrite the `floatClass`.

### InputAddon styling

- Use the `class` prop to overwrite the `input` tag class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Input Field](https://flowbite.com/docs/forms/input-field/)

<GitHubCompoLinks {components}/>
