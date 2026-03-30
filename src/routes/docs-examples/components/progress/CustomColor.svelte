<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="space-y-4">
  <Progressbar progress="40" classes={{ label: "bg-sky-600" }} />
  <Progressbar progress="40" classes={{ label: "bg-lime-600" }} />
  <Progressbar progress="40" classes={{ label: "bg-pink-600" }} />
</div>
