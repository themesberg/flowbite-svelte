<script lang="ts">
  import { type SidebarCtaProps as Props, sidebarcta } from ".";
  let { children, icon, divClass, spanClass, label, class: className, ...restProps }: Props = $props();
  const { base, div, span } = $derived(sidebarcta());
</script>

<div {...restProps} id="dropdown-cta" class={base({ className })} role="alert">
  <div class={div({ class: divClass })}>
    <span class={span({ class: spanClass })}>{label}</span>
    {#if icon}
      {@render icon()}
    {/if}
  </div>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: children: any;
@props:icon: any;
@props:divClass: any;
@props:spanClass: any;
@props:label: any;
@props:class: string;
-->
