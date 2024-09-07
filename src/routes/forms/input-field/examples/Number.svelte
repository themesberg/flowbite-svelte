<script lang="ts">
  import { Input, Label } from '$lib';
  let value = $state(5);
</script>

<Label class="mb-4 space-y-2">
  <span>Your lucky number</span>
  <Input type="number" bind:value />
</Label>

<p>Value: {value}</p>
<p>Type of value: {typeof value}</p>