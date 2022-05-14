<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';

  const context = getContext<{ popup: boolean }>('modal');
</script>

<div
  class={classNames(
    'p-6',
    {
      'pt-0': context.popup,
    },
    $$props.class
  )}
>
  <slot />
</div>
