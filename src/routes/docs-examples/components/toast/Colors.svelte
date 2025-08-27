<script>
  import { Toast } from "flowbite-svelte";
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Toast color="green">
  {#snippet icon()}
    <CheckCircleSolid class="h-5 w-5" />
    <span class="sr-only">Check icon</span>
  {/snippet}
  Item moved successfully.
</Toast>

<Toast color="red">
  {#snippet icon()}
    <CloseCircleSolid class="h-5 w-5" />
    <span class="sr-only">Error icon</span>
  {/snippet}
  Item has been deleted.
</Toast>

<Toast color="red">
  {#snippet icon()}
    <ExclamationCircleSolid class="h-5 w-5" />
    <span class="sr-only">Warning icon</span>
  {/snippet}
  Improve password difficulty.
</Toast>

<Toast color="gray">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Gray
</Toast>

<Toast color="yellow">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Yellow
</Toast>

<Toast color="blue">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Blue
</Toast>

<Toast color="indigo">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Indigo
</Toast>

<Toast color="purple">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Purple
</Toast>

<Toast color={undefined} class="bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Customize your colors.
</Toast>
