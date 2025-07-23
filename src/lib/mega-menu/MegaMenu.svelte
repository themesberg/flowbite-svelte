<script lang="ts">
  import { megamenu, type MegaMenuTheme } from "./theme";
  import clsx from "clsx";
  import { type MegaMenuProps, type LinkType, Popper } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, extra, items = [], full, ulClass, isOpen = $bindable(false), class: className, extraClass, classes, ...restProps }: MegaMenuProps = $props();

  //  ulClass, extraClass
  warnThemeDeprecation("MegaMenu", { ulClass, extraClass }, { ulClass: "ul", extraClass: "extra" });
  const styling = $derived(classes ?? { ul: ulClass, extra: extraClass });

  const theme = getTheme("megaMenu");

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, hasExtra: !!extra }));
</script>

<Popper color={full ? "default" : "dropdown"} arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={base({ class: clsx((theme as MegaMenuTheme)?.base, className) })}>
  <div class={div({ class: clsx((theme as MegaMenuTheme)?.div, classes?.div) })}>
    <ul class={ul({ class: clsx((theme as MegaMenuTheme)?.ul, styling.ul) })}>
      {#each items as item, index}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={extraCls({ class: clsx((theme as MegaMenuTheme)?.extra, styling.extra) })}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1042)
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
