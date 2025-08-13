<script>
  import { AccordionItem, useMediaQuery, P } from "flowbite-svelte";
  const isMdAndUp = useMediaQuery("(min-width: 768px)");
</script>

<AccordionItem open={isMdAndUp()}>
  {#snippet header()}Opens on tablets and desktop{/snippet}
  <P>This content is visible on medium screens and larger.</P>
</AccordionItem>
