<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import type { InputAddonProps } from "$lib";
  import { clampSize } from "$lib/forms/input-field";
  import { getButtonGroupContext } from "$lib/context";
  import { inputAddon } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, size, ...restProps }: InputAddonProps = $props();

  let background: boolean = getContext("background");
  const group = getButtonGroupContext();

  const theme = $derived(getTheme("inputAddon"));

  // size: explicit, inherited, default
  let _size = $derived(size || (group?.size ? clampSize(group.size) : undefined) || "md");

  // Determine background variant
  const backgroundVariant = $derived(background ? "tinted" : "base");

  // Use the tv function to generate classes
  const { base } = $derived(
    inputAddon({
      size: _size,
      background: backgroundVariant,
      grouped: !!group
    })
  );

  let divClass: string = $derived(base({ class: clsx(theme, className) }));
</script>

<div {...restProps} class={divClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[InputAddonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L891)
## Props
@prop children
@prop class: className
@prop size
@prop ...restProps
-->
