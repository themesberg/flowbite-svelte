<script lang="ts">
  import { Search, Button } from "flowbite-svelte";
  let searchRef: HTMLInputElement | undefined = $state();
  let elementTxt = $state("This text has NOT been updated.");
</script>

<form id="example-form">
  <Search bind:value={elementTxt} bind:elementRef={searchRef} />
  <Button
    class="mt-2"
    onclick={() => {
      searchRef?.setRangeText("ALREADY", 14, 17, "select");
      searchRef?.select();
    }}
  >
    Update text
  </Button>
</form>
