<script lang="ts">
  import type { Coords, MiddlewareData, Placement, Side } from "@floating-ui/dom";
  import { getOppositePlacement, getSide } from "@floating-ui/utils";

  let {
    placement = "top",
    cords,
    border = true,
    strategy = "absolute",
    class: className = ""
  }: {
    placement?: Placement;
    cords: Partial<Coords>;
    border?: boolean;
    strategy?: "absolute" | "fixed";
    class?: string;
  } = $props();

  const px = (n: number | undefined) => (n ? `${n}px` : "");

  // const arrowBordersMap: Record<Side, string> = {
  //     left: " border-b border-s",
  //     right: " border-t border-e",
  //     top: " border-t border-s",
  //     bottom: " border-b border-e",
  // };

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
      node.style[arrowSide] = px(-node.offsetWidth / 2 - (border ? 1 : 0) + 1);

      // node.classList.remove("border-t", "border-b", "border-s", "border-e");
      // border && (node.className += arrowBordersMap[arrowSide]);

      node.classList.remove("rotate-45", "-rotate-45", "rotate-135", "-rotate-135");
      node.className += rotationMap[arrowSide];
    });
  }
</script>

<div use:positioning class:border-none={!border} class="popover-arrow clip block pointer-events-none bg-inherit text-inherit w-[10px] h-[10px] border-l border-b {className}"></div>

<style>
  :global(.clip) {
    clip-path: polygon(0 0, 0% 100%, 100% 100%, 100% 85%, 15% 0);
  }
</style>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: 
-->
