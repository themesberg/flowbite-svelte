<script lang="ts">
  import clsx from "clsx";
  import { textPlaceholder } from ".";
  import type { TextPlaceholderProps } from "$lib/types";

  let { size = "sm", class: className, ...restProps }: TextPlaceholderProps = $props();
  const { baseWrapper, divWrapper, lineA, lineB } = $derived(
    textPlaceholder({
      size
    })
  );
</script>

<div role="status" {...restProps} class={baseWrapper({ class: clsx(className) })}>
  <div class={divWrapper({ class: "w-full" })}>
    <div class={lineA({ class: "h-2.5 w-32" })}></div>
    <div class={lineB({ class: "h-2.5 w-24" })}></div>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
  </div>
  <div class={divWrapper({ class: "w-11/12" })}>
    <div class={lineA({ class: "h-2.5 w-full" })}></div>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
    <div class={lineB({ class: "h-2.5 w-24" })}></div>
  </div>
  <div class={divWrapper({ class: "w-9/12" })}>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
    <div class={lineA({ class: "h-2.5 w-80" })}></div>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
  </div>
  <div class={divWrapper({ class: "w-11/12" })}>
    <div class={lineA({ class: "h-2.5 w-full" })}></div>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
    <div class={lineB({ class: "h-2.5 w-24" })}></div>
  </div>
  <div class={divWrapper({ class: "w-10/12" })}>
    <div class={lineB({ class: "h-2.5 w-32" })}></div>
    <div class={lineB({ class: "h-2.5 w-24" })}></div>
    <div class={lineA({ class: "h-2.5 w-full" })}></div>
  </div>
  <div class={divWrapper({ class: "w-8/12" })}>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
    <div class={lineA({ class: "h-2.5 w-80" })}></div>
    <div class={lineB({ class: "h-2.5 w-full" })}></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1364)
## Props
@prop size = "sm"
@prop class: className
@prop ...restProps
-->
