<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';

  export let flush: boolean = false;
  setContext('flush', flush);
</script>

<div
  data-testid="accordion-element"
  class={classNames('divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700', {
    'rounded-lg border': !flush,
    'border-b': flush,
  })}
>
  <slot />
</div>
