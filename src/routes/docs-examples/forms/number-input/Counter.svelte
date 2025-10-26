<script lang="ts">
  import { Input, Label, Button } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let counterInput: number = $state(12);
  $effect(() => {
    counterInput = Math.max(1, counterInput);
  });
</script>

<form class="mx-auto max-w-xs">
  <Label for="counter-input" class="mb-1 text-sm text-gray-900 dark:text-white">Choose quantity:</Label>
  <div class="relative flex items-center">
    <Button color="alternative" class="h-5 w-5 rounded p-2" onclick={() => (counterInput -= 1)}>
      <MinusOutline class="h-2.5 w-2.5" />
    </Button>
    <Input id="counter-input" type="number" class="w-12 shrink-0 border-0 bg-transparent p-0 text-center dark:bg-transparent" placeholder="" bind:value={counterInput} required />
    <Button color="alternative" class="h-5 w-5 rounded p-2" onclick={() => (counterInput += 1)}>
      <PlusOutline class="h-2.5 w-2.5" />
    </Button>
  </div>
</form>
