---
layout: componentLayout
title: Svelte Input Fields - Flowbite
breadcrumb_title: Svelte Input Fields
component_title: Input Field
dir: Forms
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
---

<script>
  import { TableProp, TableDefaultRow,  CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { A } from '$lib'

  const components = 'Input, InputAddon'
</script>

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Setup

```svelte example hideOutput
<script>
  import { Input, Label, Helper } from "flowbite-svelte";
</script>
```

## Input fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

```svelte example
<script>
  import { Input, Label, Helper, Button, Checkbox, A } from "flowbite-svelte";
</script>

<form>
  <div class="mb-6 grid gap-6 md:grid-cols-2">
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
  <Checkbox class="mb-6 gap-1 rtl:space-x-reverse" required>
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
  import { Input, Label } from "flowbite-svelte";
</script>

<Label class="space-y-2">
  <div>Small icon input</div>
  <Input type="email" placeholder="Small input" size="sm" />
</Label>

<Label class="space-y-2">
  <div>Default icon input</div>
  <Input type="email" placeholder="Default input" size="md" />
</Label>

<Label class="space-y-2">
  <div>Large icon input</div>
  <Input type="email" placeholder="Large input" size="lg" />
</Label>
```

## Disabled state

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example hideScript
<script>
  import { Input } from "flowbite-svelte";
</script>

<Input class="mb-6" disabled value="Disabled input" />
<Input class="mb-6" disabled readonly value="Disabled readonly input" />
```

## Clearable

This example shows how to create an input field where the user can remove the
text with one click.

```svelte example hideScript
<script>
  import { Input } from "flowbite-svelte";
</script>

<Input clearable value="Clearable input" />
```

## Validation

Use the following example to apply validation styles for success and error messages.

```svelte example
<script>
  import { Input, Label, Helper } from "flowbite-svelte";
</script>

<div class="mb-6">
  <Label for="success" color="green" class="mb-2 block">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green">
    <span class="font-medium">Well done!</span>
    Some success message.
  </Helper>
</div>
<div class="mb-6">
  <Label for="error" color="red" class="mb-2 block">Your name</Label>
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
  import { Label, Input, Button, CloseButton } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Label class="space-y-2">
  <div>Small input - left icon</div>
  <Input type="email" placeholder="name@flowbite.com" size="sm" class="ps-8">
    {#snippet left()}
      <EnvelopeSolid class="h-4 w-4" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <div>Default input - right icon</div>
  <Input type="email" placeholder="name@flowbite.com" size="md" class="ps-9">
    {#snippet left()}
      <EnvelopeSolid class="h-5 w-5" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <div>Large input - both icons</div>
  <Input type="email" placeholder="name@flowbite.com" size="lg" class="ps-11">
    {#snippet left()}
      <EnvelopeSolid class="h-6 w-6" />
    {/snippet}
    {#snippet right()}
      <CloseButton />
    {/snippet}
  </Input>
</Label>
```

## Input group

This example can be used to add a descriptive icon or additional text inside the input field.

```svelte example class="space-y-6"
<script>
  import { Label, Input, Button, InputAddon, ButtonGroup, Checkbox } from "flowbite-svelte";
</script>

<div>
  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email" placeholder="john.doe@mail.com" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full">
    <Input id="input-addon-md" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label for="input-addon" class="mb-2">Grouped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon" type="email" placeholder="john.doe@mail.com" />
    <Button color="primary">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="primary">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
```

## Icon click handler

This example shows how to add `onclick` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

```svelte example class="gap-6"
<script>
  import { Button, Label, Input, ButtonGroup, InputAddon } from "flowbite-svelte";
  import { EyeOutline, EyeSlashOutline } from "flowbite-svelte-icons";
  let show = false;
  let show1 = false;
</script>

<div>
  <Label for="show-password" class="mb-2">Your password</Label>
  <Input id="show-password" type={show ? "text" : "password"} placeholder="Your password here" size="lg" class="pl-10">
    {#snippet left()}
      <button onclick={() => (show = !show)} class="pointer-events-auto">
        {#if show}
          <EyeOutline class="h-6 w-6" />
        {:else}
          <EyeSlashOutline class="h-6 w-6" />
        {/if}
      </button>
    {/snippet}
  </Input>
</div>

<div>
  <Label for="show-password1" class="mb-2">Your password</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <button onclick={() => (show1 = !show1)}>
        {#if show1}
          <EyeOutline class="h-6 w-6" />
        {:else}
          <EyeSlashOutline class="h-6 w-6" />
        {/if}
      </button>
    </InputAddon>
    <Input id="show-password1" type={show1 ? "text" : "password"} placeholder="Your password here" />
  </ButtonGroup>
</div>
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
<script>
  import { Input, Label, Helper } from "flowbite-svelte";
</script>

<Label class="flex flex-col gap-2">
  <span>Your email</span>
  <Input id="email" name="email" required placeholder="name@flowbite.com" />
  <Helper class="text-sm">
    We’ll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
    .
  </Helper>
</Label>
```

## Number input

By default the `Input` component binds the `value` as `string`. If you need a variable bound as `number` you need to use a specialised version of `Input` called `NumberInput`.

```svelte example
<script>
  import { Input, Label } from "flowbite-svelte";
  let value = 5;
</script>

<Label class="mb-4 flex flex-col gap-2">
  <span>Your Age</span>
  <Input type="number" bind:value />
</Label>
<div class="dark:text-white">
  <p>Value: {value}</p>
  <p>Type of value: {typeof value}</p>
</div>
```

## Search input

```svelte example
<script>
  import { Input, Label, Button } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
</script>

<form>
  <Label for="search" class="mb-2 block">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg" class="ps-9">
    {#snippet left()}
      <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
    {/snippet}
    {#snippet right()}
      <Button size="sm" type="submit">Search</Button>
    {/snippet}
  </Input>
</form>
```

## Dropdown

Use this example to show a dropdown menu right next to the input field.

```svelte example class="h-64"
<script>
  import { Input, InputAddon, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="w-full">
  <Button color={undefined} class="shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button color="primary" class="p-2.5!" type="submit">
    <SearchOutline class="h-5 w-5" />
  </Button>
</ButtonGroup>
```

## Advanced usage

If you need a full control over `input` HTML element while still re-using the Flowbite formatting, you can put the `input` element as a default slot. The example below is in fact the implementation of the above mentioned `NumberInput`.

```svelte example class="gap-4"
<script>
  import { Input } from "flowbite-svelte";
  let value = 5;
</script>

<Input>
  {#snippet left()}#{/snippet}
  {#snippet children(props)}
    <input type="number" {...props} bind:value class={[props.class, "ps-9"]} />
  {/snippet}
</Input>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Input Field](https://flowbite.com/docs/forms/input-field/)

<GitHubCompoLinks {components}/>
