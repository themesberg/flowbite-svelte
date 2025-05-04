<script>
  import { P, A, DarkMode } from "$lib";
  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
</script>

<h1 class="text-3xl">Darkmode</h1>
<div class="border rounded p-4 flex flex-col gap-4">
<DarkMode />
</div>

<h2 class="text-2xl">Switcher style</h2>
<div class="border rounded p-4 flex flex-col gap-4">
<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
</div>

<h2 class="my-4 text-2xl">Mode icon</h2>
<div class="border rounded p-4 flex flex-col gap-4">
<DarkMode class="text-lg">
  {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
  {/snippet}
  {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
  {/snippet}
</DarkMode>
</div>