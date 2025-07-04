<script lang="ts">
  let { children } = $props();
</script>

<div class="max-w-7xl mx-auto p-4 m-4 space-y-4">
  {@render children()}
</div>
