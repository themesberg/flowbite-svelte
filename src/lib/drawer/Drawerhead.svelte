<script lang="ts">
  import { drawerhead, type DrawerheadProps } from '.';

  let { closeIcon, children, tag = 'h5', headClass, buttonClass, svgClass, class: className, ...restProps }: DrawerheadProps = $props();

  const { base, button, svg } = $derived(drawerhead());
</script>

<div class={base({ className })}>
  {#if children}
    {@render children()}
  {/if}
  {#if closeIcon}
    {@render closeIcon()}
  {:else}
    <button type="button" {...restProps} class={button({ class: buttonClass })}>
      <svg class={svg({ class: svgClass })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
      <span class="sr-only">Close drawer</span>
    </button>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop closeIcon
@prop children
@prop tag = 'h5'
@prop headClass
@prop buttonClass
@prop svgClass
@prop class: className
@prop ...restProps
-->
