<script lang="ts">
  import { fade } from "svelte/transition";
  import { banner } from "./theme";
  import clsx from "clsx";
  import { type ParamsType, type BannerProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    header,
    open = $bindable(true),
    dismissable = true,
    color = "gray",
    type,
    class: className,
    classes,
    innerClass,
    transition = fade,
    params,
    closeClass,
    onclose,
    ...restProps
  }: BannerProps = $props();

  warnThemeDeprecation("Banner", { innerClass, closeClass }, { innerClass: "insideDiv", closeClass: "dismissable" });

  const styling = $derived(classes ?? { insideDiv: innerClass, dismissable: closeClass });

  // Theme context
  const theme = getTheme("banner");

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));

  let ref: HTMLDivElement | undefined = $state(undefined);
  function close(event: MouseEvent) {
    if (ref?.dispatchEvent(new Event("close", { bubbles: true, cancelable: true }))) {
      open = false;
      onclose?.(event);
    }
  }
  createDismissableContext(close);
</script>

{#if open}
  <div tabindex="-1" bind:this={ref} class={base({ class: clsx(theme?.base, className) })} {...restProps} transition:transition={params as ParamsType}>
    <div class={insideDiv({ class: clsx(theme?.insideDiv, styling.insideDiv) })}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton class={dismissableClass({ class: clsx(theme?.dismissable, styling.dismissable) })} {color} ariaLabel="Remove banner" />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L265)
## Props
@prop children
@prop header
@prop open = $bindable(true)
@prop dismissable = true
@prop color = "gray"
@prop type
@prop class: className
@prop classes
@prop innerClass
@prop transition = fade
@prop params
@prop closeClass
@prop onclose
@prop ...restProps
-->
