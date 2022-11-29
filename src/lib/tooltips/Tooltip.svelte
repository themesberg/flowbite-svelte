<script lang="ts">
  import Popper from '../utils/Popper.svelte';
  import classNames from 'classnames';

  export let style: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
  export let defaultClass: string = 'py-2 px-3 text-sm font-medium';

  const styles = {
    dark: 'bg-gray-900 text-white dark:bg-gray-700',
    light: 'border border-gray-200 bg-white text-gray-900',
    auto: ' bg-white text-gray-900 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-0',
    custom: ''
  };

  let toolTipClass: string;
  $: {
    if ($$restProps.color) style = 'custom';
    else $$restProps.color = 'none';
    toolTipClass = classNames('tooltip', defaultClass, styles[style], $$props.class);
  }
</script>

<Popper data-tooltip rounded shadow {...$$restProps} class={toolTipClass} on:show>
  <slot />
</Popper>
