<script lang="ts">
  import { PhoneInput, Input } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm space-y-2">
  <Input disabled type="number" id="number-input" aria-describedby="helper-text-explanation" placeholder="90210" required />

  <PhoneInput classes={{ input: "rounded-lg" }} placeholder="123-456-7890" disabled phoneType="countryCode" />
</form>
