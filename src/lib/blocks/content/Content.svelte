<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400';
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  {#if $$slots.h2}
    <h2 class={classNames(h2Class, $$props.classH2)}><slot name="h2" /></h2>
  {/if}
  <slot />
</div>
