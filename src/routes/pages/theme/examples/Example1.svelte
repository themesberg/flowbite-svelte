<script>
  import { Theme } from "$lib";
  import { Breadcrumb, BreadcrumbItem, Accordion, AccordionItem } from "$lib";
  import { themeConfig } from "./theme";
</script>

<h2 class="mb-8 text-2xl">With Theme</h2>
<Theme theme={themeConfig}>
  <Breadcrumb navClass="mb-4">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>

  <Accordion flush>
    <AccordionItem>
      {#snippet header()}
        Header 1-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 1-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</Theme>

<h2 class="my-8 text-2xl">Without Theme</h2>
<Breadcrumb navClass="mb-4">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
<Accordion flush>
  <AccordionItem>
    {#snippet header()}
      Header 1-1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 1-2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
