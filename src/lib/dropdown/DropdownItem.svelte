<script lang="ts">
  import { getContext } from "svelte";
  import { dropdownItem } from ".";
  import { type DropdownItemProps, cn } from "$lib";

  let { aClass, children, activeClass, liClass, class: className, ...restProps }: DropdownItemProps = $props();

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
  let finalClass = $derived([active ? cn(activeAnchor(), activeClass, className) : cn(anchor(), aClass, className)]);
</script>

<li class={cn(liClass)}>
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
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L604)
## Props
@prop aClass
@prop children
@prop activeClass
@prop liClass
@prop class: className
@prop ...restProps
-->
