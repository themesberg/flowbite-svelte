<script lang="ts">
  import classNames from 'classnames';
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white';
  export let pClass: string =
    'mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl';
</script>

{#if $$slots.h2}
  <h2 class={classNames(h2Class, $$props.classH2)}>
    <slot name="h2" />
  </h2>
{/if}
{#if $$slots.paragraph}
  <p class={classNames(pClass, $$props.classP)}>
    <slot name="paragraph" />
  </p>
{/if}
<slot />
