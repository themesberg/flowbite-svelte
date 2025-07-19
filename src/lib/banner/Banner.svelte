<script lang="ts">
  import { fade } from "svelte/transition";
  import { banner, type BannerTheme } from ".";
  import clsx from "clsx";
  import { type ParamsType, type BannerProps, CloseButton } from "$lib";
  import { getTheme, themeDeprecated } from "$lib/theme/themeUtils";

  let { children, header, open = $bindable(true), dismissable = true, color = "gray", type, class: className, classes, innerClass, transition = fade, params, closeClass, ...restProps }: BannerProps = $props();

  themeDeprecated("Banner", { innerClass, closeClass }, { innerClass: "insideDiv", closeClass: "dismissable" });

  let styling = $derived(classes ?? { insideDiv: innerClass, dismissable: closeClass });

  // Theme context
  const theme = getTheme("banner");

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));
</script>

{#if open}
  <div tabindex="-1" class={base({ class: clsx((theme as BannerTheme)?.base, className) })} {...restProps} transition:transition={params as ParamsType}>
    <div class={insideDiv({ class: clsx((theme as BannerTheme)?.insideDiv, styling.insideDiv) })}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton
          class={dismissableClass({ class: clsx((theme as BannerTheme)?.dismissable, styling.dismissable) })}
          {color}
          ariaLabel="Remove banner"
          onclick={() => {
            open = false;
          }}
        />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L222)
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
@prop ...restProps
-->
