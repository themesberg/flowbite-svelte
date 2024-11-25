<script lang="ts">
  import { Accordion, AccordionItem } from "$lib";
  import { CartFlowbite, CogFlowbite } from "svelte-animated-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}
      <span class="flex gap-2 text-base">
        <CartFlowbite/>
        <span>My Header 1</span>
      </span>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      <span class="flex gap-2 text-base">
        <CogFlowbite />
        <span>My Header 2</span>
      </span>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
  </AccordionItem>
</Accordion>
