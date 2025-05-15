<script lang="ts">
  import { CloseButton } from "$lib";
  import type { ParamsType } from "$lib/types";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import { alert } from ".";
  import type { AlertProps, BaseThemes } from "$lib/types";
  import clsx from "clsx";

  let { children, icon, alertStatus = $bindable(true), closeIcon: CloseIcon, color = "primary", rounded = true, border, class: className, dismissable, transition = fade, params, onclick = () => (alertStatus = false), ...restProps }: AlertProps = $props();

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
      {#if CloseIcon}
        <CloseButton class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700" {color} ariaLabel="Remove alert" {onclick}>
          <CloseIcon />
        </CloseButton>
      {:else}
        <CloseButton class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700" {color} ariaLabel="Remove alert" {onclick} />
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AlertProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L185)
## Props
@prop children
@prop icon
@prop alertStatus = $bindable(true)
@prop closeIcon: CloseIcon
@prop color = "primary"
@prop rounded = true
@prop border
@prop class: className
@prop dismissable
@prop transition = fade
@prop params
@prop onclick = ()
@prop ...restProps
-->
