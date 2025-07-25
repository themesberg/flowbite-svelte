<script>
  import { AccordionItem, Accordion, Button } from "flowbite-svelte";
  const items = [false, false, false];

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<Button onclick={open_all}>Open all</Button>
<Button onclick={close_all}>Close all</Button>
<Accordion multiple>
  <AccordionItem bind:open={items[0]}>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    {#snippet header()}My Header 3{/snippet}
    <p>Something more</p>
  </AccordionItem>
</Accordion>