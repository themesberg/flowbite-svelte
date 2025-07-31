<script lang="ts">
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  interface IconSolidProps extends SVGAttributes<SVGElement> {
    Icon: Component<any>;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    role?: string;
    color?: string;
    ariaLabel?: string;
    strokeWidth?: string;
    class?: string;
  }

  let { Icon, size, role, color = "currentColor", ariaLabel, strokeWidth, class: classname, ...restProps }: IconSolidProps = $props();
</script>

<Icon fill={color} {...restProps} {role} {size} {strokeWidth} class={classname} {ariaLabel} />
