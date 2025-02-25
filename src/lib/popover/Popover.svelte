<script lang="ts">
  import Popper from "../utils/Popper.svelte";
  import { popover } from "./theme";
  import type { PopoverProps } from "./type";

  let { titleSlot, color = "default", trigger = "click", arrow = true, children, placement = "top", class: className, ...restProps }: PopoverProps = $props();

  let { base, title, h3, arrowBase } = $derived(popover({ color, arrow, placement }));
</script>

<Popper {...restProps} {placement} border {trigger} {arrow} class={base({ className })}>
  {#if typeof titleSlot === "string"}
    <div class={title()}>
      <h3 class={h3()}>{titleSlot}</h3>
    </div>
  {:else if titleSlot}
    {@render titleSlot()}
  {/if}
  {@render children()}
</Popper>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: titleSlot: any;
@props:color: any = "default";
@props:trigger: any = "click";
@props:arrow: any = true;
@props:children: any;
@props:placement: any = "top";
@props:class: string;
-->
