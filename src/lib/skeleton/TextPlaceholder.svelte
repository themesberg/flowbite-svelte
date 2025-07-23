<script lang="ts">
  import clsx from "clsx";
  import { textPlaceholder, type TextPlaceholderTheme } from ".";
  import type { TextPlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "sm", class: className, classes, ...restProps }: TextPlaceholderProps = $props();

  const theme = getTheme("textPlaceholder");

  const { base, div, lineA, lineB } = $derived(
    textPlaceholder({
      size
    })
  );
</script>

<div role="status" {...restProps} class={base({ class: clsx((theme as TextPlaceholderTheme)?.base, className) })}>
  <div
    class={div({
      class: clsx("w-full", (theme as TextPlaceholderTheme)?.div, classes?.div)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-32", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
  </div>
  <div
    class={div({
      class: clsx("w-11/12", (theme as TextPlaceholderTheme)?.div, classes?.div)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
  </div>
  <div
    class={div({
      class: clsx("w-9/12", (theme as TextPlaceholderTheme)?.div, classes?.div)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-80", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
  </div>
  <div
    class={div({
      class: clsx("w-11/12", (theme as TextPlaceholderTheme)?.div, classes?.div)
    })}
  >
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
  </div>
  <div
    class={div({
      class: clsx("w-10/12", (theme as TextPlaceholderTheme)?.div, classes?.div)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-32", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-24", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
  </div>
  <div
    class={div({
      class: clsx("w-8/12", (theme as TextPlaceholderTheme)?.div)
    })}
  >
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
    <div class={lineA({ class: clsx("h-2.5 w-80", (theme as TextPlaceholderTheme)?.lineA, classes?.lineA) })}></div>
    <div class={lineB({ class: clsx("h-2.5 w-full", (theme as TextPlaceholderTheme)?.lineB, classes?.lineB) })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1435)
## Props
@prop size = "sm"
@prop class: className
@prop ...restProps
-->
