<script lang="ts">
  import { List, Li, Heading } from "flowbite-svelte";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="dl" class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li>At least 10 characters (and up to 100 characters)</Li>
  <Li>At least one lowercase character</Li>
  <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
</List>
