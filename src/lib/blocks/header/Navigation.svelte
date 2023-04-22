<script lang="ts">
  import classNames from 'classnames';
  export let navClass: string = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
  export let divClass: string =
    'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
</script>

<header>
  <nav {...$$restProps} class={classNames(navClass, $$props.class)}>
    <div class={classNames(divClass, $$props.divClass)}>
      <slot />
    </div>
  </nav>
</header>
