<script lang="ts">
  import { Search, Button, P } from "flowbite-svelte";

  let value = $state("");

  const submitted = (e: Event) => {
    e.preventDefault();
    alert(`You are searching: ${value}`);
  };
</script>

<form id="example-form" onsubmit={submitted}>
  <Search bind:value />
  <P class="my-1">You are searching: {value}</P>
  <Button type="submit">Submit</Button>
</form>
