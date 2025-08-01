<script lang="ts">
  import { Label, Select } from "flowbite-svelte";
  let selected: string = "";

  let countries: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
