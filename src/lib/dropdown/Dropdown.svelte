<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import type { TransitionParamTypes, TransitionTypes } from '../types';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    header?: Snippet;
    footer?: Snippet;
    dropdownStatus: boolean;
    toggleDropdown?: () => void;
    closeDropdown?: () => void;
    activateClickOutside?: boolean;
    divClass?: string;
    footerClass?: string;
    headerClass?: string;
    ulClass?: string;
    transitionParams?: TransitionParamTypes;
    transitionType?: TransitionTypes;
  }

  let {
    children,
    header,
    footer,
    dropdownStatus,
    toggleDropdown,
    closeDropdown,
    activateClickOutside = true,
    divClass,
    footerClass,
    headerClass,
    ulClass,
    transitionParams,
    transitionType = 'fly',
    ...attributes
  }: Props = $props();

  function multiple(node: HTMLElement, params: any) {
    switch (transitionType) {
      case 'slide':
        return slide(node, params);
      case 'blur':
        return blur(node, params);
      case 'fade':
        return fade(node, params);
      default:
        return fly(node, params);
    }
  }

  const divCls = $derived(
    twMerge(
      'z-10 w-44 mt-2 divide-y divide-gray-300 dark:divide-gray-500 overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700',
      divClass
    )
  );
  const headerCls = twMerge(
    'px-4 py-3 text-sm text-gray-900 dark:text-white',
    headerClass
  );
  const ulCls = twMerge(
    'py-2 text-sm text-gray-700 dark:text-gray-200',
    ulClass
  );
  const footerCls = twMerge('overflow-hidden rounded-b-lg py-1', footerClass);
  const backdropDivClass = 'fixed top-0 start-0 w-full h-full';
</script>

<!-- Dropdown menu -->
{#if dropdownStatus}
  <div {...attributes} class={divCls} transition:multiple={transitionParams}>
    {#if header}
      <div class={headerCls}>
        {@render header()}
      </div>
    {/if}

    <ul class={ulCls}>
      {@render children()}
    </ul>

    {#if footer}
      <div class={footerCls}>
        {@render footer()}
      </div>
    {/if}
  </div>

  <div
    role="presentation"
    class={backdropDivClass}
    onclick={closeDropdown}
  ></div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop header
@prop footer
@prop dropdownStatus
@prop toggleDropdown
@prop closeDropdown
@prop activateClickOutside = true
@prop divClass
@prop footerClass
@prop headerClass
@prop ulClass
@prop transitionParams
@prop transitionType = 'fly'
@prop ...attributes
-->
