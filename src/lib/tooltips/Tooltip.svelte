<script lang="ts">
  import Popper from '../utils/Popper.svelte';
  import classNames from 'classnames';

  export let style: 'dark' | 'light' | 'auto' | 'custom' = 'auto';
  export let defaultClass: string = 'py-2 px-3 text-sm font-medium';

  const styles = {
    dark: 'border-gray-800 bg-gray-900 text-white dark:bg-gray-700 dark:border-gray-600',
    light: 'border-gray-200 bg-white text-gray-900',
    auto: 'border-gray-200 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600',
    custom: ''
  };

  let toolTipClass: string;
  $: {
    $$restProps.color || (style = 'custom');
    if ($$restProps.color) style = 'custom';
    else $$restProps.color = 'none';
    toolTipClass = classNames('tooltip', defaultClass, styles[style], $$props.class);
  }
</script>

<Popper data-tooltip rounded border shadow {...$$restProps} class={toolTipClass} on:show>
  <slot />
</Popper>
