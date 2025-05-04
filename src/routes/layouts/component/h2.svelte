<script>
  import Anchor from "./Anchor.svelte";
  let { children } = $props();
</script>

<Anchor tag="h2" class="text-2xl leading-tight font-bold text-gray-900 dark:text-white">{@render children()}</Anchor>
