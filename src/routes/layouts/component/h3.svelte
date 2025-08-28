<script lang="ts">
  import Anchor from "./Anchor.svelte";
  let { children } = $props();
</script>

<Anchor tag="h3" class="text-xl leading-tight font-bold text-gray-900 dark:text-white">{@render children()}</Anchor>
