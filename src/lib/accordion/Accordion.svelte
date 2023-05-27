<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean;
    activeClasses: string;
    inactiveClasses: string;
    selected?: Writable<object>;
  }
</script>

<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import classNames from 'classnames';
  import { setContext, type ComponentProps } from 'svelte';

  interface $$Props extends ComponentProps<Frame> {
    multiple?: boolean;
    flush?: boolean;
    activeClasses?: string;
    inactiveClasses?: string;
    defaultClass?: string;
  }

  export let multiple: boolean = false;
  export let flush: boolean = false;
  export let activeClasses: string =
    'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  export let inactiveClasses: string =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  export let defaultClass: string = 'text-gray-500 dark:text-gray-400';

  const ctx: AccordionCtxType = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let frameClass = classNames(
    defaultClass,
    $$props.class
  );
</script>

<Frame {...$$restProps} class={frameClass} color="none">
  <slot />
</Frame>


<!--
  @component
  @see https://flowbite-svelte.com/docs/components/accordion

  @prop multiple: boolean = false;
  @prop flush: boolean = false;
  @prop activeClasses: string = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  @prop inactiveClasses: string = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  @prop defaultClass: string = 'text-gray-500 dark:text-gray-400';

  @example
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