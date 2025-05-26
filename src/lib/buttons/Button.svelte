<script lang="ts">
  import { getContext } from "svelte";
  import { type SizeType, type ButtonProps, cn } from "$lib";
  import { button } from ".";

  const group: SizeType = getContext("group");
  const ctxDisabled: boolean | undefined = getContext("disabled");

  let { children, pill, outline = false, size = "md", color = "primary", shadow = false, tag = "button", disabled, class: className, ...restProps }: ButtonProps = $props();
  let actualSize = $derived(group ? "sm" : size);
  let actualColor = $derived(color ?? (group ? (outline ? "dark" : "alternative") : "primary"));
  let isDisabled = $derived(Boolean(ctxDisabled) || Boolean(disabled));

  const { base, outline: outline_, shadow: shadow_ } = $derived(button({ color: actualColor, size: actualSize, disabled: isDisabled, pill, group: !!group }));
  let btnCls = $derived(cn(base(), outline && outline_(), shadow && shadow_(), className));
</script>

{#if restProps.href === undefined}
  <button type="button" {...restProps} class={btnCls} disabled={isDisabled}>
    {@render children?.()}
  </button>
{:else if restProps.href}
  <a {...restProps} class={btnCls} role="button">
    {@render children?.()}
  </a>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L353)
## Props
@prop children
@prop onclick
@prop pill
@prop outline = false
@prop size = "md"
@prop color = "primary"
@prop shadow = false
@prop tag = "button"
@prop disabled
@prop class: className
@prop ...restProps
-->
