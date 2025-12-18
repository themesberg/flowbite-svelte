<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion>
  <AccordionItem data-testid="open-item" open>
    {#snippet header()}Open Header{/snippet}
    Open Content
  </AccordionItem>
  <AccordionItem data-testid="closed-item">
    {#snippet header()}Closed Header{/snippet}
    Closed Content
  </AccordionItem>
</Accordion>
