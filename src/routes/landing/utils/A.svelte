<script lang="ts">
  let { chidren, href } = $props();
</script>

<a {href} class="text-lg font-medium text-gray-900 underline hover:no-underline dark:text-white">{@render chidren?.()}</a>
