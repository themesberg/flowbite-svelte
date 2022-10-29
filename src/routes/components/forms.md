---
layout: formLayout
title: Svelte Forms - Flowbite
breadcrumb_title: Forms
dir: Components
---


<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s | Flowbite-Svelte"
  description={title}
  facebook={{
  appId: '453670756870545'
}}
openGraph={{
  type: 'website',
  url:`https://flowbite-svelte.com/${breadcrumb_title.toLowerCase().replaceAll(' ', '-')}`,
    title: `${title}`,
    description: `${title}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
        width: 800,
        height: 600,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${title}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
    imageAlt: `${title}`
  }}
/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
import { MetaTags } from 'svelte-meta-tags';
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
  import { props as items } from '../props/Input.json'
  import { props as items2 } from '../props/Label.json'
  import { props as items3 } from '../props/Helper.json'
  import { props as items5 } from '../props/Fileupload.json'
  import { props as items6 } from '../props/Textarea.json'
  import { props as items7 } from '../props/Select.json'
  import { props as items8 } from '../props/Checkbox.json'
  import { props as items9 } from '../props/Radio.json'
  import { props as items10 } from '../props/Toggle.json'

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite</CompoDescription>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

<Htwo label="Input Sizes" />

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

```svelte example
<script>
  import { Label, Input } from 'flowbite-svelte'
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

```svelte example
<script>
  import { Label, Input } from 'flowbite-svelte'
</script>

<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

<Htwo label="Helper text" />

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte example
<script>
  import { Label, Input, Helper } from 'flowbite-svelte'
</script>

<Label class='block mb-2' >Your email</Label>
<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com"/>
<Helper class='text-sm mt-2'>We’ll never share your details. Read our <a href="/" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</Helper>
```

<Htwo label="Input element with icon" />

With the Input component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-blue-700 dark:text-blue-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-blue-700 dark:text-blue-500 hover:underline">other icon sets</a>.

```svelte example
<script>
  import { Label, Input } from 'flowbite-svelte'
</script>

<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Input id="email" type="email" placeholder="name@flowbite.com">
  <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </Input>
</div>
```

<Htwo label="Input element with addon" />

```svelte example
<script>
  import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte'
</script>

<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    </InputAddon>
    <Input id="website-admin" placeholder="elonmusk" />
  </ButtonGroup>
</div>
```

<Htwo label="Form validation" />

Use the following example to apply validation styles for success and error messages.

```svelte example
<script>
  import { Label, Input, Helper } from 'flowbite-svelte'
</script>

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

```svelte example
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

```svelte example
<script>
  import { Label, Select } from 'flowbite-svelte'
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

```svelte example class="flex flex-col gap-4"
<script>
  import { Checkbox } from 'flowbite-svelte'
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked >Checked state</Checkbox>
```

<Htwo label="Radio buttons" />

```svelte example class="flex flex-col gap-4"
<script>
  import { Radio } from 'flowbite-svelte'
</script>

<Radio name="example">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
```

<Htwo label="File upload" />

```svelte example
<script>
  import { Label, Fileupload } from 'flowbite-svelte'

  let fileuploadprops = {
    id : 'user_avatar'
  }

  let fileuploadprops2 = {
    id : 'user_avatar2'
  }
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
```

<Htwo label="Toggle Switch" />

```svelte example class="flex flex-col gap-2"
<script>
  import { Toggle } from 'flowbite-svelte'
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.

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

