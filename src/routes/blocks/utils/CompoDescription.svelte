<script lang="ts">
  let { children, pClass = "text-lg text-gray-600 dark:text-gray-400" } = $props();
</script>

<p class={pClass}>
  {@render children()}
</p>
