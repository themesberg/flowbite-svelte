<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let selected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan", disabled: true },
    { value: "en", name: "England", disabled: true }
  ];
</script>

<MultiSelect items={countries} value={selected} size="lg" />
