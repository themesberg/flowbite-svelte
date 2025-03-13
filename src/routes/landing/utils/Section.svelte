<script lang="ts">
  let { children, tinted = false, class: className } = $props();
</script>

<section class={tinted ? "bg-gray-50 dark:bg-gray-800" : ""}>
  <div class={["mx-auto max-w-screen-xl px-4 py-8 lg:px-4", className]}>
    {@render children?.()}
  </div>
</section>
