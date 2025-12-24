<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion data-testid="accordion-flush" flush>
  <AccordionItem data-testid="flush-item">
    {#snippet header()}Flush Header{/snippet}
    Flush Content
  </AccordionItem>
</Accordion>
