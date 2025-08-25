<script lang="ts">
  import { Input, Label, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let counterInput: number = $state(12);
</script>

<form class="mx-auto max-w-xs">
  <Label for="counter-input" class="mb-1 block text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</Label>
  <div class="relative flex items-center">
    <Button color="alternative" id="decrement-button" class="m-0 h-5 w-5 p-4" onclick={() => (counterInput -= 1)}>
      <MinusOutline class="h-2.5 w-2.5" />
    </Button>
    <Input type="number" id="counter-input" class="m-0 w-0 w-12 shrink-0 border-0 bg-transparent p-0 text-center text-sm  font-normal text-gray-900 focus:ring-0 focus:outline-none dark:text-white" placeholder="" bind:value={counterInput} required />
    <Button color="alternative" id="increment-button" class="h-5 w-5 p-4" onclick={() => (counterInput += 1)}>
      <PlusOutline class="h-2.5 w-2.5" />
    </Button>
  </div>
</form>
