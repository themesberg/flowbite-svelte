<script lang="ts">
  import { AccordionItem, useMediaQuery, useBreakpoints, P } from "flowbite-svelte";
  const breakpoints = useBreakpoints();

  // Custom pixel range
  const customRange = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
</script>

<AccordionItem open={breakpoints.sm && !breakpoints.lg}>
  {#snippet header()}Tablet Range (640px - 1023px){/snippet}
  <P>Open on tablets, closed on phones and large desktops.</P>
</AccordionItem>

<AccordionItem open={(breakpoints.sm && !breakpoints.md) || (breakpoints.lg && !breakpoints.xl)}>
  {#snippet header()}Small phones OR Large desktops only{/snippet}
  <P>Open on sm-only OR lg-only, closed on other sizes.</P>
</AccordionItem>

<AccordionItem open={customRange()}>
  {#snippet header()}Custom Range{/snippet}
  <P>Define exact pixel ranges for precise control.</P>
</AccordionItem>
