<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { toast, type ToastTheme } from ".";
  import type { ToastProps } from "$lib/types";
  import { fly } from "svelte/transition";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = "primary", position, iconClass, contentClass, align = true, params, transition = fly, class: className, onclose, ...restProps }: ToastProps = $props();

  const theme = getTheme("toast");

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));

  function handleClose() {
    toastStatus = false;
    onclose?.();
  }
</script>

{#if toastStatus}
  <div role="alert" transition:transition={params as ParamsType} {...restProps} class={cn(base({ class: className }), (theme as ToastTheme)?.base)}>
    {#if icon}
      <div class={cn(iconVariants({ class: iconClass }), (theme as ToastTheme)?.icon)}>
        {@render icon()}
      </div>
    {/if}

    <div class={cn(content({ class: contentClass }), (theme as ToastTheme)?.content)}>
      {@render children()}
    </div>

    {#if dismissable}
      <CloseButton class={cn(close(), (theme as ToastTheme)?.close)} ariaLabel="Remove toast" {color} onclick={handleClose} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1822)
## Props
@prop children
@prop icon
@prop toastStatus = $bindable(true)
@prop dismissable = true
@prop color = "primary"
@prop position
@prop iconClass
@prop contentClass
@prop align = true
@prop params
@prop transition = fly
@prop class: className
@prop onclose
@prop ...restProps
-->
