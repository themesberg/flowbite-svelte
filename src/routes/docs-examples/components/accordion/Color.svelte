<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<!-- Global styling via Accordion -->
<Accordion
  classes={{
    active: "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white",
    inactive: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  }}
>
  <AccordionItem>
    {#snippet header()}Uses Accordion classes{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">This item uses the active/inactive classes defined in the parent Accordion.</p>
  </AccordionItem>
  <AccordionItem
    classes={{
      active: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
      inactive: "text-green-500 hover:bg-green-50 dark:hover:bg-green-950"
    }}
  >
    {#snippet header()}Custom item classes{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">This item overrides the parent classes with its own green theme.</p>
  </AccordionItem>
</Accordion>
