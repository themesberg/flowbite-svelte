<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { toast, type ToastTheme } from ".";
  import type { ToastProps } from "$lib/types";
  import { fly } from "svelte/transition";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = "primary", position, iconClass, contentClass, align = true, params, transition = fly, class: className, classes, onclose, ...restProps }: ToastProps = $props();

  warnThemeDeprecation(
    "Toast",
    { iconClass, contentClass },
    {
      iconClass: "icon",
      contentClass: "content"
    }
  );
  const styling = $derived({
    icon: iconClass,
    content: contentClass
  });

  const theme = getTheme("toast");

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));

  function handleClose() {
    toastStatus = false;
    onclose?.();
  }
</script>

{#if toastStatus}
  <div role="alert" transition:transition={params as ParamsType} {...restProps} class={base({ class: clsx((theme as ToastTheme)?.base, className) })}>
    {#if icon}
      <div class={iconVariants({ class: clsx((theme as ToastTheme)?.icon, styling.icon) })}>
        {@render icon()}
      </div>
    {/if}

    <div class={content({ class: clsx((theme as ToastTheme)?.content, styling.content) })}>
      {@render children()}
    </div>

    {#if dismissable}
      <CloseButton class={close({ class: clsx((theme as ToastTheme)?.close, classes?.close) })} ariaLabel="Remove toast" {color} onclick={handleClose} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1818)
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
@prop classes
@prop onclose
@prop ...restProps
-->
