<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  interface Props extends SVGAttributes<SVGSVGElement> {
    class?: string;
  }

  let { class: className, ...restProps }: Props = $props();
</script>

<svg
  class={className || "ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"}
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 12 10"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  {...restProps}
>
  <path d="m7 9 4-4-4-4M1 9l4-4-4-4" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
Props
## Props
@prop class: className
@prop ...restProps
-->
