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
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </AccordionItem>
      <AccordionItem>
        {#snippet header()}
          My Header 2
        {/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
          <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
          <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion>