<script lang="ts">
  import classNames from 'classnames';
  export let ctatype: 'default' | 'image' | 'heading' | 'none' = 'default';
  const ctaClasses = {
    default: {
      divClass: 'max-w-screen-md',
      h2Class: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'
    },
    image: {
      divClass: 'mt-4 md:mt-0',
      h2Class: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'
    },
    heading: {
      divClass: 'mx-auto max-w-screen-sm text-center',
      h2Class:
        'mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'
    },
    none: {
      divClass: '',
      h2Class: ''
    }
  };
</script>

{#if $$slots.img}
  <slot name="img" />
{/if}
<div class={classNames(ctaClasses[ctatype]['divClass'], $$props.classDiv)}>
  {#if $$slots.h2}
    <h2 class={classNames(ctaClasses[ctatype]['h2Class'], $$props.classH2)}><slot name="h2" /></h2>
  {/if}
  <slot />
</div>
