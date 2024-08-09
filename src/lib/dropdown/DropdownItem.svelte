<script lang="ts">
  import { page } from '$app/stores';
  import { type DropdownItemProps as Props, dropdownitem } from './';

  let { aClass, children, href, activeClass, liClass, ...attributes }: Props =
    $props();

  let currentUrl = $state();
  $effect(() => {
    currentUrl = $page.url.pathname;
  });

  const { anchor, activeAnchor } = $derived(dropdownitem());
</script>

<li class={liClass}>
  {#if href}
    <a {href} class={currentUrl === href ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })} {...attributes}>
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
@prop ...attributes
-->
