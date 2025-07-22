<script lang="ts">
  import clsx from "clsx";
  import { hr, type HrTheme } from "./index";
  import type { HrProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, divClass, class: className, innerDivClass, ...restProps }: HrProps = $props();

  const theme = getTheme("hr");

  let { base, container, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...restProps} class={container({ class: clsx((theme as HrTheme)?.container, divClass) })}>
    <hr class={base({ class: clsx((theme as HrTheme)?.base, className) })} />
    <div class={content({ class: clsx((theme as HrTheme)?.content, innerDivClass) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={base({ class: clsx((theme as HrTheme)?.base, className) })} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1883)
## Props
@prop children
@prop divClass
@prop class: className
@prop innerDivClass
@prop ...restProps
-->
