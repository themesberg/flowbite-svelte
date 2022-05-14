<script lang="ts">
  import classNames from 'classnames';
</script>

<div
  class={classNames(
    'list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
    $$props.class
  )}
>
  <slot />
</div>
