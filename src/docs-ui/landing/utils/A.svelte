<script lang="ts">
  let { children = undefined, href } = $props();
</script>

<a {href} class="text-lg font-medium text-gray-900 underline hover:no-underline dark:text-white">{@render children?.()}</a>
