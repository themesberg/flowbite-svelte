<script lang="ts">
  import { Radio } from "flowbite-svelte";
</script>

<p class="mb-4 font-semibold text-heading">Identification</p>
<ul class="w-full items-center divide-x divide-default rounded-base border border-default bg-neutral-primary-soft sm:flex rtl:divide-x-reverse">
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>React</Radio></li>
  <li class="w-full"><Radio name="hor-list" classes={{ label: "p-3" }}>Angular</Radio></li>
</ul>
