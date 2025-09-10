<script lang="ts">
  import { Input, Label, P, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";
  let quantity: number = $state(12345);
</script>

<form class="mx-auto max-w-xs">
  <Label class="mb-2 text-sm" for="quantity-input">Choose quantity:</Label>
  <div class="relative flex max-w-[8rem] items-center">
    <ButtonGroup>
      <Button type="button" id="decrement-button" onclick={() => (quantity -= 1)}>
        <MinusOutline />
      </Button>
      <Input bind:value={quantity} type="number" id="quantity-input" aria-describedby="helper-text-explanation" placeholder="999" required class="w-20 text-center" />
      <Button type="button" id="increment-button" onclick={() => (quantity += 1)}>
        <PlusOutline />
      </Button>
    </ButtonGroup>
  </div>
  <P id="helper-text-explanation" class="mt-2 text-sm">Please select a 5 digit number from 0 to 9.</P>
</form>
