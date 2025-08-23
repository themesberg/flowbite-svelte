<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let placeholder = "placeholder text";
  let selected: string[] = [];
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect items={countries} value={selected} size="lg" {placeholder} />