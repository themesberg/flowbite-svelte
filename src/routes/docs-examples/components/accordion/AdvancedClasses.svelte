<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion
  classes={{
    button: "font-semibold",
    content: "rounded-b-lg p-6 bg-purple-50/50 dark:bg-purple-950/30",
    active: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/40",
    inactive: "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  }}
>
  <AccordionItem open>
    {#snippet header()}Open to See Purple Styling{/snippet}
    <p class="text-gray-700 dark:text-gray-300">This item is open, showing the purple active state with custom button font and content styling.</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Closed Item (Inactive State){/snippet}
    <p class="text-gray-700 dark:text-gray-300">When closed, items use the inactive gray styling.</p>
  </AccordionItem>
</Accordion>
