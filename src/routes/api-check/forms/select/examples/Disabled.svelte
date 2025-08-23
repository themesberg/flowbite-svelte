<script>
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />