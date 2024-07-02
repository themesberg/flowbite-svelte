<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import type {
    TransitionParamTypes,
    TransitionTypes
  } from '../types';

  interface Props {
    children: Snippet;
    header?: Snippet;
    footer?: Snippet;

    dropdownStatus: boolean;
    toggleDropdown?: () => void;
    closeDropdown?: () => void;
    activateClickOutside?: boolean ;

    divClass?: string ;
    footerclass?: string ;
    headerclass?: string ;
    ulclass?: string ;
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
    footerclass,
    headerclass,
    ulclass,
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
    headerclass
  );
  const ulCls = twMerge(
    'py-2 text-sm text-gray-700 dark:text-gray-200',
    ulclass
  );
  const footerCls = twMerge('overflow-hidden rounded-b-lg py-1', footerclass);
  const backdropDivClass = 'fixed top-0 start-0 w-full h-full'

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


<div role="presentation" class={backdropDivClass} onclick={closeDropdown} ></div>
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
@prop footerclass
@prop headerclass
@prop ulclass
@prop transitionParams
@prop transitionType = 'fly'
@prop ...attributes
-->
