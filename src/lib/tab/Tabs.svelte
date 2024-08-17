<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import { setContext } from 'svelte';
  import { type TabsProps as Props, type TabCtxType, tabs } from '.';

  let {
    children,
    tabStyle = 'none',
    ulClass,
    contentClass,
    divider = true,
    activeClass,
    inactiveClass,
    class: classname,
    ...attributes
  }: Props = $props();

  const {
    base,
    content,
    divider: dividerClass,
    active,
    inactive
  } = $derived(tabs({ tabStyle, hasDivider: divider }));

  const ctx: TabCtxType = $derived({
    activeClass: active(),
    inactiveClass: inactive(),
    selected: writable<HTMLElement>()
  });

  let dividerBool = $derived(
    ['full', 'pill'].includes(tabStyle) ? false : divider
  );
  
  setContext('ctx', ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });
    return { destroy };
  }
</script>

<ul class={base({ class: ulClass })} {...attributes}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass()}></div>
{/if}
<div
  class={content({ class: contentClass })}
  role="tabpanel"
  aria-labelledby="id-tab"
  use:init
></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tabStyle = 'none'
@prop ulClass
@prop contentClass
@prop divider = true
@prop activeClass
@prop inactiveClass
@prop class: classname
@prop ...attributes
-->
