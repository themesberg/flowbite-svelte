<script>
  import classNames from 'classnames';
</script>

<footer
  class={classNames(
    'w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6',
    $$props.class
  )}
>
  <slot />
</footer>
