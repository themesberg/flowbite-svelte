<Accordion
  activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
  inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
>
  <AccordionItem class="">
    {#snippet header()}
      Header 2-1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 2-2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </AccordionItem>
</Accordion>