<script>
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-underline" class="sr-only">Underline select</Label>
<Select id="select-underline" underline class="mt-2" items={countries} />
