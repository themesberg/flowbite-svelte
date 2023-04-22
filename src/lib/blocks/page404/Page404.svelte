<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'mx-auto max-w-screen-sm text-center';
  export let h1Class: string =
    'mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  {#if $$slots.h1}
    <h1 class={classNames(h1Class, $$props.classH1)}><slot name="h1" /></h1>
  {/if}
  {#if $$slots.paragraph}
    <slot name="paragraph" />
  {/if}
</div>
