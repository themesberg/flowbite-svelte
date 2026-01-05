<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P whitespace="nowrap" data-testid="whitespace-nowrap">This text will not wrap to next line no matter how long it gets.</P>

<P whitespace="pre" data-testid="whitespace-pre">Preserves spaces and line breaks.</P>

<P height="tight" data-testid="height-tight">Tight line height</P>

<P height="loose" data-testid="height-loose">Loose line height</P>
