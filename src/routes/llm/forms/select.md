# Svelte Select - Flowbite


The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Setup

```svelte
<script lang="ts">
  import { Select } from "flowbite-svelte";
</script>
```

## Select input example

Get started with the default example of a select input component to get a single option selection.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let selected = "";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "de", name: "Germany" },
    { value: "fr", name: "France", disabled: true }
  ];
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
```

## Clearable

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];

  let clearableSelected = $state("");
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={clearableSelected} clearable />
</Label>
```

## Event

`onClear` is a `Select`'s prop and `onchange` is Svelte's built-in event handler for the native `<select>` element.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
  let eventSelected = $state("");
</script>

<Label>
  Select an option
  <Select
    class="mt-2"
    items={countries}
    bind:value={eventSelected}
    clearable
    onClear={() => {
      alert("Clicked clear button!");
    }}
    onchange={() => {
      console.log("Changed select value:");
    }}
  />
</Label>
```

## Disabled state

Apply the disable state to the select component to disallow the selection of new options.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
```

## Underline select

Use the underline style for the select component as an alternative appearance.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-underline" class="sr-only">Underline select</Label>
<Select id="select-underline" underline class="mt-2" items={countries} />
```

## Select with dropdown

Use this example if you want to create a multi-level dropdown and select component combination.

```svelte
<script lang="ts">
  import { Select, Button, ButtonGroup, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";

  let states = [
    { value: "CA", name: "California" },
    { value: "TX", name: "Texas" },
    { value: "WH", name: "Washinghton" },
    { value: "FL", name: "Florida" },
    { value: "VG", name: "Virginia" },
    { value: "GE", name: "Georgia" },
    { value: "MI", name: "Michigan" }
  ];
</script>

<ButtonGroup class="w-full">
  <Button class="bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-500 focus:ring-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <Usa />
    USA
    <ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
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
  <Select items={states} placeholder="Choose the state" />
</ButtonGroup>
```

## Sizes

Get started with the small, default, and large sizes for the select component from the example below.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-sm" class="mb-2">Small select</Label>
<Select id="select-sm" size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="mb-2">Default select</Label>
<Select id="select-md" size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="mb-2">Large select</Label>
<Select id="select-lg" size="lg" items={countries} class="mb-6" />
<p class="my-6"></p>
<Label for="select-sm" class="sr-only">Underline small select</Label>
<Select id="select-sm" underline size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="sr-only">Underline default select</Label>
<Select id="select-md" underline size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="sr-only">Underline large select</Label>
<Select id="select-lg" underline size="lg" items={countries} class="mb-6" />
```

## Custom options

If you want custom options, put them directly inside the component and leave the `items` prop unset. Furthermore, if the default placeholder is not what you want, set the `placeholder` prop to `""`.

```svelte
<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let selected = $state();
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
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

## Accessing Select Element with elementRef

```svelte
<script lang="ts">
  import { Select, Button } from "flowbite-svelte";

  let selectRef = $state() as HTMLSelectElement;
  const options = [
    { value: "option1", name: "Option 1" },
    { value: "option2", name: "Option 2" },
    { value: "option3", name: "Option 3" }
  ];
  let selectedValue = $state("option1");
</script>

<Select bind:elementRef={selectRef} bind:value={selectedValue} items={options} class="my-4" />

<Button
  onclick={() => {
    // programmatically change the selection
    selectRef.selectedIndex = 2; // This would select Option 2
    selectedValue = "option2";
    selectRef?.focus();
    console.log(`Selected index: ${selectRef?.selectedIndex}`);
  }}
>
  Access Select
</Button>
```

## MultiSelect

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";
</script>
```

### Basic example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let multiSelected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect items={countries} value={multiSelected} size="lg" />
```

### Placeholder

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let placeholder = "placeholder text";
  let selected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect items={countries} value={selected} size="lg" {placeholder} />
```

### Disabled select

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let selected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect disabled items={countries} value={selected} size="lg" />
```

### MultiSelect Disabled Option

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let selected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan", disabled: true },
    { value: "en", name: "England", disabled: true }
  ];
</script>

<MultiSelect items={countries} value={selected} size="lg" />
```

### Pre-select values

```svelte
<script lang="ts">
  import { MultiSelect, Badge, type SelectOptionType } from "flowbite-svelte";

  let colorCountries: SelectOptionType<string>[] = [
    { value: "us", name: "United States", color: "indigo" },
    { value: "ca", name: "Canada", color: "green" },
    { value: "fr", name: "France", color: "blue" },
    { value: "jp", name: "Japan", color: "red" },
    { value: "en", name: "England", color: "yellow" }
  ];
  let preselected: string[] = ["us", "fr"];
</script>

<MultiSelect items={colorCountries} value={preselected}>
  {#snippet children({ item, clear })}
    <Badge color={item.color} dismissable params={{ duration: 100 }} onclose={clear} class="mx-0.5">
      {item.name}
    </Badge>
  {/snippet}
</MultiSelect>
```

### Keyboard Usage

Some keyboard interaction was implemented. Use <Kbd class="p-1.5"><ArrowUpOutline class="inline-block"/></Kbd>/<Kbd class="p-1.5"><ArrowDownOutline class="inline-block"/></Kbd> to highlight an item, then press <Kbd class="p-1.5">Enter</Kbd> or <Kbd class="p-1.5">SpaceBar</Kbd> to toggle the highlighted item. Press <Kbd class="p-1.5">Esc</Kbd> to close the selection pop-up.

### Customization

To customize the look and feel use the `children` snippet to insert inner [`Badge`](/docs/components/badge) component.

Remember to connect the `clear` snippet's prop to trigger option removal.

```svelte
<script lang="ts">
  import { MultiSelect, Badge, type SelectOptionType } from "flowbite-svelte";

  let selected: string[] = [];
  let countries: SelectOptionType<string>[] = [
    { value: "us", name: "United States", color: "indigo" },
    { value: "ca", name: "Canada", color: "green" },
    { value: "fr", name: "France", color: "blue" },
    { value: "jp", name: "Japan", color: "red" },
    { value: "en", name: "England", color: "yellow" }
  ];
</script>

<MultiSelect items={countries} value={selected}>
  {#snippet children({ item, clear })}
    <Badge color={item.color} dismissable params={{ duration: 100 }} onclose={clear} class="mx-0.5">
      {item.name}
    </Badge>
  {/snippet}
</MultiSelect>
```

## Component data

### Select

#### Types

[SelectProps<T>](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L897)

#### Props

- children
- items
- value: $bindable()
- elementRef: $bindable()
- underline
- size: "md"
- disabled
- placeholder: "Choose option ..."
- clearable
- clearableColor: "none"
- clearableOnClick
- onClear
- clearableSvgClass
- clearableClass
- selectClass
- class: className
- classes


## References

- [Flowbite Select](https://flowbite.com/docs/forms/select/)
