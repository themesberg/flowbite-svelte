<script lang="ts">
  import { Select, Button } from "flowbite-svelte";

  let selectRef = $state() as HTMLSelectElement;
  const options = [
    { value: "option1", name: "Option 1" },
    { value: "option2", name: "Option 2" },
    { value: "option3", name: "Option 3" }
  ];
  let selectedValue = $state("option1");
</script>

<Select bind:elementRef={selectRef} bind:value={selectedValue} items={options} class="my-4" />

<Button
  onclick={() => {
    // programmatically change the selection
    selectRef.selectedIndex = 2; // This would select Option 2
    selectedValue = "option2";
    selectRef?.focus();
    console.log(`Selected index: ${selectRef?.selectedIndex}`);
  }}
>
  Access Select
</Button>
