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
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab ...</P>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    {#snippet header()}My Header 2{/snippet}
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</P>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    {#snippet header()}My Header 3{/snippet}
    <P>Something more</P>
  </AccordionItem>
</Accordion>
