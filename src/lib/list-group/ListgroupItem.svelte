<script lang="ts">
  import { getContext } from "svelte";
  import { type ListgroupItemProps as Props } from "./type";
  import { type ListgroupItemVariants, listGroupItem } from "./theme";
  import clsx from "clsx";

  let { children, active, current, disabled, horizontal, name, Icon, class: className, iconClass = "me-2.5 h-5 w-5", ...restProps }: Props = $props();

  active = active ?? getContext("active");

  let state: ListgroupItemVariants["state"] = $derived(disabled ? "disabled" : current ? "current" : "normal");
  let itemClass = $derived(listGroupItem({ state, active, horizontal, class: clsx(className) }));
</script>

{#snippet nameOrChildren()}
  {#if Icon}
    <Icon class={iconClass} />
  {/if}
  {#if children}
    {@render children()}
  {:else}
    {name}
  {/if}
{/snippet}

{#if restProps.href === null && !active}
  <li class={itemClass}>
    {@render nameOrChildren()}
  </li>
{:else if restProps.href === null}
  <button type="button" {...restProps} class={itemClass} {disabled} aria-current={current}>
    {@render nameOrChildren()}
  </button>
{:else}
  <a {...restProps} class={itemClass} aria-current={current}>
    {@render nameOrChildren()}
  </a>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:active: any;
@props:current: any;
@props:disabled: any;
@props:horizontal: any;
@props:name: any;
@props:Icon: any;
@props:class: string;
@props:iconClass: any = "me-2.5 h-5 w-5";
-->
