<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P italic={true} data-testid="italic-paragraph">Italic text</P>

<P justify={true} data-testid="justify-paragraph">Justified text with enough content to demonstrate text justification across multiple lines.</P>

<P firstUpper={true} data-testid="firstupper-paragraph">First letter is large and uppercase.</P>
