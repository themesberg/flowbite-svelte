<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { dropdown } from "./";
  import clsx from "clsx";
  import { type DropdownProps, Popper, DropdownGroup } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, simple = false, placement = "bottom", offset = 2, class: className, activeUrl = "", isOpen = $bindable(false), ...restProps }: DropdownProps = $props();

  const theme = getTheme("dropdown");

  const base = $derived(dropdown({ class: clsx(theme, className) }));
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {placement} {offset} bind:isOpen class={base}>
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L582)
## Props
@prop children
@prop simple = false
@prop placement = "bottom"
@prop offset = 2
@prop class: className
@prop activeUrl = ""
@prop isOpen = $bindable(false)
@prop ...restProps
-->
