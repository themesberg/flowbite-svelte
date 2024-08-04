<script lang="ts">
  import { Indicator } from '$lib';
  import { twMerge } from 'tailwind-merge';
  import { avatarVariants, type AvatarProps as Props } from '.';

  let {
    children,
    src,
    href,
    rounded,
    border,
    stacked,
    dot,
    class: className,
    alt,
    size = 'md',
    onclick,
    ...attributes
  }: Props = $props();

  dot = dot && { placement: 'top-right', color: 'gray', size: 'lg', ...dot };

  let avatarClass = $derived(
    avatarVariants({
      rounded,
      border,
      stacked,
      size,
      className
    })
  );
</script>

{#if !src || !!href || children || dot}
  <svelte:element
    this={href ? 'a' : 'div'}
    role={href ? 'link' : 'img'}
    {onclick}
    {href}
    {...attributes}
    class={avatarClass}
  >
    {#if src}
      <img {alt} {src} class={rounded ? 'rounded' : 'rounded-full'} />
    {:else if children}
      {@render children()}
    {:else}
      <svg
        class="h-full w-full {rounded ? 'rounded' : 'rounded-full'}"
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    {/if}
    {#if dot}
      <Indicator border offset={rounded} {...dot} />
    {/if}
  </svelte:element>
{:else}
  <img {alt} {src} {...attributes} class={avatarClass} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop src
@prop href
@prop rounded
@prop border
@prop stacked
@prop dot
@prop class: className
@prop alt
@prop size = 'md'
@prop onclick
@prop ...attributes
-->
