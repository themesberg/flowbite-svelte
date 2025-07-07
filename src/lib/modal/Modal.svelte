<script lang="ts">
  import { type ModalProps, type ParamsType, CloseButton, trapFocus } from "$lib";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalTheme } from ".";

  let { children, oncancel, onsubmit, modal = true, autoclose = false, header, footer, title, open = $bindable(false), permanent = false, dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params, transition = fade, ...restProps }: ModalProps = $props();

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(params ?? paramsDefault);

  const { base, header: headerCls, footer: footerCls, body, closeBtn } = $derived(modalTheme({ placement, size }));

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
        open = false;
      }
      if (autoclose && ev.target instanceof HTMLButtonElement && !permanent) {
        open = false;
      }
    }
  }

  let dlg: HTMLDialogElement | undefined = $state();

  // This prevents total dialog closing and we want only to prevent cancelling
  // The close with user defined actions should be allowed
  // $effect(() => {
  //   if (permanent && !open) {
  //     open = true;
  //   }
  // });

  // Handler for Escape key that respects component state
  const handleEscape = () => {
    if (!permanent) {
      oncancel?.({ currentTarget: dlg } as any);
      // If oncancel prevented default, we don't close
      if (oncancel && event?.defaultPrevented) return;
      open = false;
    }
  };

  function _onsubmit(ev: SubmitEvent) {
    if (!dlg) return;

    if (ev.submitter instanceof HTMLButtonElement || ev.submitter instanceof HTMLInputElement) {
      dlg.returnValue = ev.submitter.value;
    }

    // @ts-ignore
    onsubmit?.(ev); // forward event to user handle

    if (!ev.defaultPrevented) {
      // stop dialog.close() and trigger close with transition
      ev.preventDefault();
      open = false;
    }
  }

  function init(dlg: HTMLDialogElement) {
    modal ? dlg?.showModal() : dlg?.show();
    return () => dlg?.close();
  }
</script>

{#if open}
  <dialog use:trapFocus={{ onEscape: handleEscape }} {@attach init} onsubmit={_onsubmit} bind:this={dlg} {...restProps} class={base({ class: clsx(className) })} tabindex="-1" oncancel={_oncancel} onclick={_onclick} transition:transition|global={paramsOptions as ParamsType}>
    {#if title || header}
      <div class={headerCls({ class: clsx(headerClass) })}>
        {#if title}
          <h3>{title}</h3>
          <CloseButton onclick={() => (open = false)} class={clsx(closeBtnClass)} />
        {:else if header}
          {@render header()}
        {/if}
      </div>
    {/if}
    <div class={body({ class: clsx(bodyClass) })}>
      {@render children?.()}
    </div>
    {#if footer}
      <div class={footerCls({ class: clsx(footerClass) })}>
        {@render footer()}
      </div>
    {/if}
    {#if dismissable && !permanent && !title}
      <CloseButton onclick={() => (open = false)} class={closeBtn({ class: clsx(closeBtnClass) })} />
    {/if}
  </dialog>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1064)
## Props
@prop children
@prop oncancel
@prop onsubmit
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
