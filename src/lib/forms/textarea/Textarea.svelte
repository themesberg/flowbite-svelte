<script lang="ts">
  import { type TextareaProps as Props, textarea } from ".";

  let { header, footer, value = $bindable(), divClass, innerClass, headerClass, footerClass, disabled, class: className, cols, ...restProps }: Props = $props();

  let hasHeader = !!header;
  let hasFooter = !!footer;
  let wrapped: boolean = $state(false);
  if (header || footer) {
    wrapped = true;
  } else {
    wrapped = false;
  }

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));
  // $inspect('wrapped: ', wrapped);
</script>

<div class={wrapper({ class: divClass })}>
  {#if header}
    <div class={headerCls({ class: headerClass })}>
      {@render header()}
    </div>
  {/if}
  <div class={innerWrapper({ class: innerClass })}>
    <textarea bind:value {disabled} {...restProps} class={base({ className })}></textarea>
  </div>
  {#if footer}
    <div class={footerCls({ class: footerClass })}>
      {@render footer()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: header: any;
@props:footer: any;
@props:value: any = $bindable();
@props:divClass: any;
@props:innerClass: any;
@props:headerClass: any;
@props:footerClass: any;
@props:disabled: any;
@props:class: string;
@props:cols: any;
-->
