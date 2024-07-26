<script lang="ts">
  import { cn } from "../utils";
  import { badgeVariants, type badgeColor } from './index';
  import type { Snippet } from 'svelte';
  import { CloseButton } from '$lib';
  // import type { ColorVariant } from '../types';
  import { fade, type TransitionConfig } from 'svelte/transition';
  import type { HTMLAttributes } from 'svelte/elements';
 
  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    icon?: Snippet;
    badgeStatus?: boolean;
    color?: badgeColor;
    large?: boolean;
    dismissable?: boolean;
    class?: string | undefined | null;
    border?: boolean;
    href?: string | undefined | null;
    rounded?: boolean;
    transition?: TransitionFunc;
    params?: any;
    onclick?: () => void;
  }
  let {
    children,
    icon,
    badgeStatus = $bindable(true),
    color = 'primary',
    large = false,
    dismissable = false,
    class: className,
    border,
    href,
    rounded,
    transition = fade,
    params,
    onclick,
    ...attributes
  }: Props = $props();

  // let badgeStatus: boolean = $state(true);

  let badgeClass = cn(badgeVariants({ 
    color, 
    size: large ? 'large' : 'small', 
    border,
    rounded,
    className
  }));
  // $inspect('badgeStatus: ', badgeStatus);
</script>

{#if badgeStatus}
  <div {...attributes} transition:transition={params} class={badgeClass}>
    {#if href}
      <a {href}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}

    {#if dismissable}
      {#if icon}
        <button
          type="button"
          class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300"
          aria-label="Remove badge"
          onclick={() => {
            badgeStatus = false;
          }}
          ><span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else}
        {#if onclick}
          <CloseButton
            class="-me-1.5 ms-1.5"
            {color}
            size={large ? 'sm' : 'xs'}
            ariaLabel="Remove badge"
            onclick={onclick}
          />
        {:else}
          <CloseButton
            class="-me-1.5 ms-1.5"
            {color}
            size={large ? 'sm' : 'xs'}
            ariaLabel="Remove badge"
            onclick={() => {
              badgeStatus = false;
            }}
          />
        {/if}
      {/if}
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop color = 'primary'
@prop large = false
@prop dismissable = false
@prop class: divClass
@prop border
@prop href
@prop rounded
@prop transition = fade
@prop params
@prop onclick
@prop ...attributes
-->
