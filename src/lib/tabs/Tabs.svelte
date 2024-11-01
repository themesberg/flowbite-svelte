<script lang="ts">
  import { writable } from "svelte/store";
  import { setContext } from "svelte";
  import { type TabsProps as Props, type TabCtxType, tabs } from ".";

  let { children, tabStyle = "none", ulClass, contentClass, divider = true, ...restProps }: Props = $props();

  // using $derived() shows State referenced in its own scope will never update. Did you mean to reference it inside a closure?
  const { base, content, divider: dividerClass } = $derived(tabs({ tabStyle, hasDivider: divider }));

  const ctx: TabCtxType = {
    get tabStyle() {
      return tabStyle;
    },
    selected: writable<HTMLElement>()
  };

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  setContext("ctx", ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });
    return { destroy };
  }
</script>

<ul {...restProps} class={base({ class: ulClass })}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass()}></div>
{/if}
<div class={content({ class: contentClass })} role="tabpanel" aria-labelledby="id-tab" use:init></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:tabStyle: "full" | "pill" | "underline" | "none" = "none";
@props:ulClass: string;
@props:ctxActive: string;
@props:ctxInactive: string;
@props:contentClass: string;
@props:divider: boolean = true;
-->
