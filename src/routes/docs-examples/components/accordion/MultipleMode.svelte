<script lang="ts">
  import { Accordion, AccordionItem } from "flowbite-svelte";
</script>

<Accordion multiple>
  <AccordionItem open>
    {#snippet header()}
      Header 1-1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem open>
    {#snippet header()}
      Header 1-2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
