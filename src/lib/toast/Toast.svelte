<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { toast, type ToastProps as Props } from ".";
  import { fly } from "svelte/transition";

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = "primary", position, baseClass, iconClass, contentClass, align = true, params, transition = fly, ...restProps }: Props = $props();

  const { base, icon: iconVariants, content, close } = $derived(toast({ color, position, align }));
</script>

{#if toastStatus}
  <div role="alert" transition:transition={params as ParamsType} {...restProps} class={base({ class: baseClass })}>
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
## Props
@props: children: any;
@props:icon: any;
@props:toastStatus: any = $bindable(true);
@props:dismissable: any = true;
@props:color: any = "primary";
@props:position: any;
@props:baseClass: any;
@props:iconClass: any;
@props:contentClass: any;
@props:align: any = true;
@props:params: any;
@props:transition: any = fly;
-->
