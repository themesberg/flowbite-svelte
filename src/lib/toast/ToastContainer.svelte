<!-- ToastContainer.svelte -->
<script lang="ts">
  import type { ToastContainerProps } from "$lib/types";
  
  let { children, position = "top-right" }: ToastContainerProps = $props();
  
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
  };
</script>

<div class="fixed {positionClasses[position]} z-50 space-y-3">
  {@render children()}
</div>