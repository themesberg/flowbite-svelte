<script>
  import { DarkMode } from "flowbite-svelte";
  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
</script>

<DarkMode class="text-lg">
  {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
  {/snippet}
  {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
  {/snippet}
</DarkMode>
