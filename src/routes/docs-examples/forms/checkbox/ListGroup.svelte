<script lang="ts">
  import { Checkbox, Listgroup } from "flowbite-svelte";
</script>

<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<Listgroup class="w-48">
  <li><Checkbox classes={{ div: "p-3" }}>svelte</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>Vue JS</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>React</Checkbox></li>
  <li><Checkbox classes={{ div: "p-3" }}>Angular</Checkbox></li>
</Listgroup>
