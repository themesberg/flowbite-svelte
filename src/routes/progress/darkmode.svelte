<script>
  import { P, A, DarkMode } from '$lib'
  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
</script>

<DarkMode />


<h2 class="text-3xl">Switcher style</h2>

<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />


<h2 class="text-3xl my-4">Mode icon</h2>


<DarkMode class="text-lg">
  {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
  {/snippet}
  {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
  {/snippet}
</DarkMode>

