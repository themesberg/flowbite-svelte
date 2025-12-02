<script lang="ts">
  import clsx from "clsx";
  import { Spinner } from "$lib";
  import type { ButtonProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import { button } from "./theme";
  import { getButtonGroupContext } from "$lib/context";

  const group = getButtonGroupContext()?.size;
  const ctxDisabled = getButtonGroupContext()?.disabled;

  let {
    children,
    pill,
    outline = false,
    size = "md",
    color,
    shadow = false,
    tag = "button",
    disabled,
    loading = false,
    spinnerProps = { size: "4" },
    class: className,
    ...restProps
  }: ButtonProps = $props();

  const theme = getTheme("button");

  let actualSize = $derived(group ? "sm" : size);
  let actualColor = $derived(color ?? (group ? (outline ? "dark" : "alternative") : "primary"));
  let isDisabled = $derived(Boolean(ctxDisabled) || Boolean(disabled) || loading);

  const { base, outline: outline_, shadow: shadow_, spinner } = $derived(button({ color: actualColor, size: actualSize, disabled: isDisabled, pill, group: !!group }));

  let btnCls = $derived(base({ class: clsx(outline && outline_(), shadow && shadow_(), theme?.base, className) }));
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    {@render children?.()}
  </a>
{:else if tag === "button"}
  <button type="button" {...restProps} class={btnCls} disabled={isDisabled}>
    {@render children?.()}
    {#if loading}
      <Spinner {...spinnerProps} class={spinner()} />
    {/if}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L344)
## Props
@prop children
@prop pill
@prop outline = false
@prop size = "md"
@prop color
@prop shadow = false
@prop tag = "button"
@prop disabled
@prop loading = false
@prop spinnerProps = { size: "4" }
@prop class: className
@prop ...restProps
-->
