<script lang="ts">
  import classNames from 'classnames';
  export let h1Class: string =
    'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
  export let h2Class: string =
    'mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl';
  export let pClass: string =
    'mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400';
</script>

<div class={$$props.class}>
  {#if $$slots.h1}
    <h1 class={classNames(h1Class, $$props.classh1)} {...$$restProps}>
      <slot name="h1" />
    </h1>
  {/if}
  {#if $$slots.h2}
    <h2 class={classNames(h2Class, $$props.classh2)}><slot name="h2" /></h2>
  {/if}
  {#if $$slots.paragraph}
    <p class={classNames(pClass, $$props.classp)}>
      <slot name="paragraph" />
    </p>
  {/if}
  <slot />
</div>
