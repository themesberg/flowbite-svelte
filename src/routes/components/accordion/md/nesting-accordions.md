<script lang="ts">
  import { AccordionItem, Accordion } from 'svelte-5-ui-lib';
  let nestingOpenStatus: boolean = $state(true);
</script>

<Accordion>
  <AccordionItem bind:open={nestingOpenStatus}>
    {#snippet header()}
      My Header 1
    {/snippet}
    <Accordion>
      <AccordionItem>
        {#snippet header()}
          My Header 1
        {/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
      </AccordionItem>
      <AccordionItem>
        {#snippet header()}
          My Header 2
        {/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li>
            <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur ...</p>
  </AccordionItem>
</Accordion>