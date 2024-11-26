<script lang="ts">
  import { Accordion, AccordionItem, Button } from "$lib";
  let item0 = $state(false);
  let item1 = $state(false);
  let item2 = $state(false);
  const open_all = () => {
    item0 = true;
    item1 = true;
    item2 = true;
  };
  const close_all = () => {
    item0 = false;
    item1 = false;
    item2 = false;
  };
</script>

<Button onclick={open_all} class="bg-primary-800">Open all</Button>
<Button onclick={close_all} class="bg-primary-800">Close all</Button>
<Accordion class="mt-4">
  <AccordionItem bind:open={item0}>
    {#snippet header()}
      My Header 1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>
  </AccordionItem>
  <AccordionItem bind:open={item1}>
    {#snippet header()}
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>
  </AccordionItem>
  <AccordionItem bind:open={item2}>
    {#snippet header()}
      My Header 3
    {/snippet}
    <p>Something more</p>
  </AccordionItem>
</Accordion>
