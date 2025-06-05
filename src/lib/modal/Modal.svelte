<script lang="ts">
  import { type ParamsType, type ModalProps, CloseButton, trapFocus } from "$lib";
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalTheme } from ".";

  let { children, oncancel, onclose, modal = true, autoclose = false, header, footer, title, open = $bindable(false), permanent = false, dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params, transition = fade, ...restProps }: ModalProps = $props();

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(params ?? paramsDefault);

  const { base, header: headerCls, footer: footerCls, body, closeBtn } = $derived(modalTheme({ placement, size }));

  const closeModal = () => {
    // Only close if not permanent
    if (!permanent) {
      open = false;
      onclose?.();
    }
  };

  function _oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    // this event gets called when user presses ESC key
    // We'll handle ESC via the trapFocus action instead
    if (ev.currentTarget instanceof HTMLDialogElement) {
      // Stop the default ESC handling from dialog element
      // as we're handling it in our trapFocus action
      ev.preventDefault();
      oncancel?.(ev); // propagate the event to the user
    }
  }

  function _onclick(ev: Event & { currentTarget: HTMLDialogElement }) {
    if (ev.currentTarget instanceof HTMLDialogElement) {
      if (outsideclose && ev.target === ev.currentTarget && !permanent) {
        closeModal();
      }
      if (autoclose && ev.target instanceof HTMLButtonElement && !permanent) {
        closeModal();
      }
    }
  }

  let dlg: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (permanent && !open) {
      open = true;
    }
  });

  // Handler for Escape key that respects component state
  const handleEscape = () => {
    if (!permanent) {
      oncancel?.({ currentTarget: dlg } as any);
      // If oncancel prevented default, we don't close
      if (oncancel && event?.defaultPrevented) return;
      closeModal();
    }
  };
</script>

{#if open}
  <dialog use:trapFocus={{ onEscape: handleEscape }} bind:this={dlg} {...restProps} class={twMerge(base(), clsx(className))} tabindex="-1" oncancel={_oncancel} onclick={_onclick} transition:transition={paramsOptions as ParamsType} onintrostart={() => (modal ? dlg?.showModal() : dlg?.show())} onoutroend={() => dlg?.close()}>
    {#if title || header}
      <div class={twMerge(headerCls(), clsx(headerClass))}>
        {#if title}
          <h3>{title}</h3>
        {:else if header}
          {@render header()}
        {/if}
      </div>
    {/if}
    <div class={twMerge(body(), clsx(bodyClass))}>
      {@render children?.()}
    </div>
    {#if footer}
      <div class={twMerge(footerCls(), clsx(footerClass))}>
        {@render footer()}
      </div>
    {/if}
    {#if dismissable && !permanent}
      <CloseButton onclick={closeModal} class={twMerge(closeBtn(), clsx(closeBtnClass))} />
    {/if}
  </dialog>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1026)
## Props
@prop children
@prop oncancel
@prop onclose
@prop modal = true
@prop autoclose = false
@prop header
@prop footer
@prop title
@prop open = $bindable(false)
@prop permanent = false
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
