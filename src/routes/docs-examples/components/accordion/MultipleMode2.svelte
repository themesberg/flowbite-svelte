<script lang="ts">
  import { AccordionItem, Accordion, Button, P } from "flowbite-svelte";
  const items = $state([false, false, false]);

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<Button onclick={open_all}>Open all</Button>
<Button onclick={close_all}>Close all</Button>
<Accordion multiple>
  <AccordionItem bind:open={items[0]}>
    {#snippet header()}My Header 1{/snippet}
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </P>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    {#snippet header()}My Header 2{/snippet}
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="mb-2">Learn more about these technologies:</P>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    {#snippet header()}My Header 3{/snippet}
    <P>Something more</P>
  </AccordionItem>
</Accordion>
