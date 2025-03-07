<script lang="ts">
  import clsx from "clsx";
  import type { TriggeredToggleEvent } from "../utils/Popper.svelte";
  import Popper from "../utils/Popper.svelte";
  import { tooltip } from "./theme";
  import type { TooltipProps } from "./type";

  let { type = "dark", color = "default", trigger = "hover", arrow = true, children, placement = "top", onbeforetoggle: _onbeforetoggle, class: className, ...restProps }: TooltipProps = $props();

  let { base, arrowBase } = $derived(tooltip({ color, arrow }));

  function _onopen(ev: TriggeredToggleEvent) {
    // block all focusable elements inside the tooltip
    if (ev.target instanceof HTMLElement) {
      ev.target.querySelectorAll('a, button, input, textarea, select, details, [tabindex], [contenteditable="true"]').forEach((element) => element.setAttribute("tabindex", "-1"));
    }
    // bubble event to parent
    _onbeforetoggle?.(ev);
  }

  //   let popperClass = twMerge(commonClass, type === "light" ? light_class : dark_class, className);
</script>

<Popper {...restProps} {placement} border {trigger} {arrow} class={base({ class: clsx(className) })} onbeforetoggle={_onopen}>
  <div class="pointer-events-none">{@render children()}</div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: type: any = "dark";
@props:color: any = "default";
@props:trigger: any = "hover";
@props:arrow: any = true;
@props:children: any;
@props:placement: any = "top";
@props:onbeforetoggle: any;
@props:class: string;
-->
