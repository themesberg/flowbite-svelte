<script lang="ts">
  import { getContext } from "svelte";
  import { type BadgeProps as Props, badge } from "./index";
  import { CloseButton } from "$lib";
  import { fade } from "svelte/transition";
  import type { ParamsType } from "$lib/types";
  import type { BaseThemes } from "$lib/theme";
  import clsx from "clsx";

  let { children, icon, badgeStatus = $bindable(true), color = "primary", large = false, dismissable = false, class: className, border, href, target, rounded, transition = fade, params, aClass, onclose, ...restProps }: Props = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const badgeTheme = context?.badge || badge;

  const { base, hrefClass } = $derived(badgeTheme());

  const close = (ev: MouseEvent) => {
    onclose?.(ev);
    if (!ev.defaultPrevented) badgeStatus = false;
  };
</script>

{#if badgeStatus}
  <div {...restProps} transition:transition={params as ParamsType} class={base({ color, size: large ? "large" : "small", rounded, class: clsx(className) })}>
    {#if href}
      <a {href} {target} class={hrefClass({ class: aClass })}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if icon}
        <button type="button" class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded-sm p-0.5 whitespace-normal focus:ring-1 focus:outline-hidden" aria-label="Remove badge" onclick={close}>
          <span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else}
        <CloseButton class="ms-1.5 -me-1.5" {color} size={large ? "sm" : "xs"} ariaLabel="Remove badge" onclick={close} />
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
@props:badgeStatus: any = $bindable(true);
@props:color: any = 'primary';
@props:large: any = false;
@props:dismissable: any = false;
@props:class: string;
@props:border: any;
@props:href: any;
@props:target: any;
@props:rounded: any;
@props:transition: any = fade;
@props:params: any;
@props:aClass: any;
@props:onclick: any;
-->
