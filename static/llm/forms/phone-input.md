# Svelte PhoneInput - Flowbite


The phone number input component can be used to set a phone number inside a form field by using the native type="tel" attribute and also use a dropdown menu to select the country code.

The examples are built with the utility classes from Tailwind CSS and they are fully responsive, dark mode compatible and support RTL layouts and can be used for any type of web project.

## Setup

```svelte
<script lang="ts">
  import { PhoneInput, Label, Helper } from "flowbite-svelte";
</script>
```

## Default phone input

Use this component to set a phone number inside an input field.

```svelte
<script lang="ts">
  import { PhoneInput, Label, Helper } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm">
  <Label for="phone-input" class="mb-2 text-sm">Phone number:</Label>
  <PhoneInput aria-describedby="helper-text-explanation" id="phone-input" placeholder="123-456-7890" required />
  <Helper class="mt-2 text-sm">Select a phone number that matches the format.</Helper>
</form>
```

## Phone input country code

This example can be used to select the country code from a dropdown menu and set the phone number inside an input field.

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
  <div class="flex">
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

## Floating label input

Set a phone number inside an input field with a floating label inspired by Material UI from Google.

```svelte
<script lang="ts">
  import { PhoneInput } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-xs">
  <PhoneInput phoneType="floating" aria-describedby="helper-text-explanation" id="floating-phone-number" placeholder=" " required />
</form>
```

## Verification code input

Use this example to send a verification code to the user’s phone number for authentication.

```svelte
<script lang="ts">
  import { PhoneInput, Label, Dropdown, DropdownItem, Helper, Button } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";
</script>

<form class="mx-auto max-w-sm">
  <div class="flex">
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
    <Label for="phone-input" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</Label>
    <div class="relative w-full">
      <PhoneInput phoneIcon={false} placeholder="123-456-7890" required phoneType="countryCode" />
    </div>
  </div>
  <Helper class="mt-2 text-sm">We will send you an SMS with a verification code.</Helper>
  <Button class="my-2 w-full text-sm">Send verification code</Button>
</form>
```

## Phone number select

Use this example to select one of your saved phone numbers from an application with a copy-paste feature.

```svelte
<script lang="ts">
  import { Label, ButtonGroup, Select, Clipboard, Tooltip, Helper, A } from "flowbite-svelte";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";
  let selected = $state("+1 234 456 7890");
  const phonenumbers = [
    { value: "+1 234 456 7890", name: "+1 234 456 7890" },
    { value: "+1 456 234 7890", name: "+1 456 234 7890" },
    { value: "+1 432 621 3163", name: "+1 432 621 3163" }
  ];
</script>

<form class="mx-auto max-w-sm">
  <div class="mb-2 flex items-center justify-between">
    <Label for="phone-numbers" class="text-sm font-medium text-gray-900 dark:text-white">Primary phone number:</Label>
    <A href="/">Manage numbers</A>
  </div>

  <ButtonGroup class="flex">
    <div class="relative w-full">
      <Select id="phone-numbers" classes={{ select: "rounded-none rounded-s-lg border-r-0" }} items={phonenumbers} bind:value={selected} aria-describedby="helper-text-explanation" />
    </div>
    <Clipboard
      color="alternative"
      bind:value={selected}
      class="z-10 inline-flex shrink-0 items-center rounded-e-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
    >
      {#snippet children(success)}
        <Tooltip class="whitespace-nowrap">{success ? "Copied" : "Copy to clipboard"}</Tooltip>
        {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
      {/snippet}
    </Clipboard>
  </ButtonGroup>
  <Helper id="helper-text-explanation" class="mt-2 text-sm">Please set your primary phone number.</Helper>
</form>
```

## Authentication form

Use this example to authenticate users with a login form using a phone number instead of an email address.

```svelte
<script lang="ts">
  import { PhoneInput, Label, Dropdown, DropdownItem, Button, Input, Checkbox, A } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";
</script>

<form class="mx-auto max-w-sm">
  <Label for="phone-input" class="mb-2">Phone number:</Label>
  <div class="flex">
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
  <div class="mt-4">
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" name="password" id="password" placeholder="••••••••" required />
  </div>
  <div class="mt-4 mb-4 flex items-center">
    <Checkbox id="terms" aria-describedby="terms" class="h-4 w-4" required />
    <Label for="terms">I accept the <A href="/">Terms and Conditions</A></Label>
  </div>
  <Button type="submit" class="mb-2 w-full">Sign Up</Button>
</form>
```

## Advanced phone verification

Use this example to verify a phone number via SMS or phone call using a dropdown component.

```svelte
<script lang="ts">
  import { PhoneInput, Label, Dropdown, DropdownItem, Button } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";
</script>

<form class="mx-auto max-w-sm">
  <div class="mt-2 flex">
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
    <PhoneInput phoneIcon={false} placeholder="123-456-7890" required phoneType="countryCode" classes={{ input: "rounded-none border-r-0" }} />
    <label for="phone-input" class="sr-only">Phone number:</label>
    <button
      id="dropdown-verification-option-button"
      data-dropdown-toggle="dropdown-verification-option"
      class="z-10 inline-flex shrink-0 items-center rounded-e-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      type="button"
    >
      Send SMS <svg class="ms-2.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>
    <Dropdown simple triggeredBy="#dropdown-verification-option-button">
      <DropdownItem class="flex items-center">Send SMS</DropdownItem>
      <DropdownItem class="flex items-center">Call</DropdownItem>
    </Dropdown>
  </div>
  <Button type="submit" class="mt-4 mb-2 w-full ">Activate account</Button>
</form>
```

## Classes

The PhoneInput component provides customizable styling through six distinct class slots: `defaultDiv` for the icon container positioning, `phonesvg` for the phone icon styling, `defaultInput` for the standard input field appearance, `floatingSpan` for floating label positioning, `floatingInput` for the floating variant input styling, and `labelFloating` for animated label transitions. Each class can be overridden using the classes prop to customize the component's appearance.

```svelte
<script lang="ts">
  import { PhoneInput } from "flowbite-svelte";
</script>

<PhoneInput aria-describedby="helper-text-explanation" id="phone-input" placeholder="123-456-7890" required classes={{ input: "border-blue-500", div: "ps-4" }} />
```

## See also

<Seealso links={relatedLinks} />

## Component data

### PhoneInput

#### Types

[PhoneInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L834)

#### Props

- children
- phoneIcon: true
- pattern: "[0-9]{3


## References

- [Flowbite Phone Input](https://flowbite.com/docs/forms/phone-input/)
