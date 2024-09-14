<script lang="ts">
  import { getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { type TabitemProps as Props, type TabCtxType, tabItem, tabs } from '.';

  let { children, titleSlot, open = false, title = 'Tab title', activeClass, inactiveClass, class: className, disabled, tabStyle, ...restProps }: Props = $props();

  const ctx: TabCtxType = getContext('ctx');
  let compoTabStyle = $derived(tabStyle ? tabStyle : ctx.tabStyle || 'full');
  // console.log('tabStyle in TabItem', ctx);
  const { active, inactive } = $derived(tabs({ tabStyle: compoTabStyle, hasDivider: true }));
  // const tableCtx: TableCtxType = getContext('tableCtx');
  // let compoColor = $derived(color ? color : tableCtx.color || 'default');
  
  // $inspect('ctx from item: ', ctx);
  let selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);

    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        open = false;
      }
    });

    return { destroy };
  }

  const { base, button, content } = $derived(tabItem({ open, disabled }));
</script>

<li class={base({ class: className })} role="presentation" {...restProps}>
  <button
    type="button"
    onclick={() => (open = true)}
    role="tab"
    {disabled}
    class={button({
      class: open ? (activeClass ?? active()) : (inactiveClass ?? inactive())
    })}
  >
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>

  {#if open && children}
    <div class={content()}>
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
@prop activeClass
@prop inactiveClass
@prop class: className
@prop disabled
@prop ...restProps
-->
