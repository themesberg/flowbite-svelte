<script lang="ts">
  import { Radio } from "flowbite-svelte";
  let technology = $state("svelte");
</script>

<p class="text-heading mb-4 font-semibold">
  Technology <span class="capitalize">{technology}</span>
</p>
<ul class="divide-default rounded-base border-default bg-neutral-primary-soft w-48 divide-y border">
  <li><Radio classes={{ label: "p-3" }} bind:group={technology} value="svelte">Svelte</Radio></li>
  <li><Radio classes={{ label: "p-3" }} bind:group={technology} value="vue js">Vue JS</Radio></li>
  <li><Radio classes={{ label: "p-3" }} bind:group={technology} value="react">React</Radio></li>
  <li><Radio classes={{ label: "p-3" }} bind:group={technology} value="angular">Angular</Radio></li>
</ul>
