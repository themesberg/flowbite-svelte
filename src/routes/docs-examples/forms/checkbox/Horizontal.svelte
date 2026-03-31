<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<p class="text-heading mb-4 font-semibold">Identification</p>
<ul class="divide-default border-default bg-neutral-primary-soft w-full items-center divide-x rounded-lg border sm:flex rtl:divide-x-reverse">
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Svelte</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Vue JS</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>React</Checkbox></li>
  <li class="w-full"><Checkbox classes={{ label: "p-3" }}>Angular</Checkbox></li>
</ul>
