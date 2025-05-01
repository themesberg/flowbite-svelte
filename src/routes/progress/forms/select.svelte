<script lang="ts">
  import { Select, Label, MultiSelect, Dropdown, DropdownItem, Badge, type SelectOptionType } from "$lib";
  import { ChevronDownOutline, ArrowUpOutline, ArrowDownOutline } from "flowbite-svelte-icons";
  import Usa from "../../utils/icons/Usa.svelte";
  import Germany from "../../utils/icons/Germany.svelte";
  import Italy from "../../utils/icons/Italy.svelte";
  import China from "../../utils/icons/China.svelte";

  let selected = "";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "de", name: "Germany" },
    { value: "fr", name: "France", disabled: true }
  ];

  let states = [
    { value: "CA", name: "California" },
    { value: "TX", name: "Texas" },
    { value: "WH", name: "Washinghton" },
    { value: "FL", name: "Florida" },
    { value: "VG", name: "Virginia" },
    { value: "GE", name: "Georgia" },
    { value: "MI", name: "Michigan" }
  ];

  let multiSelected: string[] = [];
  let multiCountries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];

  let multiDisabledCountries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan", disabled: true },
    { value: "en", name: "England", disabled: true }
  ];

  let colorCountries: SelectOptionType<string>[] = [
    { value: "us", name: "United States", color: "indigo" },
    { value: "ca", name: "Canada", color: "green" },
    { value: "fr", name: "France", color: "blue" },
    { value: "jp", name: "Japan", color: "red" },
    { value: "en", name: "England", color: "yellow" }
  ];

  let preselected: string[] = ["us", "fr"];
  let placeholder = "placeholder text";
</script>

<h1 class="my-4 text-3xl">Select</h1>

<p>The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.</p>

<h2 class="my-4 text-2xl">Select input example</h2>

<div class="example-container my-4">
  <Label>
    Select an option
    <Select class="mt-2" items={countries} bind:value={selected} />
  </Label>
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>

<div class="example-container my-4">
  <Label for="select-disabled" class="mb-2">Disabled select</Label>
  <Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
</div>

<h2 class="my-4 text-2xl">Underline select</h2>

<div class="example-container my-4">
  <Label for="select-underline" class="sr-only">Underline select</Label>
  <Select id="select-underline" underline class="mt-2" items={countries} />
</div>

<h2 class="my-4 text-2xl">Select with dropdown</h2>

<div class="example-container my-4 h-64">
  <div class="flex">
    <button id="states-button" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-hidden dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
      <Usa />
      USA
      <ChevronDownOutline class="ms-2 h-6 w-6" />
    </button>
    <Dropdown simple triggeredBy="#states-button">
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
    <Select items={states} placeholder="Choose the state" class="rounded-s-none!" />
  </div>
</div>

<h2 class="my-4 text-2xl">Sizes</h2>

<div class="example-container my-4">
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
</div>

<h2 class="my-4 text-2xl">Custom options</h2>

<div class="example-container my-4">
  <Label for="countries">Select an option</Label>
  <Select id="countries" class="mt-2" bind:value={selected} placeholder="">
    <option selected value="all">All</option>

    {#each countries as { value, name }}
      <option {value}>{name}</option>
    {/each}
  </Select>
</div>

<h2 class="my-4 text-2xl">MultiSelect</h2>

<h3 class="my-3 text-xl">Basic example</h3>

<div class="example-container my-4 h-80">
  <MultiSelect items={multiCountries} value={multiSelected} size="lg" />
</div>

<h3 class="my-3 text-xl">Placeholder</h3>

<div class="example-container my-4 h-80">
  <MultiSelect items={multiCountries} value={multiSelected} size="lg" {placeholder} />
</div>

<h3 class="my-3 text-xl">Disabled select</h3>

<div class="example-container my-4 h-80">
  <MultiSelect disabled items={multiCountries} value={multiSelected} size="lg" />
</div>

<h3 class="my-3 text-xl">Disabled option</h3>

<div class="example-container my-4 h-80">
  <MultiSelect items={multiDisabledCountries} value={multiSelected} size="lg" />
</div>

<h3 class="my-3 text-xl">Pre-select values</h3>

<div class="example-container my-4 h-96">
  <MultiSelect items={colorCountries} value={preselected}>
    {#snippet children({ item, clear })}
      <Badge color={item.color} dismissable params={{ duration: 100 }} onclose={clear}>
        {item.name}
      </Badge>
    {/snippet}
  </MultiSelect>
</div>

<h3 class="my-3 text-xl">Keyboard Usage</h3>

<p>
  Some keyboard interaction was implemented. Use
  <span class="inline-flex items-center justify-center rounded bg-gray-200 p-1.5 dark:bg-gray-600"><ArrowUpOutline class="inline-block" /></span>
  /
  <span class="inline-flex items-center justify-center rounded bg-gray-200 p-1.5 dark:bg-gray-600"><ArrowDownOutline class="inline-block" /></span>
  to highlight an item, then press
  <span class="inline-flex items-center justify-center rounded bg-gray-200 p-1.5 dark:bg-gray-600">Enter</span>
  or
  <span class="inline-flex items-center justify-center rounded bg-gray-200 p-1.5 dark:bg-gray-600">SpaceBar</span>
  to toggle the highlighted item. Press
  <span class="inline-flex items-center justify-center rounded bg-gray-200 p-1.5 dark:bg-gray-600">Esc</span>
  to close the selection pop-up.
</p>

<h3 class="my-3 text-xl">Customization</h3>

<div class="example-container my-4 h-96">
  <MultiSelect items={colorCountries} value={multiSelected}>
    {#snippet children({ item, clear })}
      <Badge color={item.color} dismissable params={{ duration: 100 }} onclose={clear}>
        {item.name}
      </Badge>
    {/snippet}
  </MultiSelect>
</div>
