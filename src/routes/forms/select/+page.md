---
layout: formLayout
---

<script>
import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
import { Label, Dropdown, DropdownItem, Select, Breadcrumb, BreadcrumbItem, Badge, CloseButton, ChevronDown} from '$lib'
import { Us, De, It, Cn } from 'svelte-flag-icons'

import componentProps from '../../props/Select.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let selected;
let selectedArr = ['ca'];

let countries = [
  {value:"us", name: "United States"},
  {value:"ca", name: "Canada"},
  {value:"fr", name: "France"},
]

let states = [
  {value:"CA", name:"California"},
  {value:"TX", name:"Texas"},
  {value:"WH", name:"Washinghton"},
  {value:"FL", name:"Florida"},
  {value:"VG", name:"Virginia"},
  {value:"GE", name:"Georgia"},
  {value:"MI", name:"Michigan"}
]

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/forms/" rel="external">Forms</BreadcrumbItem>
  <BreadcrumbItem>Select</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Select</h1>

<CompoDescription>Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants</CompoDescription>

<ExampleDiv>
<GitHubSource href="forms/Select.svelte">Select</GitHubSource>
</ExampleDiv>

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

<Htwo label="Setup" />

```html
<script>
  import { Select } from 'flowbite-svelte'
</script>
```

<Htwo label="Select input example" />

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
<!--
<Htwo label="Multiple options" />

Apply the multiple attribute to the select component to allow users to select one or more options.

TODO: Select with `multiple` prop and wrapped in component causes issues in Svelte.
TODO: This is similar to the checkbox' `bind:group` issue.

<ExampleDiv>
<Label >Select options
    <Select multiple items={countries} bind:selected={selectedArr}/>
</Label>
</ExampleDiv>

```html
<script>
  let selectedArr = [];
</script>

<Label >Select options
    <Select multiple items={countries} bind:selected={selectedArr} />
</Label>

Selected: {selectedArr}
```
-->

<Htwo label="Disabled state" />

Apply the disable state to the select component to disallow the selection of new options.

<ExampleDiv>
<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
</ExampleDiv>

```html
<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
```

<Htwo label="Underline select" />

Use the underline style for the select component as an alternative appearance.

<ExampleDiv>
  <Label for="select-underline" class="sr-only">Underline select</Label>
  <Select id="select-underline" underline class="mt-2" items={countries} />
</ExampleDiv>

```html
  <Label for="select-underline" class="sr-only">Underline select</Label>
  <Select id="select-underline" underline class="mt-2" items={countries} />
```

<Htwo label="Select with dropdown" />

Use this example if you want to create a multi-level dropdown and select component combination.

<ExampleDiv>
  <div class="flex">
    <Dropdown>
      <button slot="trigger" id="states-button" data-dropdown-toggle="dropdown-states" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        <Us size="18" class="mr-2"/>
        USA 
        <ChevronDown size="14" class="ml-2"/>
      </button>
      <DropdownItem class="flex items-center">
        <Us size="16" class="mr-2"/>
        United States
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <De size="16" class="mr-2"/>
        Germany
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <It size="16" class="mr-2"/>
        Italy
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <Cn size="16" class="mr-2"/>
        China
      </DropdownItem>
    </Dropdown>
    <Select items={states} placeholder="Choose the state" class="!rounded-l-none"/>
  </div>
</ExampleDiv>

```html
<script>
import { Us, De, It, Cn } from 'svelte-flag-icons'
</script>

<div class="flex">
    <Dropdown>
      <button slot="trigger" id="states-button" data-dropdown-toggle="dropdown-states" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        <Us size="18" class="mr-2"/>
        USA 
        <ChevronDown size="14" class="ml-2"/>
      </button>
      <DropdownItem class="flex items-center">
        <Us size="16" class="mr-2"/>
        United States
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <De size="16" class="mr-2"/>
        Germany
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <It size="16" class="mr-2"/>
        Italy
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <Cn size="16" class="mr-2"/>
        China
      </DropdownItem>
    </Dropdown>
    <Select items={states} placeholder="Choose the state" class="!rounded-l-none"/>
  </div>
```

<Htwo label="Sizes" />

Get started with the small, default, and large sizes for the select component from the example below.

<ExampleDiv>
  <Label for="select-sm" class="mb-2">Small select</Label>
  <Select id="select-sm" size="sm" items={countries} class="mb-6"/>
  <Label for="select-md" class="mb-2">Default select</Label>
  <Select id="select-md" size="md" items={countries} class="mb-6"/>
  <Label for="select-lg" class="mb-2">Large select</Label>
  <Select id="select-lg" size="lg" items={countries} class="mb-6"/>
  <p class="my-6">  </p>
  <Label for="select-sm" class="sr-only">Underline small select</Label>
  <Select id="select-sm" underline size="sm" items={countries} class="mb-6"/>
  <Label for="select-md" class="sr-only">Underline default select</Label>
  <Select id="select-md" underline size="md" items={countries} class="mb-6"/>
  <Label for="select-lg" class="sr-only">Underline large select</Label>
  <Select id="select-lg" underline size="lg" items={countries} class="mb-6"/>
</ExampleDiv>

```html
<Label for="select-sm" class="mb-2">Small select</Label>
<Select id="select-sm" size="sm" items={countries} class="mb-6"/>
<Label for="select-md" class="mb-2">Default select</Label>
<Select id="select-md" size="md" items={countries} class="mb-6"/>
<Label for="select-lg" class="mb-2">Large select</Label>
<Select id="select-lg" size="lg" items={countries} class="mb-6"/>
<p class="my-6"></p>
<Label for="select-sm" class="sr-only">Underline small select</Label>
<Select id="select-sm" underline size="sm" items={countries} class="mb-6"/>
<Label for="select-md" class="sr-only">Underline default select</Label>
<Select id="select-md" underline size="md" items={countries} class="mb-6"/>
<Label for="select-lg" class="sr-only">Underline large select</Label>
<Select id="select-lg" underline size="lg" items={countries} class="mb-6"/>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:input</Badge>
</div>
