<script lang="ts">
  import clsx from "clsx";
  import type { LinkType } from "../types";
  import Popper from "../utils/Popper.svelte";
  import { megamenu } from "./theme";
  import type { MegaMenuProps as Props } from "./type";

  let { children, extra, items = [], full, ulClass, class: className, ...restProps }: Props = $props();

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  const { base, div, ul, extra: extraCls } = $derived(megamenu({ full, extra: !!extra }));
  let wrapperClass: string = $derived(base({ class: clsx(className) }));
  let ulCls = $derived(ul({ class: ulClass }));
</script>

<Popper color={full ? "default" : "dropdown"} border={!full} arrow={false} trigger="click" placement="bottom" yOnly={full} {...restProps} class={wrapperClass}>
  <div class={div()}>
    <ul class={ulCls}>
      {#each items as item, index}
        <li>
          {@render children({ item, index })}
        </li>
      {:else}
        {@render children({ item: items[0], index: 0 })}
      {/each}
    </ul>
    {#if full && extra}<div class={extraCls()}>{@render extra()}</div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:extra: any;
@props:items: any = [];
@props:full: any;
@props:ulClass: any;
@props:class: string;
-->
