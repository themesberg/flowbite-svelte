<script lang="ts">
  import clsx from "clsx";
  import { textPlaceholder } from "./theme";
  import type { TextPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { size = "sm", class: className, classes, ...restProps }: TextPlaceholderProps = $props();

  const theme = $derived(getTheme("textPlaceholder"));

  const { base, lineGroup, primaryLine, secondaryLine } = $derived(
    textPlaceholder({
      size
    })
  );
</script>

<div role="status" {...restProps} data-scope="text-placeholder" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-full", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-32", theme?.primaryLine, classes?.primaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-24", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
  </div>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-11/12", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-full", theme?.primaryLine, classes?.primaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-24", theme?.secondaryLine, classes?.secondaryLine) })}></div>
  </div>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-9/12", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-80", theme?.primaryLine, classes?.primaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
  </div>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-11/12", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-full", theme?.primaryLine, classes?.primaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-24", theme?.secondaryLine, classes?.secondaryLine) })}></div>
  </div>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-10/12", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-32", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-24", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-full", theme?.primaryLine, classes?.primaryLine) })}></div>
  </div>
  <div
    data-part="line-group"
    class={lineGroup({
      class: clsx("w-8/12", theme?.lineGroup, classes?.lineGroup)
    })}
  >
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
    <div data-part="primary-line" class={primaryLine({ class: clsx("h-2.5 w-80", theme?.primaryLine, classes?.primaryLine) })}></div>
    <div data-part="secondary-line" class={secondaryLine({ class: clsx("h-2.5 w-full", theme?.secondaryLine, classes?.secondaryLine) })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1418)
## Props
@prop size = "sm"
@prop class: className
@prop classes
@prop ...restProps
-->
