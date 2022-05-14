<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  const context = getContext<{ popup: boolean }>('modal');
</script>

<div
  class={classNames(
    'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
    {
      'border-t': !context.popup,
    },
    $$props.class
  )}
>
  <slot />
</div>
