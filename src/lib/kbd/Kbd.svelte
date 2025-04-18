<script lang="ts">
  import clsx from "clsx";
  import { kbd, type KbdProps as Props } from ".";

  let { children, class: className, ...restProps }: Props = $props();
  const kbdCls = kbd({ class: clsx(className) });
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>

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
