<script lang="ts">
  import { Button, Tags } from "flowbite-svelte";
  let tags: string[] = $state([]);
  const handleClick = () => {
    alert(`Submitted: ${tags}`);
  };
</script>

<form>
  <Tags class="mt-5 mb-3" bind:value={tags} />
  {#if tags.length > 0}
    <pre>{JSON.stringify(tags, null, 2)}</pre>
  {/if}
  <Button onclick={handleClick}>Submit</Button>
</form>