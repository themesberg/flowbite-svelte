<script lang="ts">
  import { AccordionItem, Accordion } from 'svelte-5-ui-lib';
</script>


<Accordion>
  <AccordionItem>
    {#snippet header()}
      My Header 1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionParams={{ duration: 2000 }}>
    {#snippet header()} 
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType="fade" transitionParams={{ duration: 1000 }}>
    {#snippet header()}
      My Header 3
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>