<script lang="ts">
  import { Input, Label, P, Button, ButtonGroup } from "flowbite-svelte";
  import { PlusOutline, MinusOutline, HomeOutline } from "flowbite-svelte-icons";
  let bedroom: number = $state(3);
</script>

<form class="mx-auto max-w-xs">
  <Label class="mb-2 text-sm" for="quantity-input">Choose quantity:</Label>
  <div class="relative flex max-w-[11rem] items-center">
    <ButtonGroup>
      <Button type="button" id="decrement-button" onclick={() => (bedroom -= 1)} class="h-11 p-3">
        <MinusOutline />
      </Button>
      <Input min="1" max="5" bind:value={bedroom} type="number" id="quantity-input" aria-describedby="helper-text-explanation" placeholder=" " required class="h-11 w-28 pb-6 text-center" />
      <div class="absolute start-1/2 bottom-0 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse">
        <HomeOutline class="h-4 w-4" />
        <span>Bedrooms</span>
      </div>
      <Button type="button" id="increment-button" onclick={() => (bedroom += 1)} class="h-11 p-3">
        <PlusOutline />
      </Button>
    </ButtonGroup>
  </div>
  <P id="helper-text-explanation" class="mt-2 text-sm">Please select the number of bedrooms.</P>
</form>
