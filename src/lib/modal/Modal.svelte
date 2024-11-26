<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { type ModalProps as Props, modal } from ".";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";

  let { children, header, footer, title, modalStatus, dismissable = true, closeModal, divClass, contentClass, closeBtnClass, h3Class, headerClass, bodyClass, footerClass, outsideClose = true, size = "md", backdrop = true, backdropClass, position = "center", class: className, params = { duration: 100, easing: sineIn }, transition = fade, rounded = true, ...restProps }: Props = $props();

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
@props: children: any;
@props:header: any;
@props:footer: any;
@props:title: any;
@props:modalStatus: any;
@props:dismissable: any = true;
@props:closeModal: any;
@props:divClass: any;
@props:contentClass: any;
@props:closeBtnClass: any;
@props:h3Class: any;
@props:headerClass: any;
@props:bodyClass: any;
@props:footerClass: any;
@props:outsideClose: any = true;
@props:size: any = "md";
@props:backdrop: any = true;
@props:backdropClass: any;
@props:position: any = "center";
@props:class: string;
@props:params: any = { duration: 100;
@props:easing: any;
@props:transition: any = fade;
@props:rounded: any = true;
-->
