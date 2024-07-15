<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLLiAttributes } from 'svelte/elements';

  interface Props extends HTMLLiAttributes{
    children?: Snippet;
    titleSlot?: Snippet;
    open?: boolean;
    title?: string | undefined | null;
    activeClasses?: string | undefined | null;
    inactiveClasses?: string | undefined | null;
    defaultClass?: string | undefined | null;
    class?: string | undefined | null;
    disabled?: boolean;
  }

  let {
    children,
    titleSlot,
    open = false,
    title = 'Tab title',
    activeClasses,
    inactiveClasses,
    defaultClass,
    class: className,
    disabled,
    ...attributes
  }: Props = $props();

  let defaultCls: string = twMerge(
    'inline-block text-sm font-medium text-center disabled:cursor-not-allowed',
    defaultClass
  );

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);

    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        open = false;
      }
    });

    return { destroy };
  }
  let buttonClass = $state('');
  $effect(() => {
    buttonClass = twMerge(
      defaultCls,
      open
        ? (activeClasses ?? ctx.activeClasses)
        : (inactiveClasses ?? ctx.inactiveClasses),
      open && 'active'
    );
  });
</script>

<li class={twMerge('group', className)} role="presentation" {...attributes}>
  <button
    type="button"
    onclick={() => (open = true)}
    role="tab"
    {disabled}
    class={buttonClass}
  >
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>

  {#if open && children}
    <div class="tab_content_placeholder hidden">
      <div use:init>
        {@render children()}
      </div>
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop titleSlot
@prop open = false
@prop title = 'Tab title'
@prop activeClasses
@prop inactiveClasses
@prop defaultClass
@prop class: className
@prop disabled
@prop ...attributes
-->
