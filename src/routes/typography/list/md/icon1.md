<script>
    import { List, Li, Heading } from 'svelte-5-ui-lib';
    import { CheckCircleOutline } from 'flowbite-svelte-icons';
</script>

<Heading tag="h2" class="text-lg font-semibold mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements</Heading>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  <Li icon>
    <CheckCircleOutline class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400" />
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <CheckCircleOutline class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400" />
    At least one lowercase character
  </Li>
  <Li icon>
    <XCircleSolid class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400" />
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>