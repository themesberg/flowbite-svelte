<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, classes, divProps = {}, hrProps = {} }: HrProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("hr"));

  const mergedDivProps = $derived({ ...divProps });
  const mergedHrProps = $derived({ ...hrProps });

  let { base, div, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...mergedDivProps} class={div({ class: clsx(theme?.div, className) })}>
    <hr {...mergedHrProps} class={base({ class: clsx(theme?.base, styling?.bg ?? "bg-gray-200 dark:bg-gray-700") })} />
    <div class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr {...mergedHrProps} class={base({ class: clsx(theme?.base, styling?.bg ?? "bg-gray-200 dark:bg-gray-700") })} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1893)
## Props
@prop children
@prop divClass
@prop innerDivClass
@prop class: className
@prop classes
@prop ...restProps
-->
