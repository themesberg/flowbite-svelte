<script lang="ts">
  let { children } = $props();
</script>

<div class="m-4 mx-auto max-w-5xl space-y-4 p-4">
  {@render children()}
</div>
