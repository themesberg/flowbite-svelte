<script lang="ts">
  import { Select } from "$lib";

  const items = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada", disabled: true },
    { value: "mx", name: "Mexico" }
  ];

  let value = $state("");
</script>

<Select {items} bind:value placeholder="Choose a country" />
