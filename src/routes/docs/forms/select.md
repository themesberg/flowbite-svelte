---
layout: componentLayout
title: Svelte Select - Flowbite
breadcrumb_title: Svelte Select
component_title: Select
dir: Forms
description: Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants
---

<script>
import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
import { Badge, A, Kbd, ArrowKeyDown, ArrowKeyUp } from '$lib'
const components = 'Select, MultiSelect'
</script>

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Select } from 'flowbite-svelte';
</script>
```

## Select input example

Get started with the default example of a select input component to get a single option selection.

```svelte example
<script>
  import { Select, Label } from 'flowbite-svelte';
  let selected = '';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'de', name: 'Germany' },
    { value: 'fr', name: 'France', disabled: true },
  ];
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
```

## Disabled state

Apply the disable state to the select component to disallow the selection of new options.

```svelte example
<script>
  import { Select, Label } from 'flowbite-svelte';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
```

## Underline select

Use the underline style for the select component as an alternative appearance.

```svelte example
<script>
  import { Select, Label } from 'flowbite-svelte';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<Label for="select-underline" class="sr-only">Underline select</Label>
<Select id="select-underline" underline class="mt-2" items={countries} />
```

## Select with dropdown

Use this example if you want to create a multi-level dropdown and select component combination.

```svelte example class="h-64"
<script>
  import { Select, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import Usa from '../../utils/icons/Usa.svelte';
  import Germany from '../../utils/icons/Germany.svelte';
  import Italy from '../../utils/icons/Italy.svelte';
  import China from '../../utils/icons/China.svelte';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
  let states = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];
</script>

<div class="flex">
  <button id="states-button" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
    <Usa />
    USA
    <ChevronDownOutline class="w-6 h-6 ms-2" />
  </button>
  <Dropdown triggeredBy="#states-button">
    <DropdownItem class="flex items-center">
      <Usa />
      United States
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Germany />
      Germany
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Italy />
      Italy
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <China />
      China
    </DropdownItem>
  </Dropdown>
  <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />
</div>
```

## Sizes

Get started with the small, default, and large sizes for the select component from the example below.

```svelte example
<script>
  import { Select, Label } from 'flowbite-svelte';
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<Label for="select-sm" class="mb-2">Small select</Label>
<Select id="select-sm" size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="mb-2">Default select</Label>
<Select id="select-md" size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="mb-2">Large select</Label>
<Select id="select-lg" size="lg" items={countries} class="mb-6" />
<p class="my-6" ></p>
<Label for="select-sm" class="sr-only">Underline small select</Label>
<Select id="select-sm" underline size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="sr-only">Underline default select</Label>
<Select id="select-md" underline size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="sr-only">Underline large select</Label>
<Select id="select-lg" underline size="lg" items={countries} class="mb-6" />
```

## Custom options

If you want custom options, put them directly inside the component and leave the `items` prop unset. Furthermore, if the default placeholder is not what you want, set the `placeholder` prop to `""`.

```svelte example
<script>
  import { Select, Label } from 'flowbite-svelte';
  let selected;
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>

<Label for="countries">Select an option</Label>
<Select id="countries" class="mt-2" bind:value={selected} placeholder="">
  <option selected value="all">All</option>

  {#each countries as { value, name }}
    <option {value}>{name}</option>
  {/each}
</Select>
```

## MultiSelect

```svelte example hideOutput
<script>
  import { MultiSelect } from 'flowbite-svelte';
</script>
```

### Basic example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

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

<MultiSelect items={countries} bind:value={selected} size="lg" />
```

### Placeholder

```svelte example class="h-80"
<script>
  import { MultiSelect } from 'flowbite-svelte';

  let placeholder = 'placeholder text';
  let selected = [];
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
  ];
</script>

<MultiSelect items={countries} bind:value={selected} size="lg" placeholder={placeholder} />
```

### Disabled select

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

<MultiSelect disabled items={countries} bind:value={selected} size="lg" />
```

### Disabled option

```svelte example class="h-80"
<script>
  import { MultiSelect } from 'flowbite-svelte';

  let selected = [];
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'jp', name: 'Japan', disabled: true },
    { value: 'en', name: 'England', disabled: true }
  ];
</script>

<MultiSelect items={countries} bind:value={selected} size="lg" />
```

### Pre-select values

```svelte example class="h-96"
<script>
  import { MultiSelect } from 'flowbite-svelte';

  let countries = [
    { value: 'us', name: 'United States', color: 'indigo' },
    { value: 'ca', name: 'Canada', color: 'green' },
    { value: 'fr', name: 'France', color: 'blue' },
    { value: 'jp', name: 'Japan', color: 'red' },
    { value: 'en', name: 'England', color: 'yellow' }
  ];
  let selected = ['us', 'fr'];
</script>

<MultiSelect items={countries} bind:value={selected} />
```

### Keyboard Usage

Some keyboard interaction was implemented. Use <Kbd class="p-1.5"><ArrowKeyUp class="inline-block"/></Kbd>/<Kbd class="p-1.5"><ArrowKeyDown class="inline-block"/></Kbd> to highlight an item, then press <Kbd class="p-1.5">Enter</Kbd> or <Kbd class="p-1.5">SpaceBar</Kbd> to toggle the highlighted item. Press <Kbd class="p-1.5">Esc</Kbd> to close the selection pop-up.

### Customization

To customize the look and feel use the `slot` to insert inner [`Badge`](/docs/components/badge) component.

Remember to connect the `clear` slot's prop to trigger option removal.

```svelte example class="h-96"
<script>
  import { MultiSelect, Badge } from 'flowbite-svelte';

  let selected = [];
  let countries = [
    { value: 'us', name: 'United States', color: 'indigo' },
    { value: 'ca', name: 'Canada', color: 'green' },
    { value: 'fr', name: 'France', color: 'blue' },
    { value: 'jp', name: 'Japan', color: 'red' },
    { value: 'en', name: 'England', color: 'yellow' }
  ];
</script>

<MultiSelect items={countries} bind:value={selected} let:item let:clear>
  <Badge color={item.color} dismissable params={{ duration: 100 }} on:close={clear}>
    {item.name}
  </Badge>
</MultiSelect>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Select styling

- Use the `class` prop to overwrite the select tag.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Select](https://flowbite.com/docs/forms/select/)

<GitHubCompoLinks {components}/>
