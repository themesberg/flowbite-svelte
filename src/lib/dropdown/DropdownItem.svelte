<script lang="ts">
  import { getContext } from "svelte";
  import { dropdownItem } from ".";
  import type { DropdownItemProps } from "$lib/types";
  import clsx from "clsx";

  let { aClass, children, href, activeClass, liClass, class: className, ...restProps }: DropdownItemProps = $props();

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

  const { anchor, activeAnchor } = dropdownItem();
  let finalClass = $derived([active ? activeAnchor({ class: clsx(activeClass, className) }) : anchor({ class: clsx(aClass, className) })]);
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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L569)
## Props
@prop aClass
@prop children
@prop href
@prop activeClass
@prop liClass
@prop class: className
@prop ...restProps
-->
