<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion transitionType="none" data-testid="no-transition-accordion">
  <AccordionItem data-testid="no-transition-item">
    {#snippet header()}No Transition{/snippet}
    Content without transition
  </AccordionItem>
</Accordion>
