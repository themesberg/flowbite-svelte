<script>
  import Accordion from "$lib/accordions/Accordion.svelte";
  import AccordionItem from "$lib/accordions/AccordionItem.svelte";
</script>

<Accordion>
  <AccordionItem key="a">
    <h2 slot="header">Header</h2>
    <p slot="body">Body</p>
  </AccordionItem>
  <AccordionItem key="b">
    <h2 slot="header">Header</h2>
    <p slot="body">Body</p>
  </AccordionItem>
</Accordion>
