<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { dropdown } from "./";
  import { type DropdownProps, Popper, cn, DropdownGroup } from "$lib";

  let { children, simple = false, placement = "bottom", offset = 2, class: className, activeUrl = "", isOpen = $bindable(false), ...restProps }: DropdownProps = $props();

  const { base, backdrop } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {placement} {offset} bind:isOpen class={cn(base(), className)}>
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
[DropdownProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L596)
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
