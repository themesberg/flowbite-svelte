<script>
  import Badge from "$lib/badge/Badge.svelte";

  let { children, ...restProps } = $props();
</script>

<Badge {...restProps} class="bg-primary-100 text-primary-700 dark:bg-gray-700 dark:text-primary-700 border-primary-700 dark:border-primary-700">
  {@render children()}
</Badge>
