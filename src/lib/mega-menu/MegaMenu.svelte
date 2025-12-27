<script lang="ts">
  import { megamenu } from "./theme";
  import clsx from "clsx";
  import type { MegaMenuProps } from "$lib";
  import Popper from "$lib/utils/Popper.svelte";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, extra, items = [], full, isOpen = $bindable(false), class: className, classes, ...restProps }: MegaMenuProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("megamenu"));
  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, hasExtra: !!extra }));
</script>

<Popper arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={div({ class: clsx(theme?.div, styling?.div) })}>
    <ul class={ul({ class: clsx(theme?.ul, styling?.ul) })}>
      {#each items as item, index (item.name)}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={extraCls({ class: clsx(theme?.extra, styling?.extra) })}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1091)
## Props
@prop children
@prop extra
@prop items = []
@prop full
@prop isOpen = $bindable(false)
@prop class: className
@prop classes
@prop ...restProps
-->
