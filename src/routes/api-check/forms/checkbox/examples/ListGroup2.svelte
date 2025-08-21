<script lang="ts">
  import { Checkbox, Listgroup } from "flowbite-svelte";
  let choices = [
    { value: "svelte", label: "svelte" },
    { value: "vue", label: "Vue JS" },
    { value: "react", label: "React", checked: true },
    { value: "angular", label: "Angular" }
  ];
  let group = $state([]);
</script>

<p class="my-2">Choices: {group.join(", ")}</p>
<Listgroup class="w-48">
  <Checkbox bind:group {choices} classes={{ div: "p-3" }} />
</Listgroup>