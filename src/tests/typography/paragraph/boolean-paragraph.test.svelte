<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P italic={true} data-testid="italic-paragraph">
  {#snippet children()}
    Italic text
  {/snippet}
</P>

<P justify={true} data-testid="justify-paragraph">
  {#snippet children()}
    Justified text with enough content to demonstrate text justification across multiple lines.
  {/snippet}
</P>

<P firstUpper={true} data-testid="firstupper-paragraph">
  {#snippet children()}
    First letter is large and uppercase.
  {/snippet}
</P>
