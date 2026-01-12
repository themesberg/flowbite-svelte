<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion transition="none">
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    Content A
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    Content B
  </AccordionItem>
</Accordion>

<Accordion>
  <AccordionItem transition="none">
    {#snippet header()}transition: "none"{/snippet}
    Content C
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}transition: default{/snippet}
    Content D
  </AccordionItem>
</Accordion>
