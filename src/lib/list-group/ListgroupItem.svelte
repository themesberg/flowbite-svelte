<script lang="ts">
  import { getContext } from "svelte";
  import { type ListgroupItemProps, cn } from "$lib";
  import { listGroupItem, type ListgroupItemVariants } from "./theme";

  let { children, active, current, disabled, horizontal, name, Icon, class: className, iconClass = "me-2.5 h-15 w-15", ...restProps }: ListgroupItemProps = $props();

  active = active ?? getContext("listGrpActive");
  horizontal = horizontal ?? getContext("listGrpHorizontal");

  let state: ListgroupItemVariants["state"] = $derived(disabled ? "disabled" : current ? "current" : "normal");
  let itemClass = $derived(listGroupItem({ state, active, horizontal }));
</script>

{#snippet nameOrChildren()}
  {#if Icon}
    <Icon class={cn(iconClass)} />
  {/if}
  {#if children}
    {@render children()}
  {:else}
    {name}
  {/if}
{/snippet}

{#if restProps.href === undefined && !active}
  <li class={cn(itemClass, className)}>
    {@render nameOrChildren()}
  </li>
{:else if restProps.href === undefined}
  <button type="button" {...restProps} class={cn(itemClass, className)} {disabled} aria-current={current}>
    {@render nameOrChildren()}
  </button>
{:else}
  <a {...restProps} class={cn(itemClass, className)} aria-current={current}>
    {@render nameOrChildren()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListgroupItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1044)
## Props
@prop children
@prop active
@prop current
@prop disabled
@prop horizontal
@prop name
@prop Icon
@prop class: className
@prop iconClass = "me-2.5 h-15 w-15"
@prop ...restProps
-->
