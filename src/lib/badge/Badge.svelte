<script lang="ts">
  import { type BadgeProps as Props, badge } from './index';
  import { CloseButton } from '$lib';
  import { fade } from 'svelte/transition';
  import type { ParamsType } from '$lib/types';

  let { children, icon, badgeStatus = $bindable(true), color = 'primary', large = false, dismissable = false, class: className, border, href, rounded, transition = fade, params, aClass, onclick, ...restProps }: Props = $props();

  const{base, hrefClass} = $derived(
    badge({ color, size: large ? 'large' : 'small', border, rounded }));
  // $inspect('badgeStatus: ', badgeStatus);
</script>

{#if badgeStatus}
  <div {...restProps} transition:transition={params as ParamsType} class={base({className})}>
    {#if href}
      <a {href} class={hrefClass({class: aClass})}>
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
        >
          <span class="sr-only">Remove badge</span>
          {@render icon()}
        </button>
      {:else if onclick}
        <CloseButton class="-me-1.5 ms-1.5" {color} size={large ? 'sm' : 'xs'} ariaLabel="Remove badge" {onclick} />
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
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop badgeStatus = $bindable(true)
@prop color = 'primary'
@prop large = false
@prop dismissable = false
@prop class: className
@prop border
@prop href
@prop rounded
@prop transition = fade
@prop params
@prop onclick
@prop ...restProps
-->
