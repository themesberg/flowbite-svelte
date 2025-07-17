<script lang="ts">
  import { getContext } from "svelte";
  import { dropdownItem, type DropdownItemTheme } from ".";
  import clsx from "clsx";
  import { type DropdownItemProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { aClass, children, activeClass, liClass, class: className, ...restProps }: DropdownItemProps = $props();

  const theme = getTheme("dropdownItem");

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };
  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });

  let active = $state(false);
  $effect(() => {
    active = sidebarUrl ? restProps.href === sidebarUrl : false;
  });

  const { anchor, activeAnchor } = dropdownItem();
  let finalClass = $derived([active ? activeAnchor({ class: clsx((theme as DropdownItemTheme)?.activeAnchor, activeClass, className) }) : anchor({ class: clsx((theme as DropdownItemTheme)?.anchor, aClass, className) })]);
</script>

<li class={liClass}>
  {#if restProps.href === undefined && restProps.onclick === undefined}
    <div {...restProps} class={finalClass}>
      {@render children()}
    </div>
  {:else if restProps.href === undefined}
    <button type="button" {...restProps} class={finalClass}>
      {@render children()}
    </button>
  {:else}
    <a {...restProps} class={finalClass}>
      {@render children()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L593)
## Props
@prop aClass
@prop children
@prop activeClass
@prop liClass
@prop class: className
@prop ...restProps
-->
