<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, classes, divProps = {}, hrProps = {} }: HrProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("hr"));

  const mergedDivProps = $derived({ ...divProps });
  const mergedHrProps = $derived({ ...hrProps });

  let { base, wrapper, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div data-scope="hr" data-part="wrapper" {...mergedDivProps} class={wrapper({ class: clsx(theme?.wrapper, className) })}>
    <hr {...mergedHrProps} class={base({ class: clsx(theme?.base, styling?.base) })} />
    <div data-part="content" class={content({ class: clsx(theme?.content, styling?.content) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr data-scope="hr" {...mergedHrProps} class={base({ class: clsx(theme?.base, styling?.base) })} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1893)
## Props
@prop children
@prop class: className
@prop classes
@prop divProps
@prop hrProps
-->
