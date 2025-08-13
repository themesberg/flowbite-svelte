<script>
  import { AccordionItem, useBreakpoints } from "flowbite-svelte";
  const breakpoints = useBreakpoints();
</script>

<AccordionItem open={breakpoints.md}>
  {#snippet header()}Opens on medium screens+{/snippet}
  <p>Content for tablets and desktop users.</p>
</AccordionItem>
