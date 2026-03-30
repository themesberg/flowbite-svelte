<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<Progressbar progress="50" size="h-3" labelInside color="green" classes={{ label: "text-xs font-medium text-center leading-none rounded-full" }} class="my-4" labelOutside="Size h-3" />

<Progressbar progress="50" size="h-10" labelInside color="red" classes={{ label: "text-2xl font-medium text-center leading-none rounded-full" }} class="my-4" labelOutside="Size h-10" />

<Progressbar progress="50" size="h-6" labelInside classes={{ label: "text-base font-medium text-center leading-none rounded-full" }} class="my-4" labelOutside="Size h-6" />
