<script lang="ts">
  import { Search, Button } from "$lib";
  import { SearchOutline } from "flowbite-svelte-icons";
  let value = $state("");
  const submitted = () => {
    alert(`You are searching: ${value}`);
  };
</script>

<form class="flex gap-2" onsubmit={submitted}>
  <Search bind:value />
  <Button class="p-2.5" type="submit">
    <SearchOutline class="h-5 w-5" />
  </Button>
</form>
<p>You are searching: {value}</p>
