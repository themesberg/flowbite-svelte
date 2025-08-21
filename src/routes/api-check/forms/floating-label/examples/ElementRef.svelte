<script lang="ts">
  import { FloatingLabelInput, Button } from "flowbite-svelte";
  let floatingRef: HTMLInputElement | undefined = $state();
</script>

<FloatingLabelInput bind:elementRef={floatingRef} variant="outlined" id="element_outlined" name="element_outlined" type="text" class="my-4">Floating filled</FloatingLabelInput>
<Button
  onclick={() => {
    floatingRef?.select();
  }}
>
  Select
</Button>