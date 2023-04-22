<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'mx-auto max-w-screen-md sm:text-center';
  export let h2Class: string =
    'mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white';
</script>

<div class={classNames(divClass, $$props.class)}>
  {#if $$slots.h2}
    <h2 class={classNames(h2Class, $$props.classH2)}>
      <slot name="h2" />
    </h2>
  {/if}
  <slot />
</div>
