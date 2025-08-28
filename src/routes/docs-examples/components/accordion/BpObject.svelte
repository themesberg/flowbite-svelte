<script lang="ts">
  import { AccordionItem, useBreakpoints, P } from "flowbite-svelte";
  const breakpoints = useBreakpoints();
</script>

<AccordionItem open={breakpoints.md}>
  {#snippet header()}Opens on medium screens+{/snippet}
  <P>Content for tablets and desktop users.</P>
</AccordionItem>
