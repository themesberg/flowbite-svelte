<script lang="ts">
  import { fade } from "svelte/transition";
  import { banner, type BannerTheme } from ".";
  import { type ParamsType, type BannerProps, CloseButton, cn } from "$lib";
import { getTheme } from "$lib/theme/themeUtils";

  let { children, header, open = $bindable(true), dismissable = true, color = "gray", type, class: className, innerClass, transition = fade, params, closeClass, ...restProps }: BannerProps = $props();

  // Theme context
  const theme = getTheme("banner");

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));
</script>

{#if open}
  <div tabindex="-1" class={cn(base(), className, (theme as BannerTheme)?.base)} {...restProps} transition:transition={params as ParamsType}>
    <div class={cn(insideDiv(), innerClass, (theme as BannerTheme)?.insideDiv)}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton
          class={cn(dismissableClass(), closeClass, (theme as BannerTheme)?.dismissable)}
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
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L234)
## Props
@prop children
@prop header
@prop open = $bindable(true)
@prop dismissable = true
@prop color = "gray"
@prop type
@prop class: className
@prop innerClass
@prop transition = fade
@prop params
@prop closeClass
@prop ...restProps
-->
