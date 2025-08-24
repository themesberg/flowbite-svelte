<script lang="ts">
  import { Input, Label, Button, Toggle } from "flowbite-svelte";
  let isDisabled = $state(false);
  let checked: boolean = $state(false);
  const handleClick = () => {
    isDisabled = !isDisabled;
  };
</script>

<Button class="w-48" onclick={handleClick}>Disabled: {isDisabled ? "True" : "False"}</Button>

<Toggle class="mt-3" bind:checked disabled={isDisabled}>Disabled: {isDisabled}</Toggle>