<script lang="ts">
  import { fly, slide, blur, fade } from 'svelte/transition';
  import { type DropdownProps as Props, dropdown } from './';

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
    backdropClass,
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
  const { base, ul, headerDiv, footerDiv, backdrop } = $derived(dropdown());
</script>

<!-- Dropdown menu -->
{#if dropdownStatus}
  <div {...attributes} class={base({ class: divClass })} transition:multiple={transitionParams}>
    {#if header}
      <div class={headerDiv({ class: headerClass })}>
        {@render header()}
      </div>
    {/if}

    <ul class={ul({ class: ulClass })}>
      {@render children()}
    </ul>

    {#if footer}
      <div class={footerDiv({ class: footerClass })}>
        {@render footer()}
      </div>
    {/if}
  </div>

  <div
    role="presentation"
    class={backdrop({ class: backdropClass })}
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
