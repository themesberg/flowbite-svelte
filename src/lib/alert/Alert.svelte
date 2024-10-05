<script lang="ts">
  import { type AlertProps as Props, alert } from '.';
  import { CloseButton } from '$lib';
  import { fade } from 'svelte/transition';
  import type { ParamsType } from '$lib/types';

  let { children, icon, alertStatus = $bindable(true), closeIcon, color = 'primary', rounded = true, border, class: className, dismissable, transition = fade, params, onclick, ...restProps }: Props = $props();

  let divCls = $derived(
    alert({
      color,
      rounded,
      border,
      icon: !!icon,
      dismissable,
      className
    })
  );
  // $inspect('transition: ', transition);
</script>

{#if alertStatus}
  <div role="alert" {...restProps} transition:transition={params as ParamsType} class={divCls}>
    {#if icon}
      {@render icon()}
    {/if}

    {#if icon || dismissable}
      <div>
        {@render children()}
      </div>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if closeIcon}
        <button
          type="button"
          class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300"
          aria-label="Remove badge"
          onclick={() => {
            alertStatus = false;
          }}
        >
          <span class="sr-only">Remove alert</span>
          {#if icon}
            {@render icon()}
          {/if}
        </button>
      {:else if onclick}
        <CloseButton class="-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700" {color} ariaLabel="Remove badge" {onclick} />
      {:else}
        <CloseButton
          class="-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700"
          {color}
          ariaLabel="Remove alert"
          onclick={() => {
            alertStatus = false;
          }}
        />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:icon: Snippet;
@props:alertStatus: boolean = $bindable(true);
@props:closeIcon: boolean;
@props:color: VariantProps<typeof alert>['color'] = 'primary';
@props:rounded: boolean = true;
@props:border: boolean;
@props:class: string;
@props:dismissable: boolean;
@props:transition: TransitionFunc = fade;
@props:params: ParamsType;
@props:onclick: () => void;
-->
