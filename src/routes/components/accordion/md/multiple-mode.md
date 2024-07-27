<script lang="ts">
  import { AccordionItem, Accordion } from 'svelte-5-ui-lib';
  let item0 = $state(false);
  let item1 = $state(false);
  let item2 = $state(false);
  const open_all = () => {
    item0 = true;
    item1 = true;
    item2 = true;
  }
  const close_all = () => {
    item0 = false;
    item1 = false;
    item2 = false;
  }
</script>

<Button onclick={open_all}>Open all</Button>
<Button onclick={close_all}>Close all</Button>
<Accordion class='mt-4'>
  <AccordionItem bind:open={item0}>
    {#snippet header()}
      My Header 1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem bind:open={item1}>
    {#snippet header()}
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  </AccordionItem>
  <AccordionItem bind:open={item2}>
    {#snippet header()}
      My Header 3
    {/snippet}
    <p>Something more</p>
  </AccordionItem>
</Accordion>
