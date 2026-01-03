<script lang="ts">
  import { megamenu } from "./theme";
  import clsx from "clsx";
  import type { MegaMenuProps } from "$lib";
  import Popper from "$lib/utils/Popper.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, addon, items = [], full, isOpen = $bindable(false), class: className, classes, ...restProps }: MegaMenuProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("megamenu"));
  const { base, content, list, footer: addonCls } = $derived(megamenu({ full, hasAddon: !!addon }));
</script>

<Popper data-scope="mega-menu" data-part="base" arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={content({ class: clsx(theme?.content, styling?.content) })}>
    <ul class={list({ class: clsx(theme?.list, styling?.list) })}>
      {#each items as item, index (item.name)}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && addon}<div class={addonCls({ class: clsx(theme?.footer, styling?.footer) })}>{@render addon()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1058)
## Props
@prop children
@prop addon
@prop items = []
@prop full
@prop isOpen = $bindable(false)
@prop class: className
@prop classes
@prop ...restProps
-->
