<script lang="ts">
  import { megamenu } from "./theme";
  import { type MegaMenuProps, type LinkType, Popper, cn } from "$lib";

  let { children, extra, items = [], full, ulClass, isOpen = $bindable(false), class: className, extraClass, ...restProps }: MegaMenuProps = $props();

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, extra: !!extra }));
</script>

<Popper color={full ? "default" : "dropdown"} arrow={false} bind:isOpen trigger="click" placement="bottom" yOnly={full} {...restProps} class={cn(base(), className)}>
  <div class={div()}>
    <ul class={cn(ul(), ulClass)}>
      {#each items as item, index}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={cn(extraCls(), extraClass)}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1053)
## Props
@prop children
@prop extra
@prop items = []
@prop full
@prop ulClass
@prop isOpen = $bindable(false)
@prop class: className
@prop extraClass
@prop ...restProps
-->
