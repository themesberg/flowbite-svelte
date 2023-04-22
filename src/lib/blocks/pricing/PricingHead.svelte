<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'mx-auto max-w-screen-md text-center mb-8 lg:mb-12';
  export let h2Class: string =
    'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
  export let pClass: string = 'mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
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
</div>
