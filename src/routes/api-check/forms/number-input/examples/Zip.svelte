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
    <Input type="text" pattern={zipPattern} title="Enter ZIP code: 12345 or 12345-6789" inputmode="numeric" placeholder="12345 or 12345-6789" class="ps-10" aria-describedby="helper-text-explanation" required />
  </div>
  <P id="helper-text-explanation" class="mt-2 text-sm">Enter either a standard 5-digit ZIP code or the extended ZIP+4.</P>
</form>
