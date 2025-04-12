<script lang="ts">
  import clsx from "clsx";
  import type { TriggeredToggleEvent } from "../utils/Popper.svelte";
  import Popper from "../utils/Popper.svelte";
  import { tooltip } from "./theme";
  import type { TooltipProps } from "./type";

  let { type = "dark", color = undefined, trigger = "hover", arrow = true, children, placement = "top", onbeforetoggle: _onbeforetoggle, class: className, ...restProps }: TooltipProps = $props();

  let { base } = $derived(tooltip({ color, type }));

  function onbeforetoggle(ev: TriggeredToggleEvent) {
    // block all focusable elements inside the tooltip
    if (ev.target instanceof HTMLElement) {
      ev.target.querySelectorAll('a, button, input, textarea, select, details, [tabindex], [contenteditable="true"]').forEach((element) => element.setAttribute("tabindex", "-1"));
    }
    // bubble event to parent
    _onbeforetoggle?.(ev);
  }
</script>

<Popper {...restProps} {placement} {trigger} {arrow} class={base({ class: clsx(className) })} {onbeforetoggle}>
  <div class="pointer-events-none">{@render children()}</div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: type: any = "dark";
@props:color: any = undefined;
@props:trigger: any = "hover";
@props:arrow: any = true;
@props:children: any;
@props:placement: any = "top";
@props:onbeforetoggle: any;
@props:class: string;
-->
