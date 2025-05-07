<script lang="ts">
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalTheme } from ".";
  import type { ModalProps } from "$lib/types";

  // TODO: missing focus trap

  let { children, oncancel, modal = true, autoclose = false, header, footer, title, open = $bindable(false), dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params, transition = fade, ...restProps }: ModalProps = $props();

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(params ?? paramsDefault);

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
  <dialog bind:this={dlg} {...restProps} class={base({ class: clsx(className) })} tabindex="-1" oncancel={_oncancel} onclick={_onclick} transition:transition={paramsOptions as ParamsType} onintrostart={() => (modal ? dlg?.showModal() : dlg?.show())} onoutroend={() => dlg?.close()}>
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

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L924)
## Props
@prop children
@prop oncancel
@prop modal = true
@prop autoclose = false
@prop header
@prop footer
@prop title
@prop open = $bindable(false)
@prop dismissable = true
@prop closeBtnClass
@prop headerClass
@prop bodyClass
@prop footerClass
@prop outsideclose = true
@prop size = "md"
@prop placement
@prop class: className
@prop params
@prop transition = fade
@prop ...restProps
-->
