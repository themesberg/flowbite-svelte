<script lang="ts">
  import clsx from "clsx";
  import Popper from "../utils/Popper.svelte";
  import { popover } from "./theme";
  import type { PopoverProps } from "./type";

  let { title: titleSlot, color = "default", trigger = "click", defaultClass, arrow = true, children, placement = "top", class: className, ...restProps }: PopoverProps = $props();

  let { base, title, h3, arrowBase, content } = $derived(popover({ color, arrow, placement }));
</script>

<Popper {...restProps} {placement} border {trigger} {arrow} class={base({ class: clsx(className) })}>
  {#if typeof titleSlot === "string"}
    <div class={title()}>
      <h3 class={h3()}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  <div class={content({ class: defaultClass })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: titleSlot: any;
@props:color: any = "default";
@props:trigger: any = "click";
@props:arrow: any = true;
@props:children: any;
@props:placement: any = "top";
@props:class: string;
-->
