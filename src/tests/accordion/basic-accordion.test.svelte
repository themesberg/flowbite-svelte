<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion>
  <AccordionItem data-testid="item-1">
    {#snippet header()}Header 1{/snippet}
    Content 1
  </AccordionItem>
  <AccordionItem data-testid="item-2">
    {#snippet header()}Header 2{/snippet}
    Content 2
  </AccordionItem>
</Accordion>
