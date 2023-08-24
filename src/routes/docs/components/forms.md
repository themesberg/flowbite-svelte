---
layout: componentLayout
title: Svelte Forms - Flowbite
breadcrumb_title: Svelte Forms
component_title: Forms
dir: Components
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
thumnailSize: w-40
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A, Heading } from '$lib'
  
  const components = 'Input, Label, Helper, Fileupload, Textarea, Select, Checkbox, Radio, Toggle, MultiSelect'
</script>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

## Input Sizes

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte example
<script>
  import { Label, Input } from 'flowbite-svelte';
</script>

<div class="mb-6">
  <Label for="large-input" class="block mb-2">Large input</Label>
  <Input id="large-input" size="lg" placeholder="Large input" />
</div>
<div class="mb-6">
  <Label for="default-input" class="block mb-2">Default input</Label>
  <Input id="default-input" placeholder="Default input" />
</div>
<div class="mb-6">
  <Label for="small-input" class="block mb-2">Small input</Label>
  <Input id="small-input" size="sm" placeholder="Small input" />
</div>
```

## Disabled

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte example
<script>
  import { Label, Input } from 'flowbite-svelte';
</script>

<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
<script>
  import { Label, Input, Helper } from 'flowbite-svelte';
</script>

<Label class="block mb-2">Your email</Label>
<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
<Helper class="text-sm mt-2">
  We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Privacy Policy </a>
  .
</Helper>
```

## Input element with icon

With the Input component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-primary-700 dark:text-primary-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-primary-700 dark:text-primary-500 hover:underline">other icon sets</a>.

```svelte example
<script>
  import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Input id="email" type="email" placeholder="name@flowbite.com">
    <Icon name="envelope-solid" slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
  </Input>
</div>
```

## Input element with addon

```svelte example
<script>
  import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <Icon name="user-circle-solid" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </InputAddon>
    <Input id="website-admin" placeholder="elonmusk" />
  </ButtonGroup>
</div>
```

## Form validation

Use the following example to apply validation styles for success and error messages.

```svelte example
<script>
  import { Label, Input, Helper } from 'flowbite-svelte';
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
  <Label for='error' color='red' class='block mb-2'>Your name</Label>
  <Input id='error' color='red' placeholder="Error input" />
  <Helper class='mt-2' color='red'><span class="font-medium">Not so well done!</span> Some error message.</Helper>
</div>
```

## Textarea

```svelte example
<script>
  import { Textarea } from 'flowbite-svelte';
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Leave a comment...'
  };
</script>

<Textarea {...textareaprops} />
```

## Select input

Get started with the default example of a select input component to get a single option selection.

```svelte example
<script>
  import { Label, Select } from 'flowbite-svelte';
  let selected;

  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
```

## MultiSelect

```svelte example class="h-80"
<script>
  import { MultiSelect } from 'flowbite-svelte';

  let selected = [];
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
  ];
</script>

<MultiSelect items={countries} bind:value={selected} />
```

## Checkbox

```svelte example class="flex flex-col gap-4"
<script>
  import { Checkbox } from 'flowbite-svelte';
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
```

## Radio buttons

```svelte example class="flex flex-col gap-4"
<script>
  import { Radio } from 'flowbite-svelte';
</script>

<Radio name="example">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
```

## File upload

```svelte example
<script>
  import { Label, Fileupload } from 'flowbite-svelte';

  let fileuploadprops = {
    id: 'user_avatar'
  };

  let fileuploadprops2 = {
    id: 'user_avatar2'
  };
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
```

## Toggle Switch

```svelte example class="flex flex-col gap-2"
<script>
  import { Toggle } from 'flowbite-svelte';
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Forms](https://flowbite.com/docs/components/forms/)
