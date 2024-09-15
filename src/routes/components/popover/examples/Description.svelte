<script>
  import { Popover } from '$lib';
  import { QuestionCircleSolid, ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="h-80">
  <div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">
    This is just some informational text
    <button id="b3">
      <QuestionCircleSolid class="ms-1.5 h-5 w-5" />
      <span class="sr-only">Show information</span>
    </button>
  </div>
  <Popover arrow={false} triggeredBy="#b3" class="w-72 bg-white p-3 text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400" position="bottom-start">
    <div class="space-y-2 p-3">
      <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
      Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.
      <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
      For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.
      <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">
        Read more <ChevronRightOutline class="ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500" />
      </a>
    </div>
  </Popover>
</div>
