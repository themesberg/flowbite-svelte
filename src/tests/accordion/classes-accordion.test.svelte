<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion
  classes={{
    active: "bg-blue-100",
    inactive: "bg-gray-50"
  }}
  data-testid="styled-accordion"
>
  <AccordionItem data-testid="styled-item" open>
    {#snippet header()}Styled Header{/snippet}
    Styled Content
  </AccordionItem>
</Accordion>
