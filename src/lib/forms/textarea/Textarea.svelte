<script lang="ts">
  import { type TextareaProps as Props, textarea } from '.';

  let { header, footer, value = $bindable(), divClass, innerClass, headerClass, footerClass, disabled, class: className, ...restProps }: Props = $props();

  let hasHeader = !!header;
  let hasFooter = !!footer;
  let wrapped: boolean = $state(false);
  if (header || footer) {
    wrapped = true;
  } else {
    wrapped = false;
  }

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({ wrapped, hasHeader, hasFooter }));
  $inspect('wrapped: ', wrapped);
</script>

<div class={wrapper({ class: divClass })}>
  {#if header}
    <div class={headerCls({ class: headerClass })}>
      {@render header()}
    </div>
  {/if}
  <div class={innerWrapper({ class: innerClass })}>
    <textarea bind:value {...restProps} class={base({ className })}></textarea>
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
@prop header
@prop footer
@prop value = $bindable()
@prop divClass
@prop innerClass
@prop headerClass
@prop footerClass
@prop disabled
@prop class: className
@prop ...restProps
-->
