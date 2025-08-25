<script lang="ts">
  import { Input, Label } from "flowbite-svelte";
</script>

<form class="mx-auto max-w-sm">
  <Label for="number-input">Select a number:</Label>
  <Input type="number" id="number-input" aria-describedby="helper-text-explanation" placeholder="90210" required />
</form>
