<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { ToolbarProps } from "$lib/types";
  import clsx from "clsx";
  import { setToolbarContext } from "$lib/context";
  import { toolbar } from "./theme";

  let { children, end, color, embedded, class: className, classes, ...restProps }: ToolbarProps = $props();

  const theme = $derived(getTheme("toolbar"));

  const context = $state({ separators: false });

  // Create context object with getter
  const ctx = {
    get separators() {
      return context.separators;
    },
    set separators(value: boolean) {
      context.separators = value;
    }
  };

  // Set context during initialization
  setToolbarContext(ctx);

  let frameColor = $derived(embedded ? "default" : color);

  let { base, content } = $derived(
    toolbar({
      color: frameColor,
      embedded,
      separators: context.separators
    })
  );

  // let separatorsClass: string = twMerge($separators && 'sm:divide-x rtl:divide-x-reverse');

  // let divClass: string = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', className);
</script>

<div {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  <div class={content({ class: clsx(theme?.content, classes?.content) })}>
    {@render children?.()}
  </div>
  {#if end}
    {@render end()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToolbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1115)
## Props
@prop children
@prop end
@prop color
@prop embedded
@prop class: className
@prop classes
@prop ...restProps
-->
