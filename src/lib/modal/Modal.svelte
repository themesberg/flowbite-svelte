<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { type ModalProps as Props, modal as modalTheme } from ".";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import clsx from "clsx";

  // TODO: missing focus trap

  let {
    children,
    oncancel,
    modal = true,
    autoclose = false,
    header,
    footer,
    title,
    open = $bindable(false),
    dismissable = true,
    divClass,
    contentClass,
    closeBtnClass,
    h3Class,
    headerClass,
    bodyClass,
    footerClass,
    outsideClose = true,
    size = "md",
    placement,
    class: className,
    params = { duration: 100, easing: sineIn },
    transition = fade,
    ...restProps
  }: Props = $props();

  const { base, content, header: headerCls, footer: footerCls, body, closeBtn, h3 } = $derived(modalTheme({ placement, size }));

  const closeModal = () => (open = false);

  function _oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    // this event get called when user press ESC key
    if (ev.currentTarget instanceof HTMLDialogElement) {
      oncancel?.(ev); // propagate the event to the user
      // if user cancels the event we don't close the modal
      if (ev.defaultPrevented) return;
      // now we cancel the event to keep control on closing the modal
      ev.preventDefault();
      // and close it manually
      closeModal();
    }
  }

  function _onclick(ev: Event & { currentTarget: HTMLDialogElement }) {
    if (ev.currentTarget instanceof HTMLDialogElement) {
      if (outsideClose && ev.target === ev.currentTarget) {
        closeModal();
      }
      if (autoclose && ev.target !== ev.currentTarget) {
        closeModal();
      }
    }
  }

  let dlg: HTMLDialogElement | undefined = $state();
</script>

{#if open}
  <dialog
    bind:this={dlg}
    {...restProps}
    class={base({ class: clsx(className) })}
    tabindex="-1"
    oncancel={_oncancel}
    onclick={_onclick}
    transition:transition={params as ParamsType}
    onintrostart={() => dlg?.showModal()}
    onoutroend={() => dlg?.close()}
  >
    <div class={content({ class: clsx(className) })}>
      {#if title || header}
        <div class={headerCls({ class: contentClass })}>
          {#if title}
            <h3 class={h3({ class: h3Class })}>
              {title}
            </h3>
          {:else if header}
            {@render header()}
          {/if}
        </div>
      {/if}
      <div class={body({ class: bodyClass })}>
        {@render children?.()}
      </div>
      {#if footer}
        <div class={footerCls({ class: footerClass })}>
          {@render footer()}
        </div>
      {/if}
      {#if dismissable}
        <CloseButton onclick={closeModal} class={closeBtn({ class: closeBtnClass })} />
      {/if}
    </div>
  </dialog>
{/if}
<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
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

<!-- <style>
  :global(::backdrop) {
    /* background-color: pink; */
  }
</style> -->
