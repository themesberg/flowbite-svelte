<script lang="ts">
  import type { Side } from "@floating-ui/dom";
  import { getOppositePlacement, getSide } from "@floating-ui/utils";
  import type { ArrowProps } from "$lib/types";

  let { placement = "top", cords, strategy = "absolute", class: className = "" }: ArrowProps = $props();

  const px = (n: number | undefined) => (n ? `${n}px` : "");

  // calming down the warnings
  getSide;
  getOppositePlacement;

  function getBorderWidth(element: HTMLElement) {
    const computedStyle = window.getComputedStyle(element);
    return Math.max(parseFloat(computedStyle.borderLeftWidth), parseFloat(computedStyle.borderBottomWidth)) - 0.3;
  }

  const rotationMap: Record<Side, string> = {
    left: " rotate-45",
    right: " -rotate-135",
    top: " rotate-135",
    bottom: " -rotate-45"
  };

  function positioning(node: HTMLElement) {
    $effect(() => {
      node.style.position = strategy;
      node.style.left = px(cords.x);
      node.style.top = px(cords.y);
      node.style.right = "";
      node.style.bottom = "";

      let arrowSide = getSide(getOppositePlacement(placement));
      // node.style[arrowSide] = px(-node.offsetWidth / 2 - (border ? 1 : 0) + 1);
      node.style[arrowSide] = px(-node.offsetWidth / 2 - getBorderWidth(node));

      // node.classList.remove("border-t", "border-b", "border-s", "border-e");
      // border && (node.className += arrowBordersMap[arrowSide]);

      node.classList.remove("rotate-45", "-rotate-45", "rotate-135", "-rotate-135");
      node.className += rotationMap[arrowSide];
    });
  }
</script>

<div use:positioning class="popover-arrow clip pointer-events-none block h-[10px] w-[10px] border-b border-l border-inherit bg-inherit text-inherit {className}"></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ArrowProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2076)
## Props
@prop placement = "top"
@prop cords
@prop strategy = "absolute"
@prop class: className = ""
-->

<style>
  :global(.clip) {
    clip-path: polygon(0 0, 0% 100%, 100% 100%, 100% 85%, 15% 0);
  }
</style>
