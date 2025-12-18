<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem data-testid="custom-arrow-item">
    {#snippet header()}Custom Arrows{/snippet}
    {#snippet arrowup()}
      <ChevronDoubleUpOutline data-testid="custom-arrow-up" />
    {/snippet}
    {#snippet arrowdown()}
      <ChevronDoubleDownOutline data-testid="custom-arrow-down" />
    {/snippet}
    Content with custom arrows
  </AccordionItem>
</Accordion>
