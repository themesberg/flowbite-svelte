<script lang="ts">
  import { Search } from "flowbite-svelte";
</script>

<Search
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button!");
  }}
/>
