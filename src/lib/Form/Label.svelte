<script lang="ts">
  import classNames from 'classnames';

  export let color: 'gray' | 'green' | 'red' = 'gray';

  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
  };
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {...$$props} class={classNames('text-sm font-medium', colorClasses[color], $$props.class)}>
  <slot />
</label>
