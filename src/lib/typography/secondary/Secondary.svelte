<script lang="ts">
  import clsx from "clsx";
  import { type SecondaryProps as Props, secondary } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
</script>

<small {...restProps} class={secondary({ class: clsx(className) })}>
  {@render children()}
</small>

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
