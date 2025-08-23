<script>
  import { Select, Label } from "flowbite-svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="select-sm" class="mb-2">Small select</Label>
<Select id="select-sm" size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="mb-2">Default select</Label>
<Select id="select-md" size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="mb-2">Large select</Label>
<Select id="select-lg" size="lg" items={countries} class="mb-6" />
<p class="my-6"></p>
<Label for="select-sm" class="sr-only">Underline small select</Label>
<Select id="select-sm" underline size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="sr-only">Underline default select</Label>
<Select id="select-md" underline size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="sr-only">Underline large select</Label>
<Select id="select-lg" underline size="lg" items={countries} class="mb-6" />