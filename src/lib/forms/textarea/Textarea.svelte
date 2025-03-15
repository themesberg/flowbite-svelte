<script lang="ts">
  import clsx from "clsx";
  import { type TextareaProps as Props, textarea } from ".";

  let { header, footer, value = $bindable(), innerClass, headerClass, footerClass, disabled, class: className, cols, ...restProps }: Props = $props();

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let wrapped: boolean = $derived(hasHeader || hasFooter);

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));
  // $inspect('wrapped: ', wrapped);
</script>

{#if !wrapped}
  <textarea bind:value {disabled} {...restProps} class={wrapper({ class: clsx(className) })}></textarea>
{:else}
  <div class={wrapper({ class: clsx(className) })}>
    {#if header}
      <div class={headerCls({ class: headerClass })}>
        {@render header()}
      </div>
    {/if}
    <div class={innerWrapper({ class: innerClass })}>
      <textarea bind:value {disabled} {...restProps} class={base()}></textarea>
    </div>
    {#if footer}
      <div class={footerCls({ class: footerClass })}>
        {@render footer()}
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: header: any;
@props:footer: any;
@props:value: any = $bindable();
@props:innerClass: any;
@props:headerClass: any;
@props:footerClass: any;
@props:disabled: any;
@props:class: string;
@props:cols: any;
-->
