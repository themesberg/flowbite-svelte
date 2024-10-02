<script lang="ts">
  import { type DropdownProps as Props, dropdown } from './';
  import { fly } from 'svelte/transition';
  import type { ParamsType } from '$lib/types';

  let { children, dropdownStatus = $bindable(), closeDropdown, class: className, backdropClass, params, transition = fly, ...restProps }: Props = $props();

  const { base, backdrop } = $derived(dropdown());
</script>

<!-- Dropdown menu -->
{#if dropdownStatus}
  <div {...restProps} class={base({ class: className })} transition:transition={params as ParamsType}>
    {@render children()}
  </div>

  <div role="presentation" class={backdrop({ class: backdropClass })} onclick={closeDropdown}></div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:dropdownStatus: any = $bindable();
@props:closeDropdown: any;
@props:class: any;
@props:backdropClass: any;
@props:params: any;
@props:transition: any = fly;
-->
