<script lang="ts">
  let { children } = $props();
</script>

<h2 class="text-3xl leading-tight font-extrabold text-gray-900 lg:text-4xl dark:text-white">{@render children?.()}</h2>
