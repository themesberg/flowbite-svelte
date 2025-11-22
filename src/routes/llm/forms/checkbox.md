# Svelte Checkbox - Flowbite


The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants.

## Setup

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>
```

## Checkbox examples

Use this default example of a checbkox element in a checked, unchecked and indeterminate state.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
<Checkbox indeterminate>Indeterminate state</Checkbox>
```

## Disabled state

This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<Checkbox disabled>Disabled checkbox</Checkbox>
<Checkbox disabled checked>Disabled checked</Checkbox>
<Checkbox disabled indeterminate>Disabled indeterminate</Checkbox>
```

## Alternative syntax

If you need separate control over the label and the checkbox you can use the verbose syntax, but then you need to take care about aligning manually.

```svelte
<script lang="ts">
  import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow } from "flowbite-svelte";
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
      <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
      <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Checkbox classes={{ div: "ms-2" }} />
</Label>
```

## Checkbox with a link

Use this example if you want to add an anchor link inside the label of the checkbox component.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<Checkbox>
  I agree with the
  <a href="/" class="text-primary-600 dark:text-primary-500 ms-1 hover:underline">terms and conditions</a>
  .
</Checkbox>
```

## Helper text

Get started with this example if you want to add a secondary helper text for the checkbox component.

```svelte
<script lang="ts">
  import { Checkbox, Helper } from "flowbite-svelte";
</script>

<Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>
<Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
```

## Bordered

Use this example of a checkbox inside a card element to enable a larger area of clicking activation.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<div class="rounded-sm border border-gray-200 dark:border-gray-700">
  <Checkbox classes={{ div: "w-full p-4" }}>Default radio</Checkbox>
</div>
<div class="rounded-sm border border-gray-200 dark:border-gray-700">
  <Checkbox checked classes={{ div: "w-full p-4" }}>Checked state</Checkbox>
</div>
```

## Checkbox list group

Use this example to show a list of checkbox items grouped inside a card.

```svelte
<script lang="ts">
  import { Checkbox, Listgroup } from "flowbite-svelte";
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<Listgroup class="w-48">
  <li><Checkbox classes={{ div: "p-3" }}>svelte</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>Vue JS</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>React</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>Angular</Checkbox></li>
</Listgroup>
```

You can use the internal loop to render a list of `CheckboxItem`s.

```svelte
<script lang="ts">
  import { Checkbox, Listgroup } from "flowbite-svelte";
  let choices = [
    { value: "svelte", label: "svelte" },
    { value: "vue", label: "Vue JS" },
    { value: "react", label: "React", checked: true },
    { value: "angular", label: "Angular" }
  ];
  let group = $state([]);
</script>

<p class="my-2">Choices: {group.join(", ")}</p>
<Listgroup class="w-48">
  <Checkbox bind:group {choices} classes={{ div: "p-3" }} />
</Listgroup>
```

## Horizontal list group

Use this example to show a list of checkbox items inside a card horizontally.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
  <li class="w-full"><Checkbox classes={{ div: "p-3" }}>Svelte</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ div: "p-3" }}>Vue JS</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ div: "p-3" }}>React</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ div: "p-3" }}>Angular</Checkbox></li>
</ul>
```

## Checkbox dropdown

Use this example to show a list of checkbox items inside a dropdown menu.

```svelte
<script lang="ts">
  import { Dropdown, DropdownItem, DropdownGroup, Checkbox, Button, Search } from "flowbite-svelte";
  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";
</script>

<Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown>
  <div class="p-3">
    <Search size="md" />
  </div>
  <DropdownGroup class="h-48 overflow-y-auto">
    <DropdownItem>
      <Checkbox>Robert Gouth</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Jese Leos</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox checked>Bonnie Green</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Jese Leos</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Robert Gouth</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Bonnie Green</Checkbox>
    </DropdownItem>
  </DropdownGroup>
  <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
    <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
  </a>
</Dropdown>
```

## Inline layout

You can align the checkbox elements horizontally by using a wrapper tag and applying the flex class.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<div class="flex gap-3">
  <Checkbox>Inline 1</Checkbox>
  <Checkbox>Inline 2</Checkbox>
  <Checkbox checked>Inline checked</Checkbox>
  <Checkbox disabled>Inline disabled</Checkbox>
</div>
```

You can use the property `inline` as the alternative.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<Checkbox inline classes={{ div: "me-2" }}>Inline 1</Checkbox>
<Checkbox inline classes={{ div: "me-2" }}>Inline 2</Checkbox>
<Checkbox inline classes={{ div: "me-2" }} checked>Inline checked</Checkbox>
<Checkbox inline classes={{ div: "me-2" }} disabled>Inline disabled</Checkbox>
```

## Colors

```svelte
<script lang="ts">
  import { Checkbox, Label } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-4 sm:flex-row">
  <Checkbox checked color="red">Red</Checkbox>
  <Checkbox checked color="green">Green</Checkbox>
  <Checkbox checked color="purple">Purple</Checkbox>
  <Checkbox checked color="teal">Teal</Checkbox>
  <Checkbox checked color="yellow">Yellow</Checkbox>
  <Checkbox checked color="orange">Orange</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
</div>
```

## CheckboxButton

The special case component - `CheckboxButton` - is the `Checkbox` with the [Button](/docs/components/buttons) look and feel. It can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Checkbox` for behaviour.

```svelte
<script lang="ts">
  import { ButtonGroup, CheckboxButton } from "flowbite-svelte";
  import { AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from "flowbite-svelte-icons";
  let group = $state([]);
</script>

<div>
  <CheckboxButton bind:group value="Apple"><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
  <CheckboxButton bind:group value="Facebook"><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
  <CheckboxButton bind:group value="Discord"><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
  <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
</div>

<ButtonGroup>
  <CheckboxButton bind:group value="Apple"><AppleSolid class="h-6 w-6" />Apple</CheckboxButton>
  <CheckboxButton bind:group value="Facebook"><FacebookSolid class="h-6 w-6" />Facebook</CheckboxButton>
  <CheckboxButton bind:group value="Discord"><DiscordSolid class="h-6 w-6" />Discord</CheckboxButton>
  <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="h-6 w-6" />Dropbox</CheckboxButton>
</ButtonGroup>
```

## Advanced layout

Use this example of an advanced layout of checkbox elements where the label parent element can be styled when the checkbox is checked.

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
  import React from "$icons/React.svelte";
  import Vue from "$icons/Vue.svelte";
  import Angular from "$icons/Angular.svelte";
</script>

<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid w-full gap-6 md:grid-cols-3">
  <Checkbox custom>
    <div
      class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
      <React />
      <div class="w-full text-lg font-semibold">React Js</div>
      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div
      class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
      <Vue />
      <div class="w-full text-lg font-semibold">Vue Js</div>
      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div
      class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
      <Angular />
      <div class="w-full text-lg font-semibold">Angular</div>
      <div class="w-full text-sm">A TypeScript-based web application framework.</div>
    </div>
  </Checkbox>
</div>
```

## Group variable

```svelte
<script lang="ts">
  import { Button, Checkbox } from "flowbite-svelte";
  let choices = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" }
  ];
  let group = ["2", "3"];
</script>

<div class="flex gap-2">
  <Checkbox name="flavours" {choices} bind:group />
</div>
<div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">Group: {group}</div>
<Button onclick={() => (group.length = 0)}>Clear</Button>
```

## Component data

### Checkbox

#### Types

[CheckboxProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L717)

#### Props

- children
- color: "primary"
- custom
- inline
- tinted
- rounded
- group: $bindable([])
- choices: []
- checked: $bindable(false)
- classes
- class: className
- divClass
- disabled
- value
- labelProps: {


## References

- [Flowbite Checkbox](https://flowbite.com/docs/forms/checkbox/)
