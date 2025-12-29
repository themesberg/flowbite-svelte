<script lang="ts">
  import { gradientButton } from "./theme";
  import clsx from "clsx";
  import type { GradientButtonProps } from "$lib";
  import Button from "./Button.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { getButtonGroupContext } from "$lib/context";

  const group = getButtonGroupContext()?.size;

  let { children, outline, pill, color = "blue", shadow, class: className, href, disabled, size, ...restProps }: GradientButtonProps = $props();

  const theme = $derived(getTheme("gradientButton"));

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled, size, group: !!group }));
</script>

{#if outline}
  <div class={base({ class: clsx(theme?.base, className) })}>
    <Button {...restProps} class={outlineWrapper({ class: clsx(theme?.outlineWrapper) })} {disabled} {href} {size}>
      {@render children?.()}
    </Button>
  </div>
{:else}
  <Button {...restProps} class={base({ class: clsx(theme?.base, className) })} {disabled} {href} {size}>
    {@render children?.()}
  </Button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L338)
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
@prop ...restProps
-->
