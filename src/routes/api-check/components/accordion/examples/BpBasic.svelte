<script>
  import { AccordionItem, useMediaQuery } from "flowbite-svelte";
  const isMdAndUp = useMediaQuery("(min-width: 768px)");
</script>

<AccordionItem open={isMdAndUp()}>
  {#snippet header()}Opens on tablets and desktop{/snippet}
  <p>This content is visible on medium screens and larger.</p>
</AccordionItem>
