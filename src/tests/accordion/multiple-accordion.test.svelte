<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion multiple data-testid="multiple-accordion">
  <AccordionItem data-testid="multi-item-1" open>
    {#snippet header()}Item 1{/snippet}
    Content 1
  </AccordionItem>
  <AccordionItem data-testid="multi-item-2" open>
    {#snippet header()}Item 2{/snippet}
    Content 2
  </AccordionItem>
</Accordion>
