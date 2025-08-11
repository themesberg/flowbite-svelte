<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { toast } from ".";
  import type { ToastProps } from "$lib/types";
  import { fly } from "svelte/transition";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = "primary", position, iconClass, contentClass, align = true, params, transition = fly, class: className, classes, ...restProps }: ToastProps = $props();

  warnThemeDeprecation(
    "Toast",
    { iconClass, contentClass },
    {
      iconClass: "icon",
      contentClass: "content"
    }
  );
  const styling = $derived(
    classes ?? {
      icon: iconClass,
      content: contentClass
    }
  );

  const theme = getTheme("toast");

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));

  let ref: HTMLDivElement | undefined = $state(undefined);

  function _close(event: MouseEvent) {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      toastStatus = false;
    }
  }

  createDismissableContext(_close);
</script>

{#if toastStatus}
  <div role="alert" bind:this={ref} transition:transition={params as ParamsType} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
    {#if icon}
      <div class={iconVariants({ class: clsx(theme?.icon, styling.icon) })}>
        {@render icon()}
      </div>
    {/if}

    <div class={content({ class: clsx(theme?.content, styling.content) })}>
      {@render children()}
    </div>

    {#if dismissable}
      <CloseButton class={close({ class: clsx(theme?.close, classes?.close) })} ariaLabel="Remove toast" {color} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1809)
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
@prop ...restProps
-->
