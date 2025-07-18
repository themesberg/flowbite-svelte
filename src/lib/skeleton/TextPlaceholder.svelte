<script lang="ts">
  import clsx from "clsx";
  import { textPlaceholder, type TextPlaceholderTheme } from ".";
  import type { TextPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "sm", class: className, ...restProps }: TextPlaceholderProps = $props();

  const theme = getTheme("textPlaceholder");

  const { baseWrapper, divWrapper, lineA, lineB } = $derived(
    textPlaceholder({
      size
    })
  );
</script>

<div role="status" {...restProps} class={baseWrapper({ class: clsx(className, (theme as TextPlaceholderTheme)?.baseWrapper) })}>
  <div
    class={divWrapper({
      class: clsx("w-full", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-32", (theme as TextPlaceholderTheme)?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
  </div>
  <div
    class={divWrapper({
      class: clsx("w-11/12", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB) })}></div>
  </div>
  <div
    class={divWrapper({
      class: clsx("w-9/12", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-80", (theme as TextPlaceholderTheme)?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
  </div>
  <div
    class={divWrapper({
      class: clsx("w-11/12", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB) })}></div>
  </div>
  <div
    class={divWrapper({
      class: clsx("w-10/12", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-32", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA) })}></div>
  </div>
  <div
    class={divWrapper({
      class: clsx("w-8/12", (theme as TextPlaceholderTheme)?.divWrapper)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-80", (theme as TextPlaceholderTheme)?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB) })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1420)
## Props
@prop size = "sm"
@prop class: className
@prop ...restProps
-->
