<script lang="ts">
  import { P } from "$lib";
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem open>
    {#snippet header()}My Header 1{/snippet}
    <Accordion>
      <AccordionItem>
        {#snippet header()}My Header 1{/snippet}
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</P>
      </AccordionItem>
      <AccordionItem>
        {#snippet header()}My Header 2{/snippet}
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</P>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</P>
  </AccordionItem>
</Accordion>
