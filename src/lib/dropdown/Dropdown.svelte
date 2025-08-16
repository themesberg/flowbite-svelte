<script lang="ts">
  import { DropdownGroup, type DropdownProps, Popper } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { dropdown } from "./";

  let { children, simple = false, placement = "bottom", offset = 2, class: className, activeUrl = "", isOpen = $bindable(false), ...restProps }: DropdownProps = $props();

  const theme = getTheme("dropdown");

  const base = $derived(dropdown({ class: clsx(theme, className) }));
  const activeUrlStore = $state({ value: "" });
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.value = activeUrl ?? "";
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
[DropdownProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L586)
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
