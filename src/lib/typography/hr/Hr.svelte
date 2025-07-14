<script lang="ts">
  import clsx from "clsx";
  import { hr, type HrTheme } from "./index";
  import type { HrProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, divClass, class: className, innerDivClass, ...restProps }: HrProps = $props();

  const theme = getTheme("hr");

  let { base, container, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...restProps} class={cn(container({ class: divClass }), (theme as HrTheme)?.container)}>
    <hr class={cn(base({ class: clsx(className) }), (theme as HrTheme)?.base)} />
    <div class={cn(content({ class: innerDivClass }), (theme as HrTheme)?.content)}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={cn(base({ class: clsx(className) }), (theme as HrTheme)?.base)} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1897)
## Props
@prop children
@prop divClass
@prop class: className
@prop innerDivClass
@prop ...restProps
-->
