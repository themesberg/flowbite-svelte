<script lang="ts">
  import { type DropdownProps as Props, dropdown } from "./";
  import { fly } from "svelte/transition";
  import type { ParamsType } from "$lib/types";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let { children, dropdownStatus = $bindable(), closeDropdown, class: className, backdropClass, params, transition = fly, activeUrl = "", ...restProps }: Props = $props();

  const { base, backdrop } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
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
@props: children: Snippet;
@props:dropdownStatus: boolean = $bindable();
@props:closeDropdown: () => void;
@props:class: string;
@props:backdropClass: string;
@props:params: ParamsType;
@props:transition: TransitionFunc = fly;
@props:activeUrl: string = '';
-->
