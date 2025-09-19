<script lang="ts">
  import { Button, Tags } from "flowbite-svelte";
  let tags: string[] = $state(["foo", "bar"]);
  const handleClick = () => {
    alert(`Submitted: ${tags}`);
  };
</script>

<form>
  <Tags disabled class="mt-5 mb-3" bind:value={tags} />
  <Button onclick={handleClick} disabled>Submit</Button>
</form>
