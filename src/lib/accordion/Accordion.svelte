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
  import { setContext } from 'svelte';

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
    'divide-y divide-gray-200 dark:divide-gray-700',
    'border-gray-200 dark:border-gray-700',
    'rounded-t-xl',
    $$props.class
  );
</script>

<Frame class={frameClass} color="none" border={!flush}>
  <slot />
</Frame>
