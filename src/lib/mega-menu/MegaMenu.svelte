<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import type { LinkType } from "$lib/types";
  import Popper from "../utils/Popper.svelte";
  import { megamenu } from "./theme";
  import type { MegaMenuProps } from "$lib/types";

  let { children, extra, items = [], full, ulClass, isOpen = $bindable(false), class: className, extraClass, ...restProps }: MegaMenuProps = $props();

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, extra: !!extra }));

</script>

<Popper color={full ? "default" : "dropdown"} arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={twMerge(base(), clsx(className))}>
  <div class={div()}>
    <ul class={twMerge(ul(), clsx(ulClass))}>
      {#each items as item, index}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={twMerge(extraCls(), clsx(extraClass))}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1029)
## Props
@prop children
@prop extra
@prop items = []
@prop full
@prop ulClass
@prop isOpen = $bindable(false)
@prop class: className
@prop ...restProps
-->
