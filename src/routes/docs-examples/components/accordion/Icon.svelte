<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { CartSolid, CogOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CartSolid />
        <span>My Header 1</span>
      </div>
    {/snippet}
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CogOutline />
        <span>My Header 2</span>
      </div>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
  </AccordionItem>
</Accordion>
