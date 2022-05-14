<script lang="ts">
  export let percentFilled: number;
</script>

<div class="flex items-center">
  <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
    <slot />
  </span>
  <div class="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
    <div class="h-5 rounded bg-yellow-400" data-testid="rating-fill" style={`width:${percentFilled}%`} />
  </div>
  <span class="text-sm font-medium text-blue-600 dark:text-blue-500">{percentFilled}%</span>
</div>
