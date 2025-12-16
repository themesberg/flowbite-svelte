<script lang="ts">
  import { gradientButton } from "./theme";
  import clsx from "clsx";
  import type { GradientButtonProps } from "$lib";
  import Button from "./Button.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import { getButtonGroupContext } from "$lib/context";

  const group = getButtonGroupContext()?.size;

  let { children, outline, pill, color = "blue", shadow, class: className, href, disabled, size, btnClass, ...restProps }: GradientButtonProps = $props();

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled, size, group: !!group }));

  let baseClass = $derived(base({ class: clsx(getTheme("gradientButton")?.base, className) }));
  let outlineWrapperClass = $derived(outlineWrapper({ class: clsx(getTheme("gradientButton")?.outlineWrapper, btnClass) }));
</script>

{#if outline}
  <div class={baseClass}>
    <Button {...restProps} class={outlineWrapperClass} {disabled} {href} {size}>
      {@render children?.()}
    </Button>
  </div>
{:else}
  <Button {...restProps} class={baseClass} {disabled} {href} {size}>
    {@render children?.()}
  </Button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L340)
## Props
@prop children
@prop outline
@prop pill
@prop color = "blue"
@prop shadow
@prop class: className
@prop href
@prop disabled
@prop size
@prop btnClass
@prop ...restProps
-->
