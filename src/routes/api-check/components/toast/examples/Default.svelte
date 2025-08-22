<script>
  import { Toast } from "flowbite-svelte";
  import { FireOutline } from "flowbite-svelte-icons";
</script>

<Toast>
  {#snippet icon()}
    <FireOutline class="text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200 h-6 w-6" />
  {/snippet}
  Set yourself free.
</Toast>