<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import type { SizeType, ButtonProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import { button } from "./theme";

  const group: SizeType = getContext("group");
  const ctxDisabled: boolean | undefined = getContext("disabled");

  let { children, pill, outline = false, size = "md", color, shadow = false, tag = "button", disabled, loading = false, class: className, ...restProps }: ButtonProps = $props();

  const theme = getTheme("button");

  let actualSize = $derived(group ? "sm" : size);
  let actualColor = $derived(color ?? (group ? (outline ? "dark" : "alternative") : "primary"));
  let isDisabled = $derived(Boolean(ctxDisabled) || Boolean(disabled) || loading);

  const { base, outline: outline_, shadow: shadow_ } = $derived(button({ color: actualColor, size: actualSize, disabled: isDisabled, pill, group: !!group }));
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
      <svg class="ml-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
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
[ButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L343)
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
@prop class: className
@prop ...restProps
-->
