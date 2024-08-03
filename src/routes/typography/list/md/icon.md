<script>
    import { List, Li, Heading } from 'svelte-5-ui-lib';
    import { CheckCircleOutline } from 'flowbite-svelte-icons';
</script>

<Heading
  tag="h2"
  class="mb-2 text-lg text-lg font-semibold font-semibold text-gray-900 dark:text-white"
  >Password requirements</Heading
>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li icon>
    <CheckCircleSolid
      class="me-2 h-5 w-5 text-green-500 dark:text-green-400"
    />
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <CheckCircleSolid
      class="me-2 h-5 w-5 text-green-500 dark:text-green-400"
    />
    At least one lowercase character
  </Li>
  <Li icon>
    <CheckCircleSolid class="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>