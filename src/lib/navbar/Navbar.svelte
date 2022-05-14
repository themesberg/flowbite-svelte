<script lang="ts">
  import classNames from 'classnames';

  export let fluid: boolean = false;
  export let rounded: boolean = false;
  export let border: boolean = false;
</script>

<nav
  class={classNames(
    $$props.class,
    'border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
    {
      rounded: rounded,
      border: border,
    }
  )}
>
  <div
    class={classNames('mx-auto flex flex-wrap items-center justify-between', {
      container: !fluid,
    })}
  >
    <slot />
  </div>
</nav>
