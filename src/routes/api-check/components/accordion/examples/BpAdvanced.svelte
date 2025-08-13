<script>
  import { AccordionItem, useCurrentBreakpoint, useBreakpoints } from "flowbite-svelte";
  const breakpoints = useBreakpoints();
  const getCurrentBreakpoint = useCurrentBreakpoint();
  const currentBp = $derived(getCurrentBreakpoint());
</script>

<AccordionItem open={breakpoints.lg}>
  {#snippet header()}Desktop Only (Current: {currentBp}){/snippet}
  <p>This opens only on large screens and above.</p>
</AccordionItem>
