<script lang="ts">
  import Button from "./Button.svelte";
  import { getContext } from "svelte";
  import { gradientButton } from ".";
  import type { GradientButtonProps } from "$lib/types";
  import type { SizeType } from "$lib/types";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";

  const group: SizeType = getContext("group");

  let { children, outline, pill, color = "blue", shadow, class: className, href, disabled, size, btnClass, ...restProps }: GradientButtonProps = $props();

  const { base, outlineWrapper } = $derived(gradientButton({ color, outline, pill, shadow, disabled, size, group: !!group }));
</script>

{#if outline}
  <div class={twMerge(base(), clsx(className))}>
    <Button {...restProps} class={twMerge(outlineWrapper(), clsx(btnClass))} {disabled} {href} {size}>
      {@render children?.()}
    </Button>
  </div>
{:else}
  <Button {...restProps} class={twMerge(base(), clsx(className))} {disabled} {href} {size}>
    {@render children?.()}
  </Button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L352)
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
