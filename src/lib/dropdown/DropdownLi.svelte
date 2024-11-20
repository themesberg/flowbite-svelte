<script lang="ts">
  import { type DropdownLiProps as Props, dropdownli } from "./";

  let { aClass, children, href, activeClass, liClass, ...restProps }: Props = $props();

  let currentUrl = $state("");
  $effect(() => {
    currentUrl = window.location.pathname;
  });

  const { anchor, activeAnchor } = $derived(dropdownli());
</script>

<li class={liClass}>
  {#if href}
    <a {href} {...restProps} class={currentUrl === href ? activeAnchor({ class: activeClass }) : anchor({ class: aClass })}>
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
@props: aClass: string;
@props:children: Snippet;
@props:href: string;
@props:activeClass: string;
@props:liClass: string;
-->
