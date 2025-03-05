<script lang="ts">
  import { CloseButton } from "$lib";
  import type { BaseThemes } from "$lib/theme";
  import type { ParamsType } from "$lib/types";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import { type AlertProps as Props, alert } from ".";
  import clsx from "clsx";

  let { children, icon, alertStatus = $bindable(true), closeIcon, color = "primary", rounded = true, border, class: className, dismissable, transition = fade, params, onclick, ...restProps }: Props = $props();

  // Theme context

  const context = getContext<BaseThemes>("themeConfig");
  // Use theme context if available, otherwise fallback to default
  const alertTheme = context?.alert || alert;

  let divCls = $derived(
    alertTheme({
      color,
      rounded,
      border,
      icon: !!icon,
      dismissable,
      class: clsx(className)
    })
  );
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
          class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded-sm p-0.5 whitespace-normal focus:ring-1 focus:outline-hidden"
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
        <CloseButton class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700" {color} ariaLabel="Remove badge" {onclick} />
      {:else}
        <CloseButton
          class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700"
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
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:icon: any;
@props:alertStatus: any = $bindable(true);
@props:closeIcon: any;
@props:color: any = 'primary';
@props:rounded: any = true;
@props:border: any;
@props:class: string;
@props:dismissable: any;
@props:transition: any = fade;
@props:params: any;
@props:onclick: any;
-->
