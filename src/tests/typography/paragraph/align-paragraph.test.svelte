<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P align="left" data-testid="align-left">
  {#snippet children()}
    Left aligned
  {/snippet}
</P>

<P align="center" data-testid="align-center">
  {#snippet children()}
    Center aligned
  {/snippet}
</P>

<P align="right" data-testid="align-right">
  {#snippet children()}
    Right aligned
  {/snippet}
</P>
