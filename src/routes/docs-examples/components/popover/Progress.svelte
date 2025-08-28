<script lang="ts">
  import { Popover, Button } from "flowbite-svelte";
  import { DatabaseSolid, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<Button>
  <DatabaseSolid class="me-2 h-5 w-5 text-white dark:text-white" /> Storage status
</Button>
<Popover class="w-64 text-sm font-light">
  <div class="space-y-2">
    <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>
    <p class="text-gray-500 dark:text-gray-400">
      This server has <span class="font-semibold text-gray-900 dark:text-white">30</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">150 GB</span>
      of block storage remaining.
    </p>
    <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div class="h-2.5 rounded-full bg-red-600" style="width: 85%"></div>
    </div>
    <a href="/" class="text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700 flex items-center font-medium">
      Upgrade now <ChevronRightOutline class="text-primary-600 dark:text-primary-500 ms-1.5 h-4 w-4" />
    </a>
  </div>
</Popover>
