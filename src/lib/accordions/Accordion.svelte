<script lang="ts">
  import Frame from '$lib/utils/Frame.svelte';
  import classNames from 'classnames';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let flush: boolean = false;

  setContext('flush', flush);
  setContext('selected', writable());

  let frameClass = classNames(
    'divide-y divide-gray-200 dark:divide-gray-700',
    'border-gray-200 dark:border-gray-700',
    'rounded-t-xl'
  );
</script>

<Frame class={frameClass} color="none" border={!flush}>
  <slot />
</Frame>
