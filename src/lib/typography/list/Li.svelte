<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { getContext } from "svelte";
  import { type LiProps as Props } from "./index";
  import clsx from "clsx";

  let { children, icon, class: className, ...restProps }: Props = $props();

  const getCtxClass = getContext<() => string>("ctxClass");

  let liCls = $derived(twMerge(getCtxClass(), icon && "flex items-center", clsx(className)));
</script>

<li {...restProps} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:icon: any;
@props:class: string;
-->
