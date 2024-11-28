<script>
  import { Darkmode } from "$lib";
  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
</script>

<Darkmode class="text-lg">
  {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
  {/snippet}
  {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
  {/snippet}
</Darkmode>
