<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { type ModalProps as Props, modal } from ".";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import clsx from "clsx";

  // TODO: missing focus trap

  let { children, header, footer, title, open = $bindable(false), dismissable = true, divClass, contentClass, closeBtnClass, h3Class, headerClass, bodyClass, footerClass, outsideClose = true, size = "md", backdrop = true, backdropClass, placement, class: className, params = { duration: 100, easing: sineIn }, transition = fade, rounded, ...restProps }: Props = $props();

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
      placement,
      size,
      backdrop,
      rounded
    })
  );

  function closeModal(ev: KeyboardEvent | MouseEvent) {
    if (ev instanceof KeyboardEvent && ev.key !== "Escape") return;
    open = false;
  }
</script>

<svelte:window onkeydown={open ? closeModal : undefined} />

{#if open}
  <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={outsideClose ? closeModal : undefined}></div>
  <div {...restProps} class={base({ class: clsx(className) })} transition:transition={params as ParamsType} tabindex="-1">
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
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:header: any;
@props:footer: any;
@props:title: any;
@props:open: any = $bindable(false);
@props:dismissable: any = true;
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
@props:placement: any;
@props:class: string;
@props:params: any = { duration: 100;
@props:easing: any;
@props:transition: any = fade;
@props:rounded: any;
-->
