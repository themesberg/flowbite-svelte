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

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({  wrapped, hasHeader, hasFooter}));
  $inspect('wrapped: ', wrapped);
</script>

<div class={wrapper({ class: divClass })}>
  {#if header}
    <div class={headerCls({ class: headerClass})}>
      {@render header()}
    </div>
  {/if}
  <div class={innerWrapper({ class: innerClass })}>
    <textarea bind:value {...restProps} class={base({ className })}></textarea>
  </div>
  {#if footer}
    <div class={footerCls({ class: footerClass})}>
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
@prop value
@prop wrappedClass = 'block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50'
@prop unWrappedClass = 'p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50'
@prop innerWrappedClass = 'py-2 px-4 bg-white dark:bg-gray-800'
@prop headerClass = ''
@prop footerClass = ''
@prop class: className = ''
@prop ...restProps
-->
