<script>
  import { PhoneInput, Label, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "../../../../utils/icons/Usa.svelte";
  import Germany from "../../../../utils/icons/Germany.svelte";
  import Italy from "../../../../utils/icons/Italy.svelte";
  import China from "../../../../utils/icons/China.svelte";
</script>

<form class="mx-auto max-w-sm">
  <div class="flex items-center">
    <button id="states-button" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-r-0 border-gray-300 bg-gray-100 px-3 py-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-hidden dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
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
