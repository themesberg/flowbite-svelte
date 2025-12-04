<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  type IconVariant = "default" | "simple" | "tick";

  interface IconPropsType {
    viewBox: string;
    fill: string | "none";
    pathData?: string;
    pointsData?: string;
    stroke?: string;
    "stroke-width"?: string;
    "stroke-linecap"?: "round" | "butt" | "square" | "inherit";
    "stroke-linejoin"?: "round" | "bevel" | "miter" | "inherit";
  }

  interface Props extends SVGAttributes<SVGSVGElement> {
    class?: string;
    variant?: IconVariant;
  }

  let { class: className, variant = "default", ...restProps }: Props = $props();

  // 1. 'default' (Check inside a circle) - FILL ICON
  const defaultIconProps: IconPropsType = {
    viewBox: "0 0 20 20",
    fill: "currentColor",
    pathData: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
    stroke: undefined,
    "stroke-linecap": undefined,
    "stroke-linejoin": undefined,
    "stroke-width": undefined
  };

  // 2. 'simple' (Basic check stroke path) - STROKE ICON
  const simpleIconProps: IconPropsType = {
    viewBox: "0 0 16 12",
    fill: "none",
    pathData: "M1 5.917 5.724 10.5 15 1.5",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  };

  // 3. 'tick' (New V-shaped check stroke) - STROKE ICON
  const polylineIconProps: IconPropsType = {
    viewBox: "0 0 24 24",
    fill: "none",
    pointsData: "20 6 9 17 4 12",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // Select the appropriate props based on the variant
  const iconProps = $derived(variant === "simple" ? simpleIconProps : variant === "tick" ? polylineIconProps : defaultIconProps);

  // Determine the base class for the SVG
  const baseClass = $derived(className || (variant !== "default" ? "h-4 w-4" : "me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"));
</script>

<svg
  class={baseClass}
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  viewBox={iconProps.viewBox}
  fill={iconProps.fill}
  stroke={iconProps.stroke}
  stroke-width={iconProps["stroke-width"]}
  stroke-linecap={iconProps["stroke-linecap"]}
  stroke-linejoin={iconProps["stroke-linejoin"]}
  {...restProps}
>
  {#if iconProps.pointsData}
    <polyline points={iconProps.pointsData} />
  {:else}
    <path d={iconProps.pathData} />
  {/if}
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
Props
## Props
@prop class: className
@prop variant = "default"
@prop ...restProps
-->
