<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { blur, fade } from "svelte/transition";
</script>

<Accordion>
  <AccordionItem transitionParams={{ duration: 1000 }}>
    {#snippet header()}Slide duration:1000{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</p>
  </AccordionItem>
  <AccordionItem transition={blur} transitionParams={{ duration: 300 }}>
    {#snippet header()}Blur duration:300{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</p>
  </AccordionItem>
  <AccordionItem transition={fade} transitionParams={{ duration: 300 }}>
    {#snippet header()}Fade duration:300{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit ...</p>
  </AccordionItem>
</Accordion>
