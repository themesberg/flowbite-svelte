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
