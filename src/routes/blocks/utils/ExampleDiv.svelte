<script>
  import classNames from 'classnames';
  export let divClass =
    'rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6';
</script>

<div class="px-4">
  <div class={classNames(divClass, $$props.class)}>
    <slot />
  </div>
</div>