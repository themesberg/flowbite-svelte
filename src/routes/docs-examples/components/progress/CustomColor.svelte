<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="space-y-4">
  <Progressbar progress="40" classes={{ bar: "bg-sky-600" }} />
  <Progressbar progress="40" classes={{ bar: "bg-lime-600" }} />
  <Progressbar progress="40" classes={{ bar: "bg-pink-600" }} />
</div>
