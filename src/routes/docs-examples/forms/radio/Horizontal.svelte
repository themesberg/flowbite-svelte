<script lang="ts">
  import { Radio } from "flowbite-svelte";
</script>

<p class="text-heading mb-4 font-semibold">Identification</p>
<ul class="divide-default rounded-base border-default bg-neutral-primary-soft w-full items-center divide-x border sm:flex rtl:divide-x-reverse">
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>React</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Angular</Radio></li>
</ul>
