<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P size="xs" data-testid="size-xs">
  {#snippet children()}
    Extra small text
  {/snippet}
</P>

<P size="sm" data-testid="size-sm">
  {#snippet children()}
    Small text
  {/snippet}
</P>

<P size="base" data-testid="size-base">
  {#snippet children()}
    Base text
  {/snippet}
</P>

<P size="lg" data-testid="size-lg">
  {#snippet children()}
    Large text
  {/snippet}
</P>

<P size="xl" data-testid="size-xl">
  {#snippet children()}
    Extra large text
  {/snippet}
</P>
