<script lang="ts">
  import { page } from '$app/stores';
  import { type DropdownLiProps as Props, dropdownli } from './';

  let { aClass, children, href, activeClass, liClass, ...restProps }: Props = $props();

  let currentUrl = $state();
  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  const { anchor, activeAnchor } = $derived(dropdownli());
</script>

<li class={liClass}>
  {#if href}
    <a {href} class={currentUrl === href ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })} {...restProps}>
      {@render children()}
    </a>
  {:else}
    {@render children()}
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop aClass
@prop children
@prop href
@prop activeClass
@prop liClass
@prop ...restProps
-->
