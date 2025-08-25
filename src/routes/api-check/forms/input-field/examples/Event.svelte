<script lang="ts">
  import { Input } from "flowbite-svelte";
</script>

<Input
  clearable
  clearableOnClick={() => {
    alert("Clicked close button!");
  }}
  class="my-4"
/>
