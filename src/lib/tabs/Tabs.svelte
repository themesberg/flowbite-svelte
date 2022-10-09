<script context="module" lang="ts">
  import { writable, type Writable } from 'svelte/store';

  export interface TabCtxType {
    style: 'default' | 'full' | 'pill' | 'underline' | 'custom';
    // activeClasses: string;
    // inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';

  export let defaultClass: string = 'w-full';
  export let tabStyle: 'default' | 'full' | 'pill' | 'underline' | 'custom' = 'default';
  export let full: boolean = false;
  export let underline: boolean = false;

  const ctx: TabCtxType = {
    style: tabStyle,
    selected: writable<HTMLElement>()
  };

  setContext('ctx', ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });

    return { destroy };
  }

  const border = 'border-b border-gray-200 dark:border-gray-700';

  $: divClass = classNames(defaultClass, underline && border, $$props.class);

  const ulClasses = {
    default: '',
    full: 'text-sm font-medium text-center ',
    pill: '',
    underline: ' -mb-px',
    custom: ''
  };
  $: ulClass = classNames(
    'flex',
    full || 'flex-wrap space-x-2',
    full &&
      'text-gray-500 rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 dark:text-gray-400 mb-1',
    underline && '-mb-px'
  );
</script>

<div class={divClass}>
  <ul class={ulClass}>
    <slot {tabStyle} />
  </ul>
</div>
<div class="mt-4" use:init />
