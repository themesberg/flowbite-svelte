<script>
  import { PhoneInput, Label, Helper } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm">
  <Label for="phone-input" class="mb-2 text-sm">Phone number:</Label>
  <PhoneInput aria-describedby="helper-text-explanation" id="phone-input" placeholder="123-456-7890" required />
  <Helper class="mt-2 text-sm">Select a phone number that matches the format.</Helper>
</form>
