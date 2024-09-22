<script lang="ts">
  import type { ParamsType } from '$lib/types';
  import CloseButton from '$lib/utils/CloseButton.svelte';
  import { type ModalProps as Props, modal } from '.';
  import { fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  let { children, header, footer, title, modalStatus, dismissable = true, closeModal, divClass, contentClass, closeBtnClass, h3Class, headerClass, bodyClass, footerClass, outsideClose = true, size = 'md', backdrop = true, backdropClass, position = 'center', class: className, params = { duration: 100, easing: sineIn }, transition = fade, rounded = true, shadow = true, ...restProps }: Props = $props();

  const {
    base,
    div,
    content,
    backdrop: backdropCls,
    header: headerCls,
    footer: footerCls,
    body,
    closeBtn,
    h3
  } = $derived(
    modal({
      position,
      size,
      backdrop,
      rounded
    })
  );
</script>

{#if modalStatus}
  {#if backdrop && outsideClose}
    <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeModal}></div>
  {:else if backdrop && !outsideClose}
    <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
  {:else if !backdrop && outsideClose}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeModal}></div>
  {:else if !backdrop && !outsideClose}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
  {/if}
  <div {...restProps} class={base({ className })} transition:transition={params as ParamsType} tabindex="-1">
    <div class={div({ class: divClass })}>
      <div class={content({ class: contentClass })}>
        {#if title || header}
          <div class={headerCls({ class: headerClass })}>
            {#if title}
              <h3 class={h3({ class: h3Class })}>
                {title}
              </h3>
            {:else if header}
              {@render header()}
            {/if}
            {#if dismissable}
              <CloseButton onclick={closeModal} class={closeBtn({ class: closeBtnClass })} />
            {/if}
          </div>
        {/if}
        <div class={body({ class: bodyClass })}>
          {#if dismissable && !title && !header}
            <CloseButton onclick={closeModal} class={closeBtn({ class: closeBtnClass })} />
          {/if}
          {@render children()}
        </div>
        {#if footer}
          <div class={footerCls({ class: footerClass })}>
            {@render footer()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop drawerStatus
@prop toggleDrawer
@prop closeDrawer
@prop outsideClose = true
@prop position
@prop width
@prop backdrop = true
@prop backdropClass
@prop placement = 'left'
@prop class: divClass
@prop transitionParams
@prop transitionType = 'fly'
@prop ...restProps
-->
