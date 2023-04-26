<script>
  import Badge from '$lib/badges/Badge.svelte';
</script>

<Badge
  color="none"
  {...$$props}
  class="bg-primary-100 text-primary-700 dark:bg-gray-700 dark:text-primary-700 border-primary-700 dark:border-primary-700 {$$props.class}">
  <slot />
</Badge>
