<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P weight="thin" data-testid="weight-thin">
  {#snippet children()}
    Thin weight
  {/snippet}
</P>

<P weight="normal" data-testid="weight-normal">
  {#snippet children()}
    Normal weight
  {/snippet}
</P>

<P weight="bold" data-testid="weight-bold">
  {#snippet children()}
    Bold weight
  {/snippet}
</P>

<P weight="extrabold" data-testid="weight-extrabold">
  {#snippet children()}
    Extrabold weight
  {/snippet}
</P>
