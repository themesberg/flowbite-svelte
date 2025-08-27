<script lang="ts">
  import { Accordion, AccordionItem, P, useMediaQuery, useBreakpoints, useCurrentBreakpoint } from "flowbite-svelte";

  // Different approaches to responsive behavior
  const isMdAndUp = useMediaQuery("(min-width: 768px)");
  const breakpoints = useBreakpoints();
  const getCurrentBreakpoint = useCurrentBreakpoint();

  const currentBp = $derived(getCurrentBreakpoint());
  const tabletOnly = $derived(breakpoints.sm && !breakpoints.lg);
  const mobileOnly = $derived(!breakpoints.sm);
</script>

<!-- Always open on medium+ screens -->
<Accordion>
  <AccordionItem open={isMdAndUp()}>
    {#snippet header()}
      📱 Tablet & Desktop (Current: {currentBp})
    {/snippet}
    <P>Opens on tablets and larger screens. Stays closed on mobile.</P>
  </AccordionItem>

  <AccordionItem>
    {#snippet header()}Always Interactive{/snippet}
    <P>This accordion item behaves normally on all screen sizes.</P>
  </AccordionItem>
</Accordion>

<!-- Open only in tablet range -->
<Accordion>
  <AccordionItem open={tabletOnly}>
    {#snippet header()}
      📱 Tablet Only (640px - 1023px)
    {/snippet}
    <P>This opens automatically on tablets but closes on mobile phones and large desktop screens.</P>
  </AccordionItem>
</Accordion>

<!-- Mobile-first approach -->
<Accordion>
  <AccordionItem open={mobileOnly}>
    {#snippet header()}
      📱 Mobile Only (below 640px)
    {/snippet}
    <P>Expanded by default on mobile for better accessibility, collapsed on larger screens to save space.</P>
  </AccordionItem>
</Accordion>
