<script lang="ts">
  import classNames from 'classnames';

  export let value: any;
</script>

<input
  {...$$props}
  class={classNames(
    'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600',
    $$props.class
  )}
  bind:value
  type="radio"
/>
