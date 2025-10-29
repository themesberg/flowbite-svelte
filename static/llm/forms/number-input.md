# Svelte Number Input - Flowbite


The number input component can be used to introduce numeric values inside a form such as for a quantity field, a ZIP code, a phone number, your credit card number, and more.

## Default number input

Use this component to set a number value inside a form field by applying the type="number" attribute.

```svelte
<script lang="ts">
  import { Input, Label } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm">
  <Label for="number-input">Select a number:</Label>
  <Input type="number" id="number-input" aria-describedby="helper-text-explanation" placeholder="90210" required />
</form>
```

## Disabled

```svelte
<script lang="ts">
  import { PhoneInput, Input } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm space-y-2">
  <Input disabled type="number" id="number-input" aria-describedby="helper-text-explanation" placeholder="90210" required />

  <PhoneInput classes={{ input: "rounded-lg" }} placeholder="123-456-7890" disabled phoneType="countryCode" />
</form>
```

## ZIP code input

Use this example with an icon and helper text to set a ZIP code value inside a form field by also applying the pattern attribute to validate the input using a regular expression for a 5 digit number.

```svelte
<script lang="ts">
  import { Input, Label, P } from "flowbite-svelte";
  import { MapPinAltSolid } from "flowbite-svelte-icons";
  const zipPattern = "^\\d{5}(-\\d{4})?$";
</script>

<form class="mx-auto max-w-sm">
  <Label class="mb-2 text-sm" for="zip-input">ZIP code:</Label>
  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
      <MapPinAltSolid />
    </div>
    <Input
      type="text"
      pattern={zipPattern}
      title="Enter ZIP code: 12345 or 12345-6789"
      inputmode="numeric"
      placeholder="12345 or 12345-6789"
      class="ps-10"
      aria-describedby="helper-text-explanation"
      required
    />
  </div>
  <P id="helper-text-explanation" class="mt-2 text-sm">Enter either a standard 5-digit ZIP code or the extended ZIP+4.</P>
</form>
```

## Phone number

Use this example to set a phone number inside a form field and a dropdown menu to select the country code.

```svelte
<script lang="ts">
  import { PhoneInput, Label, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";
</script>

<form class="mx-auto max-w-sm">
  <div class="flex items-center">
    <button
      id="states-button"
      class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-r-0 border-gray-300 bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-hidden dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      type="button"
    >
      <Usa />
      +1
      <ChevronDownOutline class="ms-2 h-6 w-6" />
    </button>
    <Dropdown simple triggeredBy="#states-button">
      <DropdownItem class="flex items-center">
        <Usa />
        United States (+1)
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <Germany />
        Germany (+49)
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <Italy />
        Italy (+39)
      </DropdownItem>
      <DropdownItem class="flex items-center">
        <China />
        China (+86)
      </DropdownItem>
    </Dropdown>
    <Label for="phone-input" class="sr-only">Phone number:</Label>
    <div class="relative w-full">
      <PhoneInput phoneIcon={false} placeholder="123-456-7890" required phoneType="countryCode" />
    </div>
  </div>
</form>
```

## Control buttons

Use this example with control buttons to increment and decrement the value inside the input field.

```svelte
<script lang="ts">
  import { Input, Label, P, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let quantity: number = $state(12345);
</script>

<form class="mx-auto max-w-xs">
  <Label class="mb-2 text-sm" for="quantity-input">Choose quantity:</Label>
  <div class="relative flex max-w-[8rem] items-center">
    <ButtonGroup>
      <Button type="button" id="decrement-button" onclick={() => (quantity -= 1)}>
        <MinusOutline />
      </Button>
      <Input bind:value={quantity} type="number" id="quantity-input" aria-describedby="helper-text-explanation" placeholder="999" required class="w-20 text-center" />
      <Button type="button" id="increment-button" onclick={() => (quantity += 1)}>
        <PlusOutline />
      </Button>
    </ButtonGroup>
  </div>
  <P id="helper-text-explanation" class="mt-2 text-sm">Please select a 5 digit number from 0 to 9.</P>
</form>
```

## Control buttons with icon

Use this example to also add an icon inside the input field to improve the user experience.

```svelte
<script lang="ts">
  import { Input, Label, P, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline, HomeOutline } from "flowbite-svelte-icons";
  let bedroom: number = $state(3);
  $effect(() => {
    bedroom = Math.min(5, Math.max(1, bedroom));
  });
</script>

<form class="mx-auto max-w-xs">
  <Label class="mb-2 text-sm" for="quantity_input">Choose quantity:</Label>

  <ButtonGroup class="relative">
    <Button type="button" onclick={() => (bedroom -= 1)} class="h-11 p-3">
      <MinusOutline />
    </Button>
    <Input min="1" max="5" bind:value={bedroom} type="number" id="quantity_input" aria-describedby="helper-text-explanation" placeholder=" " required class="h-11 w-28 pb-6 text-center" />
    <div class="absolute start-1/2 bottom-1 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse">
      <HomeOutline class="h-4 w-4" />
      <span>Bedrooms</span>
    </div>
    <Button type="button" onclick={() => (bedroom += 1)} class="h-11 p-3">
      <PlusOutline />
    </Button>
  </ButtonGroup>

  <P id="helper-text-explanation" class="mt-2 text-sm">Please select the number of bedrooms.</P>
</form>

>
```

## Counter input

Use this example as an alternative style to the control buttons example above.

```svelte
<script lang="ts">
  import { Input, Label, Button } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let counterInput: number = $state(12);
  $effect(() => {
    counterInput = Math.max(1, counterInput);
  });
</script>

<form class="mx-auto max-w-xs">
  <Label for="counter-input" class="mb-1 text-sm text-gray-900 dark:text-white">Choose quantity:</Label>
  <div class="relative flex items-center">
    <Button color="alternative" class="h-5 w-5 rounded p-2" onclick={() => (counterInput -= 1)}>
      <MinusOutline class="h-2.5 w-2.5" />
    </Button>
    <Input id="counter-input" type="number" class="w-12 shrink-0 border-0 bg-transparent p-0 text-center dark:bg-transparent" placeholder="" bind:value={counterInput} required />
    <Button color="alternative" class="h-5 w-5 rounded p-2" onclick={() => (counterInput += 1)}>
      <PlusOutline class="h-2.5 w-2.5" />
    </Button>
  </div>
</form>
```
