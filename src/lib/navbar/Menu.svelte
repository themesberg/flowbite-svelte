<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  interface Props extends SVGAttributes<SVGSVGElement> {
    size?: string;
    color?: string;
    variation?: "solid" | "outline";
    ariaLabel?: string;
  }

  let { size = "24", color = "currentColor", variation = "outline", ariaLabel = "bars 3", class: className, ...restProps }: Props = $props();

  let viewBox: string = $state("0 0 24 24");
  let svgpath: string = $state("");
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  $effect(() => {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  });
</script>

<svg xmlns="http://www.w3.org/2000/svg" role="button" tabindex="0" width={size} height={size} class={className} {...restProps} aria-label={ariaLabel} fill="none" {viewBox} stroke-width="2">
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: size: any = "24";
@props:color: any = "currentColor";
@props:variation: any = "outline";
@props:ariaLabel: any = "bars 3";
@props:class: string;
-->
