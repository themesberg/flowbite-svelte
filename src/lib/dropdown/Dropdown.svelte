<script lang="ts">
  import Popper from "$lib/utils/Popper.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { dropdown } from "./";
  import type { DropdownProps } from "$lib/types";
  import DropdownGroup from "./DropdownGroup.svelte";
  import clsx from "clsx";

  let { children, simple = false, placement = "bottom", offset = 2, class: className, backdropClass, activeUrl = "", ...restProps }: DropdownProps = $props();

  const { base, backdrop } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {placement} {offset} class={base({ class: clsx(className) })}>
  {#if simple}
    <DropdownGroup>
      {@render children()}
    </DropdownGroup>
  {:else}
    {@render children()}
  {/if}
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[DropdownProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L557)
## Props
@prop children
@prop simple = false
@prop placement = "bottom"
@prop offset = 2
@prop class: className
@prop backdropClass
@prop activeUrl = ""
@prop ...restProps
-->
