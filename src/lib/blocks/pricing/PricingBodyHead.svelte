<script lang="ts">
  import classNames from 'classnames';
  export let h3Class: string = 'mb-4 text-2xl font-semibold';
  export let pClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
  export let priceClass: string = 'flex justify-center items-baseline my-8';
</script>

{#if $$slots.h3}
  <h3 class={classNames(h3Class, $$props.classH3)}><slot name="h3" /></h3>
{/if}
{#if $$slots.paragraph}
  <p class={classNames(pClass, $$props.classP)}>
    <slot name="paragraph" />
  </p>
{/if}
{#if $$slots.price}
  <div class={classNames(priceClass, $$props.classPrice)}>
    <slot name="price" />
  </div>
{/if}
