<script>
  import { AccordionItem, Accordion, Button } from "$lib";
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
  import { CartSolid, CogOutline } from "flowbite-svelte-icons";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const items = [false, false, false];

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<h1 class="my-4 text-2xl">Accordion</h1>

<h2 class="my-4 text-2xl">Default accordion</h2>

<div class="rounded border p-4">
  <Accordion>
    <AccordionItem>
      {#snippet header()}My Header 1{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
        and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}My Header 2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
        <li>
          <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
        </li>
        <li>
          <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Always open</h2>

<div class="rounded border p-4">
  <Accordion>
    <AccordionItem open>
      {#snippet header()}Header 2-1{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}Header 2-2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Color option</h2>

<div class="rounded border p-4">
  <Accordion activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
    <AccordionItem class="">
      {#snippet header()}Header 2-1{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}Header 2-2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Flush accordion</h2>

<div class="rounded border p-4">
  <Accordion flush>
    <AccordionItem>
      {#snippet header()}Header 2-1{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}Header 2-2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Arrow style</h2>
<div class="rounded border p-4">
  <Accordion>
    <AccordionItem>
      {#snippet header()}Header 2-1{/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}Header 2-2{/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Icon Accordion</h2>
<div class="rounded border p-4">
  <Accordion>
    <AccordionItem>
      {#snippet header()}
        <div class="flex items-center gap-2">
          <CartSolid />
          <span>My Header 1</span>
        </div>
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
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
</div>

<h2 class="my-4 text-2xl">Multiple mode</h2>
<div class="rounded border p-4">
  <Accordion multiple>
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
</div>

<div class="my-4 space-y-4 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Custom transitions</h2>
<div class="rounded rounded border p-4">
  <Accordion>
    <AccordionItem transitionParams={{ duration: 2000 }}>
      {#snippet header()}My Header 1{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem transitionType={fly} transitionParams={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>
      {#snippet header()}My Header 2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem transitionType={fade} transitionParams={{ duration: 1000 }}>
      {#snippet header()}My Header 3{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2 class="my-4 text-2xl">Nesting accordions</h2>
<div class="rounded border p-4">
  <Accordion>
    <AccordionItem open>
      {#snippet header()}My Header 1{/snippet}
      <Accordion>
        <AccordionItem>
          {#snippet header()}My Header 1{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}My Header 2{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
            <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
          </ul>
        </AccordionItem>
      </Accordion>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}My Header 2{/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
        <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
        <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>
