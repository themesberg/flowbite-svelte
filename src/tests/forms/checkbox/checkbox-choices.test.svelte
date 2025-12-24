<script lang="ts">
  import { Checkbox } from "$lib";

  let group = $state<string[]>(["orange"]);

  const choices = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" }
  ];
</script>

<Checkbox {choices} bind:group />
