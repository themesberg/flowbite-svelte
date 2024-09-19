<script lang="ts">
  import { Accordion, AccordionItem } from '$lib';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<Accordion>
  <AccordionItem params={{ duration: 2000 }}>
    {#snippet header()}
      slide, duration: 2000
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transition={fly} params={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>
    {#snippet header()}
      Fly, delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transition={fade} params={{ duration: 1000 }}>
    {#snippet header()}
      Fade, duration: 1000
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
