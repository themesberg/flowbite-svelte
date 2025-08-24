<script>
  import { A } from "flowbite-svelte";
  let show_full_link = $state(false);
</script>

<A asButton onclick={() => (show_full_link = !show_full_link)}>view full link</A>

{#if show_full_link}
  <p>The full link is now visible.</p>
{/if}