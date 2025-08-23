<script>
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];

  let clearableSelected = $state("");
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={clearableSelected} clearable />
</Label>