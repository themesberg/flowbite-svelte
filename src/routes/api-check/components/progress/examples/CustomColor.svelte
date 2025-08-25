<script>
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="space-y-4">
  <Progressbar progress="40" classes={{ label: "bg-sky-600 dark:bg-sky-400" }} />
  <Progressbar progress="40" classes={{ label: "bg-lime-600 dark:bg-lime-400" }} />
  <Progressbar progress="40" classes={{ label: "bg-pink-600 dark:bg-pink-400" }} />
</div>
