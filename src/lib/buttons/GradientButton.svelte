<script lang="ts">
  import { getContext } from "svelte";
  import { gradientButton, type GradientButtonTheme } from ".";
  import { type GradientButtonProps, type SizeType, Button, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  const group: SizeType = getContext("group");

  let { children, outline, pill, color = "blue", shadow, class: className, href, disabled, size, btnClass, ...restProps }: GradientButtonProps = $props();

  const theme = getTheme("gradientButton");

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled, size, group: !!group }));
</script>

{#if outline}
  <div class={cn(base(), (theme as GradientButtonTheme)?.base, className)}>
    <Button {...restProps} class={cn(outlineWrapper(), (theme as GradientButtonTheme)?.outlineWrapper, btnClass)} {disabled} {href} {size}>
      {@render children?.()}
    </Button>
  </div>
{:else}
  <Button {...restProps} class={cn(base(), (theme as GradientButtonTheme)?.base, className)} {disabled} {href} {size}>
    {@render children?.()}
  </Button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L347)
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
