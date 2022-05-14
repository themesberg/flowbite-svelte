<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';
  setContext('insideCollapse', false);
</script>

<ul
  {...$$props}
  class={classNames(
    'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700'
  )}
  data-testid="sidebar-item-group"
>
  <slot />
</ul>
