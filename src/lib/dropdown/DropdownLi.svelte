<script lang="ts">
  import { getContext } from "svelte";
  import { type DropdownLiProps as Props, dropdownli } from "./";
  import { tv } from "tailwind-variants";

  let { aClass, children, href, activeClass, liClass, class: className, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };
  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    // console.log('value: ', value)
    sidebarUrl = value;
  });
  let active = $state(false);
  $effect(() => {
    active = sidebarUrl ? href === sidebarUrl : false;
  });

  const { anchor, activeAnchor } = $derived(dropdownli());
  let finalClass = $derived([active ? activeAnchor({ class: activeClass }) : anchor({ class: aClass }), className]);
</script>

<li class={liClass}>
  {#if href}
    <a {href} {...restProps} class={finalClass}>
      {@render children()}
    </a>
  {:else}
    <div class={finalClass}>
      {@render children()}
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: aClass: any;
@props:children: any;
@props:href: any;
@props:activeClass: any;
@props:liClass: any;
@props:class: string;
-->
