<script lang="ts">
  import { PhoneInput } from "$lib";

  let phoneValue = $state("");
</script>

<PhoneInput id="bound-phone" name="phone" bind:value={phoneValue} placeholder="Enter phone" data-testid="bound-input" />

<div data-testid="display-value">{phoneValue}</div>
