<script lang="ts">
  let { snippet, class: className } = $props();
</script>

<div class={className}>
  {@render snippet()}
</div>
