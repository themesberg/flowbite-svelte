# Svelte Floating Label - Flowbite


The floating label style was first pioneered by Google in its infamous Material UI design system and it’s basically a label tag which floats just above the input field when it is being focused or already has content inside.

On this page you will find a three different input field styles including a standard, outlined, and filled style including validation styles and sizes coded with Tailwind CSS and supported for dark mode.

## Setup

```svelte
<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>
```

## Floating label examples

Get started with the following three styles for the floating label component and use the label tag as a visual placeholder using the peer-placeholder-shown and peer-focus utility classes from Tailwind CSS.

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="floating_filled" name="floating_filled" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="floating_outlined" name="floating_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text">Floating standard</FloatingLabelInput>
</div>
```

## Clearable

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput clearable variant="filled" id="clearable_filled" name="clearable_illed" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput clearable variant="outlined" id="clearable_outlined" name="clearable_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput clearable id="clearable_standard" name="clearable_standard" type="text">Floating standard</FloatingLabelInput>
</div>
```

## Event

Use `clearable` and `clearableOnClick` props.

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<FloatingLabelInput
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button");
  }}
  variant="filled"
  id="event_filled"
  name="event_illed"
  type="text"
>
  Floating filled
</FloatingLabelInput>
```

## Accessing FloatingLabelInput Element with elementRef

```svelte
<script lang="ts">
  import { FloatingLabelInput, Button } from "flowbite-svelte";
  let floatingRef: HTMLInputElement | undefined = $state();
</script>

<FloatingLabelInput bind:elementRef={floatingRef} variant="outlined" id="element_outlined" name="element_outlined" type="text" class="my-4">Floating filled</FloatingLabelInput>
<Button
  onclick={() => {
    floatingRef?.select();
  }}
>
  Select
</Button>
```

## Combobox

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
  const carMakers = [
    "Toyota",
    "Ford",
    "Honda",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Lexus",
    "Audi",
    "Jeep",
    "Dodge",
    "Ram",
    "GMC",
    "Cadillac",
    "Chrysler",
    "Buick",
    "Infiniti",
    "Acura",
    "Volvo",
    "Porsche",
    "Jaguar",
    "Land Rover",
    "Mini",
    "Mitsubishi",
    "Genesis",
    "Tesla",
    "Fiat",
    "Peugeot",
    "Renault",
    "Alfa Romeo",
    "Citroën",
    "SEAT",
    "Skoda",
    "Saab",
    "Suzuki",
    "Isuzu",
    "Scion",
    "Hummer",
    "Lincoln",
    "Opel",
    "Daewoo",
    "Rivian",
    "Lucid",
    "Polestar",
    "Bugatti",
    "Maserati",
    "Ferrari",
    "Lamborghini",
    "Bentley",
    "Rolls-Royce",
    "Aston Martin",
    "McLaren",
    "Pagani",
    "Koenigsegg",
    "Maybach",
    "Tata",
    "Mahindra",
    "Perodua",
    "Proton",
    "Chery",
    "Geely",
    "Great Wall",
    "BYD",
    "NIO",
    "XPeng",
    "VinFast",
    "Zotye",
    "FAW",
    "BAIC",
    "Lancia",
    "Dacia",
    "Cupra",
    "Roewe",
    "Holden",
    "Smart"
  ];
</script>

<FloatingLabelInput variant="filled" clearable id="floating_filled" data={carMakers} name="floating_filled" type="text">Type to search cars</FloatingLabelInput>
```

## Disabled state

Apply the disabled attribute to the input fields to disallow the user from changing the content.

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="disabled_filled" name="disabled_filled" type="text" disabled>Disabled filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="disabled_outlined" name="disabled_outlined" type="text" disabled>Disabled outlined</FloatingLabelInput>
  <FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" disabled>Disabled standard</FloatingLabelInput>
</div>
```

## Validation

Use the following examples of input validation for the success and error messages by applying the validation text below the input field and using the green or red color classes from Tailwind CSS.

```svelte
<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>

<!-- Success messages -->
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="green" variant="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text">Filled success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" variant="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text">Outlined success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" variant="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text">Standard success</FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
</div>
<!-- Error messages -->
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="red" variant="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text">Filled error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" variant="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text">Outlined error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" variant="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text">Standard error</FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
</div>
```

## Sizes

Use the small and default sizes of the floating label input fields from the following example.

```svelte
<script lang="ts">
  import { FloatingLabelInput } from "flowbite-svelte";
</script>

<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput size="small" variant="filled" id="small_filled" name="small_filled" type="text">Small filled</FloatingLabelInput>
  <FloatingLabelInput size="small" variant="outlined" id="small_outlined" name="small_outlined" type="text">Small outlined</FloatingLabelInput>
  <FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text">Small standard</FloatingLabelInput>
</div>
<div class="grid items-end gap-6 md:grid-cols-3">
  <FloatingLabelInput variant="filled" id="default_filled" name="default_filled" type="text">Default filled</FloatingLabelInput>
  <FloatingLabelInput variant="outlined" id="default_outlined" name="default_outlined" type="text">Default outlined</FloatingLabelInput>
  <FloatingLabelInput id="default_standard" name="default_standard" type="text">Default standard</FloatingLabelInput>
</div>
```

## Helper text

Add a helper text in addition to the label if you want to show more information below the input field.

```svelte
<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>

<FloatingLabelInput variant="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text">Floating helper</FloatingLabelInput>
<Helper class="pt-2">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">Community Guidelines</a>
  .
</Helper>
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Floating Label](https://flowbite.com/docs/forms/floating-label/)
