<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./index";
  import type { HrProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, divClass, innerDivClass, class: className, classes, ...restProps }: HrProps = $props();

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

  let { base, div, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...restProps} class={div({ class: clsx(theme?.div, divClass) })}>
    <hr class={base({ class: clsx(theme?.base, className) })} />
    <div class={content({ class: clsx(theme?.content, styling.content) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={base({ class: clsx(theme?.base, className) })} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1883)
## Props
@prop children
@prop divClass
@prop innerDivClass
@prop class: className
@prop classes
@prop ...restProps
-->
