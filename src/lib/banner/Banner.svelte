<script lang="ts">
  import { CloseButton } from "$lib";
  import { fade } from "svelte/transition";
  import { banner } from "./index";
  import type { ParamsType, BannerProps } from "$lib/types";
  import clsx from "clsx";

  let { children, header, open = $bindable(true), dismissable = true, color = "gray", type, class: className, innerClass, transition = fade, params, ...restProps }: BannerProps = $props();

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));
</script>

{#if open}
  <div tabindex="-1" class={base({ class: clsx(className) })} {...restProps} transition:transition={params as ParamsType}>
    <div class={insideDiv({ class: innerClass })}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton
          class={dismissableClass()}
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
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L227)
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
@prop ...restProps
-->
