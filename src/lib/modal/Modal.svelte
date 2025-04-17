<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { type ModalProps as Props, modal as modalTheme } from ".";

  // TODO: missing focus trap

  let { children, oncancel, modal = true, autoclose = false, header, footer, title, open = $bindable(false), dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params = { duration: 100, easing: sineIn }, transition = fade, ...restProps }: Props = $props();

  const { base, header: headerCls, footer: footerCls, body, closeBtn } = $derived(modalTheme({ placement, size }));

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
      if (outsideclose && ev.target === ev.currentTarget) {
        closeModal();
      }
      if (autoclose && ev.target instanceof HTMLButtonElement) {
        closeModal();
      }
    }
  }

  let dlg: HTMLDialogElement | undefined = $state();
</script>

{#if open}
  <dialog bind:this={dlg} {...restProps} class={base({ class: clsx(className) })} tabindex="-1" oncancel={_oncancel} onclick={_onclick} transition:transition={params as ParamsType} onintrostart={() => (modal ? dlg?.showModal() : dlg?.show())} onoutroend={() => dlg?.close()}>
    {#if title || header}
      <div class={headerCls({ class: headerClass })}>
        {#if title}
          <h3>{title}</h3>
        {:else if header}
          {@render header()}
        {/if}
        <!-- {#if dismissable}
          <CloseButton onclick={closeModal} class={closeBtnClass} tabindex={-1} />
        {/if} -->
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
  </dialog>
{/if}
<!-- <style>
  :global(::backdrop) {
    /* background-color: pink; */
  }
</style> -->

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: 
-->
