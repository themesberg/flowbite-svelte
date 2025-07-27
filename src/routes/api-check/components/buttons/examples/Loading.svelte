<script lang="ts">
  import { Button } from "flowbite-svelte";
  let loading = $state(false);

  async function handleSubmit() {
    loading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    loading = false;
  }
</script>

<Button class="w-32" onclick={handleSubmit} {loading}>Submit</Button>