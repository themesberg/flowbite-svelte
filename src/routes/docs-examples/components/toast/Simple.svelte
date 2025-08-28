<script lang="ts">
  import { Toast } from "flowbite-svelte";
  import { PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<Toast dismissable={false}>
  {#snippet icon()}
    <PaperPlaneOutline class="text-primary-600 dark:text-primary-500 h-5 w-5 rotate-45" />
  {/snippet}
  <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
