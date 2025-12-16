<script lang="ts">
  import { megamenu } from "./theme";
  import clsx from "clsx";
  import type { MegaMenuProps } from "$lib";
  import Popper from "$lib/utils/Popper.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, extra, items = [], full, ulClass, isOpen = $bindable(false), class: className, extraClass, classes, ...restProps }: MegaMenuProps = $props();

  warnThemeDeprecation(
    "MegaMenu",
    untrack(() => ({ ulClass, extraClass })),
    { ulClass: "ul", extraClass: "extra" }
  );

  const styling = $derived(classes ?? { ul: ulClass, extra: extraClass });
  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, hasExtra: !!extra }));

  const baseCls = $derived(base({ class: clsx(getTheme("megamenu")?.base, className) }));
  const divCls = $derived(div({ class: clsx(getTheme("megamenu")?.div, classes?.div) }));
  const ulCls = $derived(ul({ class: clsx(getTheme("megamenu")?.ul, styling.ul) }));
  const extraClsFull = $derived(extraCls({ class: clsx(getTheme("megamenu")?.extra, styling.extra) }));
</script>

<Popper arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={baseCls}>
  <div class={divCls}>
    <ul class={ulCls}>
      {#each items as item, index (item.name)}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={extraClsFull}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1151)
## Props
@prop children
@prop extra
@prop items = []
@prop full
@prop ulClass
@prop isOpen = $bindable(false)
@prop class: className
@prop extraClass
@prop classes
@prop ...restProps
-->
