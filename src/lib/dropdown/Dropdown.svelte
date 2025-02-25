<script lang="ts">
  import Popper from "$lib/utils/Popper.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { type DropdownProps as Props, dropdown } from "./";

  let { children, arrow = false, placement = "bottom", offset = 2, class: className, backdropClass, activeUrl = "", ...restProps }: Props = $props();

  const { base, backdrop } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {arrow} {placement} {offset} class={base({ class: className })}>
  {@render children()}
</Popper>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:arrow: any = false;
@props:placement: any = "bottom";
@props:offset: any = 2;
@props:class: string;
@props:backdropClass: any;
@props:activeUrl: any = "";
-->
