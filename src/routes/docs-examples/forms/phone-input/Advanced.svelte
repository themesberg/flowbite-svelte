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
      class="rounded-s-base border-default-medium bg-neutral-secondary-medium text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary z-10 inline-flex shrink-0 items-center border border-r-0 px-4 py-2 text-center text-sm font-medium focus:ring-4 focus:outline-none"
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
    <PhoneInput phoneIcon={false} placeholder="123-456-7890" required phoneType="countryCode" classes={{ input: "rounded-none rounded-e-none border-r-0" }} />
    <button
      id="dropdown-verification-option-button"
      data-dropdown-toggle="dropdown-verification-option"
      class="rounded-e-base border-default-medium bg-neutral-secondary-medium text-heading hover:bg-neutral-tertiary-medium focus:ring-neutral-tertiary z-10 inline-flex shrink-0 items-center border px-4 py-2 text-center text-sm font-medium focus:ring-4 focus:outline-none"
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
