<script lang="ts">
  import { MultiSelect } from "$lib";

  const items = [
    { value: "apple", name: "Apple" },
    { value: "banana", name: "Banana", disabled: true },
    { value: "orange", name: "Orange" }
  ];

  let value = $state<string[]>([]);
</script>

<MultiSelect {items} bind:value placeholder="Select fruits" />
