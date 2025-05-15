<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { toast } from ".";
  import type { ToastProps } from "$lib/types";
  import { fly } from "svelte/transition";

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = "primary", position, iconClass, contentClass, align = true, params, transition = fly, class: className, ...restProps }: ToastProps = $props();

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));
</script>

{#if toastStatus}
  <div role="alert" transition:transition={params as ParamsType} {...restProps} class={base({ class: className })}>
    {#if icon}
      <div class={iconVariants({ class: iconClass })}>
        {@render icon()}
      </div>
    {/if}

    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>

    {#if dismissable}
      <CloseButton
        class={close()}
        ariaLabel="Remove toast"
        {color}
        onclick={() => {
          toastStatus = false;
        }}
      />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1664)
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
@prop ...restProps
-->
