<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean;
    activeClass: string;
    inactiveClass: string;
    selected?: Writable<object>;
    classActive?: string;
    classInactive?: string;
  }
</script>

<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import { setContext, type ComponentProps } from 'svelte';

  interface $$Props extends ComponentProps<Frame> {
    multiple?: boolean;
    flush?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    defaultClass?: string;
    classActive?: string;
    classInactive?: string;
  }

  export let multiple: boolean = false;
  export let flush: boolean = false;
  export let activeClass: string =
    'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  export let inactiveClass: string =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  export let defaultClass: string = 'text-gray-500 dark:text-gray-400';

  const ctx: AccordionCtxType = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let frameClass: string;
  $: frameClass = twMerge(defaultClass, $$props.class);
</script>

<Frame {...$$restProps} class={frameClass} color="none">
  <slot />
</Frame>

<!--
  @component
  ## Features
  [Accordion](https://flowbite-svelte.com/docs/components/accordion)
  - Default accordion
  - Always open
  - Color option
  - Flush accordion
  - Arrow style
  - Icon Accordion
  - Multiple mode
  - Custom transitions
  ## Props
  @prop multiple: boolean = false;
  @prop flush: boolean = false;
  @prop activeClasses: string = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  @prop inactiveClasses: string = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  @prop defaultClass: string = 'text-gray-500 dark:text-gray-400';
  ## Example
  ```
  <script>
    import { AccordionItem, Accordion } from 'flowbite-svelte'
  </script>

  <Accordion>
    <AccordionItem>
      <span slot="header">My Header 1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">My Header 2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\
    </AccordionItem>
  </Accordion>
  ```

-->
