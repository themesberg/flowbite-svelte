<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./index";
  import type { HrProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, divClass, innerDivClass, class: className, classes, divProps = {}, hrProps = {}, ...restProps }: HrProps = $props();

  // base container content
  warnThemeDeprecation(
    "Hr",
    { divClass, innerDivClass },
    {
      divClass: "div",
      innerDivClass: "content"
    }
  );
  const styling = $derived({
    div: divClass,
    content: innerDivClass
  });

  const theme = getTheme("hr");
  const bg = classes?.bg ?? "bg-gray-200 dark:bg-gray-700";

  // for backward compatibility and ...restPorps will be removed and use only ..divProps and ...hrProps in future
  const mergedDivProps = { ...restProps, ...divProps };
  const mergedHrProps = { ...restProps, ...hrProps };

  let { base, div, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...mergedDivProps} class={div({ class: clsx(theme?.div, divClass) })}>
    <hr {...mergedHrProps} class={base({ class: clsx(theme?.base, className, bg) })} />
    <div class={content({ class: clsx(theme?.content, styling.content) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr {...mergedHrProps} class={base({ class: clsx(theme?.base, className, bg) })} />
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
