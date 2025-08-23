<script>
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
  let eventSelected = $state("");
</script>

<Label>
  Select an option
  <Select
    class="mt-2"
    items={countries}
    bind:value={eventSelected}
    clearable
    onClear={() => {
      alert("Clicked clear button!");
    }}
    onchange={() => {
      console.log("Changed select value:");
    }}
  />
</Label>