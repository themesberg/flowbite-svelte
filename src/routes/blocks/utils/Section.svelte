<script lang="ts">
  import type { Snippet } from "svelte";
  interface Props {
    children: Snippet;
    tinted?: boolean;
    class?: string;
  }
  let { tinted = false, children, class: className }: Props = $props();
</script>

<section class={tinted ? "bg-gray-50 dark:bg-gray-800" : ""}>
  <div class="max-w-8xl mx-auto px-4 py-8 lg:px-20 {className ?? ''}">
    {@render children()}
  </div>
</section>
