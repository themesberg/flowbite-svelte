<script lang="ts">
  import { CloseButton } from '$lib';
  import type { ParamsType } from '$lib/types';
  import { toast, type ToastProps as Props } from '.';
  import { fly } from 'svelte/transition';

  let { children, icon, toastStatus = $bindable(true), dismissable = true, color = 'primary', position, baseClass, iconClass, contentClass, align = true, params, transition = fly, ...restProps }: Props = $props();

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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:icon: Snippet;
@props:toastStatus: boolean = $bindable(true);
@props:dismissable: boolean = true;
@props:color: ColorType = 'primary';
@props:position: PositionType;
@props:baseClass: string;
@props:iconClass: string;
@props:contentClass: string;
@props:align: boolean = true;
@props:params: ParamsType;
@props:transition: TransitionFunc = fly;
-->
