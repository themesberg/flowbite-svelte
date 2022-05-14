<script lang="ts">
  import classNames from 'classnames';

  export let checked: boolean = false;
  export let label: string = '';
  export let disabled: boolean = false;
</script>

<label
  for={$$props.id}
  class={classNames(
    'relative flex items-center',
    {
      'cursor-not-allowed opacity-50': disabled,
      'cursor-pointer': !disabled,
    },
    $$props.class
  )}
>
  <input {...$$props} type="checkbox" id={$$props.id} class="sr-only" {disabled} bind:checked />
  <div
    class="toggle-bg h-6 w-11 rounded-full border border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700"
  />
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
    <slot>{label}</slot>
  </span>
</label>
