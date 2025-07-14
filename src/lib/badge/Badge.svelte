<script lang="ts">
  import { badge, type BadgeTheme } from ".";
  import { fade } from "svelte/transition";
  import { type ParamsType, type BadgeProps, CloseButton, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, icon, badgeStatus = $bindable(true), color = "primary", large = false, dismissable = false, class: className, border, href, target, rounded, transition = fade, params, aClass, onclose, ...restProps }: BadgeProps = $props();

  // Theme context
  const theme = getTheme("badge");

  const { base, linkClass } = $derived(badge({ color, size: large ? "large" : "small", rounded, border }));

  const close = (ev: MouseEvent) => {
    onclose?.(ev);
    if (!ev.defaultPrevented) badgeStatus = false;
  };
</script>

{#if badgeStatus}
  <div {...restProps} transition:transition={params as ParamsType} class={cn(base(), className, (theme as BadgeTheme)?.base)}>
    {#if href}
      <a {href} {target} class={cn(linkClass(), aClass, (theme as BadgeTheme)?.linkClass)}>
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
## Type
[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L212)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = "primary"
@prop large = false
@prop dismissable = false
@prop class: className
@prop border
@prop href
@prop target
@prop rounded
@prop transition = fade
@prop params
@prop aClass
@prop onclose
@prop ...restProps
-->
