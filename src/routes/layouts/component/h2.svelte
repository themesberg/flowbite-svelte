<script>
  import Anchor from './Anchor.svelte';
  let { children } = $props();
</script>

<Anchor tag="h2" class="text-gray-900 dark:text-white leading-tight text-2xl font-bold">{@render children()}</Anchor>
