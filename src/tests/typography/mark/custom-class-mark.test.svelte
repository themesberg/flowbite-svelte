<script lang="ts">
  import Mark from "$lib/typography/mark/Mark.svelte";
</script>

<Mark class="custom-mark-class" data-testid="custom-mark">
  {#snippet children()}
    Custom styled highlight
  {/snippet}
</Mark>
