<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P whitespace="nowrap" data-testid="whitespace-nowrap">
  {#snippet children()}
    This text will not wrap to next line no matter how long it gets.
  {/snippet}
</P>

<P whitespace="pre" data-testid="whitespace-pre">
  {#snippet children()}
    Preserves    spaces    and
    line breaks.
  {/snippet}
</P>

<P height="tight" data-testid="height-tight">
  {#snippet children()}
    Tight line height
  {/snippet}
</P>

<P height="loose" data-testid="height-loose">
  {#snippet children()}
    Loose line height
  {/snippet}
</P>
