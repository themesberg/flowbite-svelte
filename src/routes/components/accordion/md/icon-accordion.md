<Accordion>
  <AccordionItem>
    {#snippet header()}
      <span class="flex gap-2 text-base">
        <CartSolid class="mt-0.5" />
        <span>My Header 1</span>
      </span>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo...
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a
        href="/"
        target="_blank"
        rel="noreferrer"
        class="text-blue-600 hover:underline dark:text-blue-500"
      >
        get started
      </a>
      and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      <span class="flex gap-2 text-base">
        <CogOutline class="mt-0.5" />
        <span>My Header 2</span>
      </span>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sintexplicabo...
    </p>
  </AccordionItem>
</Accordion>