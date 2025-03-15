<script lang="ts">
  import clsx from "clsx";
  import { type HelperProps as Props, helper } from ".";

  let { children, class: className, color = "gray", ...restProps }: Props = $props();

  const base = $derived(helper({ color, class: clsx(className) }));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
@props:color: any = "gray";
-->
