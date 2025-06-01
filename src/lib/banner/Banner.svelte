<script lang="ts">
  import { fade } from "svelte/transition";
  import { banner } from ".";
  import { type ParamsType, type BannerProps, CloseButton, cn } from "$lib";

  let { children, header, open = $bindable(true), dismissable = true, color = "gray", type, class: className, innerClass, transition = fade, params, closeClass, ...restProps }: BannerProps = $props();

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));
</script>

{#if open}
  <div tabindex="-1" class={cn(base(), className)} {...restProps} transition:transition={params as ParamsType}>
    <div class={cn(insideDiv(), innerClass)}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton
          class={cn(dismissableClass(), closeClass)}
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
[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L228)
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
