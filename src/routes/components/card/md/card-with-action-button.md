<script>
  import { Card, Button } from 'svelte-5-ui-lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <Button btnclass="w-fit">
    Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
  </Button>
</Card>
