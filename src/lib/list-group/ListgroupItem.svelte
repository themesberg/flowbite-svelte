<script lang="ts">
  import type { HTMLLiAttributes } from "svelte/elements";
  import clsx from "clsx";
  import type { ListgroupItemProps } from "$lib";
  import { listGroupItem, type ListgroupItemVariants } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { getListGroupContext } from "$lib/context";

  let { children, active, current, disabled, horizontal, name, Icon, class: className, classes, href, type, ...restProps }: ListgroupItemProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("listGroupItem"));

  const listGroupCtx = getListGroupContext();
  const finalActive = $derived(active ?? listGroupCtx?.active);
  const finalHorizontal = $derived(horizontal ?? listGroupCtx?.horizontal);

  let state: ListgroupItemVariants["state"] = $derived(disabled ? "disabled" : current ? "current" : "normal");
  const { base, icon } = $derived(listGroupItem({ state, active: finalActive, horizontal: finalHorizontal }));
</script>

{#snippet nameOrChildren()}
  {#if Icon}
    <Icon class={icon({ class: clsx(theme?.icon, styling?.icon) })} />
  {/if}
  {#if children}
    {@render children()}
  {:else}
    {name}
  {/if}
{/snippet}

{#if href === undefined && !active}
  <li data-scope="listgroup-item" data-part="base" {...restProps as HTMLLiAttributes} class={base({ class: clsx(theme?.base, className) })}>
    {@render nameOrChildren()}
  </li>
{:else if href === undefined}
  <button data-scope="listgroup-item" data-part="base" type={type ?? "button"} {...restProps} class={base({ class: clsx(theme?.base, className) })} {disabled} aria-current={current}>
    {@render nameOrChildren()}
  </button>
{:else}
  <a data-scope="listgroup-item" data-part="base" {href} {...restProps} class={base({ class: clsx(theme?.base, className) })} aria-current={current}>
    {@render nameOrChildren()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListgroupItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1046)
## Props
@prop children
@prop active
@prop current
@prop disabled
@prop horizontal
@prop name
@prop Icon
@prop class: className
@prop classes
@prop href
@prop type
@prop ...restProps
-->
