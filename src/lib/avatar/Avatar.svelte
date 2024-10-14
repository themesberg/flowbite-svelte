<script lang="ts">
  import { Indicator } from "$lib";
  import { type AvatarProps as Props, avatar } from ".";

  let { children, src, href, target, cornerStyle = "circular", border = false, stacked = false, dot, class: className, alt, size = "md", onclick, ...restProps }: Props = $props();

  dot = dot && { placement: "top-right", color: "gray", size: "lg", ...dot };

  let avatarClass = $derived(
    avatar({
      cornerStyle,
      border,
      stacked,
      size,
      className
    })
  );
</script>

{#if !src || !!href || children || dot}
  <svelte:element this={href ? "a" : "div"} role={href ? "link" : "img"} {onclick} {href} {target} {...restProps} class={avatarClass}>
    {#if src}
      <img {alt} {src} class={cornerStyle === "circular" ? "rounded-full" : "rounded"} />
    {:else if children}
      {@render children()}
    {:else}
      <svg class="h-full w-full {cornerStyle === 'circular' ? 'rounded-full' : 'rounded'}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
    {/if}
    {#if dot}
      <Indicator border offset={cornerStyle === "circular" ? true : false} {...dot} />
    {/if}
  </svelte:element>
{:else}
  <img {alt} {src} {...restProps} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:src: string;
@props:href: HTMLAnchorAttributes["href"];
@props:target: HTMLAnchorAttributes["target"];
@props:cornerStyle: "rounded" | "circular" = "circular";
@props:border: boolean = false;
@props:stacked: boolean = false;
@props:dot: object | undefined;
@props:class: string;
@props:alt: string;
@props:size: "xs" | "sm" | "md" | "lg" | "xl" = "md";
@props:onclick: () => void;
-->
