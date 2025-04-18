<script lang="ts">
  import clsx from "clsx";
  import { type ActivityProps as Props, activity } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
  const base = activity({ class: clsx(className) });
</script>

<ol {...restProps} class={base}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop class: className
@prop ...restProps
-->
