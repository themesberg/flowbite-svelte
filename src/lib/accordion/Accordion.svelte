<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface AccordionCtxType {
    flush: boolean | undefined;
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

  export let multiple: $$Props['multiple'] = false;
  export let flush: $$Props['flush'] = false;
  export let activeClass: $$Props['activeClass'] = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
  export let inactiveClass: $$Props['inactiveClass'] = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
  export let defaultClass: $$Props['defaultClass'] = 'text-gray-500 dark:text-gray-400';
  export let classActive: $$Props['classActive'] = '';
  export let classInactive: $$Props['classInactive'] = '';

  const ctx: AccordionCtxType = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive),
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
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let multiple: $$Props['multiple'] = false;
@prop export let flush: $$Props['flush'] = false;
@prop export let activeClass: $$Props['activeClass'] = 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800';
@prop export let inactiveClass: $$Props['inactiveClass'] = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800';
@prop export let defaultClass: $$Props['defaultClass'] = 'text-gray-500 dark:text-gray-400';
@prop export let classActive: $$Props['classActive'] = '';
@prop export let classInactive: $$Props['classInactive'] = '';
-->
