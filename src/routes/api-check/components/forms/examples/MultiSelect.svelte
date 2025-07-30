<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let multiSelected: string[] = [];
  let countries: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect items={countries} bind:value={multiSelected} />