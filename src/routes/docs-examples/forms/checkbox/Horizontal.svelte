<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<p class="mb-4 font-semibold text-heading">Identification</p>
<ul class="w-full items-center divide-x divide-default rounded-lg border border-default sm:flex rtl:divide-x-reverse bg-neutral-primary-soft">
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Svelte</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Vue JS</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>React</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Angular</Checkbox></li>
</ul>
