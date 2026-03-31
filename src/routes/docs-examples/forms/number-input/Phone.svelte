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
    <div class="relative w-full">
      <PhoneInput phoneIcon={false} placeholder="123-456-7890" required phoneType="countryCode" />
    </div>
  </div>
</form>
