<script lang="ts">
  import { Indicator } from "$lib";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { avatar } from ".";
  import type { AvatarProps, BaseThemes } from "$lib/types";

  let { children, indicator, src, href, target, cornerStyle = "circular", border = false, stacked = false, dot, class: className, alt, size = "md", onclick, ...restProps }: AvatarProps = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const avatarTheme = context?.avatar || avatar;

  dot = dot && { placement: "top-right", color: "gray", size: "lg", ...dot };

  let avatarClass = $derived(
    avatarTheme({
      cornerStyle,
      border,
      stacked,
      size,
      class: clsx(className)
    })
  );
</script>

{#if !src || !!href || children || dot || indicator}
  <svelte:element this={href ? "a" : "div"} role={href ? undefined : "button"} {onclick} {href} {target} {...restProps} class={avatarClass}>
    {#if src}
      <img {alt} {src} class={cornerStyle === "circular" ? "rounded-full" : "rounded-sm"} />
    {:else if children}
      {@render children()}
    {:else}
      <svg class="h-full w-full {cornerStyle === 'circular' ? 'rounded-full' : 'rounded-sm'}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
    {/if}
    {#if dot}
      <Indicator border offset={cornerStyle === "circular" ? true : false} {...dot} />
    {/if}
    {#if indicator}
      {@render indicator()}
    {/if}
  </svelte:element>
{:else}
  <img {alt} {src} {...restProps} {onclick} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AvatarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L196)
## Props
@prop children
@prop indicator
@prop src
@prop href
@prop target
@prop cornerStyle = "circular"
@prop border = false
@prop stacked = false
@prop dot
@prop class: className
@prop alt
@prop size = "md"
@prop onclick
@prop ...restProps
-->
