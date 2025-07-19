<script lang="ts">
  import { type ModalProps, type ParamsType, CloseButton, trapFocus } from "$lib";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalStyle, type ModalTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, onaction = () => true, oncancel, onsubmit, ontoggle, form = false, modal = true, autoclose = false, focustrap = false, header, footer, title, open = $bindable(false), permanent = false, dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params, transition = fade, ...restProps }: ModalProps = $props();

  const theme = getTheme("modal");

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(params ?? paramsDefault);

  const { base, form: formCls, header: headerCls, footer: footerCls, body, closebutton } = $derived(modalStyle({ placement, size }));

  const close = (dlg: HTMLDialogElement) => (open = false);
  // @ts-expect-error: dlg.requestClose may not be supported
  const cancel = (dlg: HTMLDialogElement) => (typeof dlg.requestClose === "function" ? dlg.requestClose() : close());

  function _oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
    if (ev.target !== ev.currentTarget) {
      return; // ignore if not on dialog
    }

    // this event gets called when user canceled the dialog:
    // pressesed ESC key, clicked outside, pressed submit button with no 'value' like close button
    oncancel?.(ev);
    if (ev.defaultPrevented) return;

    ev.preventDefault(); // prevent anyway, we need clean close
    if (!permanent) close(ev.currentTarget);
  }

  function _onclick(ev: Event & { currentTarget: HTMLDialogElement }) {
    const dlg: HTMLDialogElement = ev.currentTarget;
    if (outsideclose && ev.target === dlg) {
      return cancel(dlg);
    }

    if (autoclose && ev.target instanceof HTMLButtonElement && !permanent) {
      return close(dlg);
    }
  }

  function _onsubmit(ev: SubmitEvent & { currentTarget: HTMLDialogElement }) {
    // When dialog contains the <form method="dialog"> and when child with type="submit" was pressed

    onsubmit?.(ev);
    if (ev.defaultPrevented) return;

    ev.preventDefault(); // stop dialog.close()

    const dlg: HTMLDialogElement = ev.currentTarget;

    if (ev.submitter instanceof HTMLButtonElement || ev.submitter instanceof HTMLInputElement) {
      dlg.returnValue = ev.submitter.value;
    }

    if (!dlg.returnValue) {
      return cancel(dlg); // if no action - treat that as cancel
    }

    // explicit false from onaction blocks the form closing
    if (typeof onaction === "function" && onaction({ action: dlg.returnValue, data: new FormData(ev.target as HTMLFormElement) }) === false) return;

    close(dlg);
  }

  function _ontoggle(ev: ToggleEvent & { currentTarget: HTMLDialogElement }) {
    ontoggle?.(ev);
    open = ev.newState === "open"; // for cases when toggle by other means
  }

  function init(dlg: HTMLDialogElement) {
    modal ? dlg.showModal() : dlg.show();
    return () => dlg.close();
  }

  const focusTrap = (node: HTMLElement) => (focustrap ? trapFocus(node) : undefined);
  const close_handler = (pred: boolean) => (pred ? undefined : () => (open = false));
</script>

{#snippet content()}
  {#if title || header}
    <div class={headerCls({ class: clsx((theme as ModalTheme)?.header, headerClass) })}>
      {#if title}
        <h3>{title}</h3>
        {#if dismissable && !permanent}
          <CloseButton type="submit" formnovalidate onclick={close_handler(form)} class={clsx(closeBtnClass)} />
        {/if}
      {:else if header}
        {@render header()}
      {/if}
    </div>
  {/if}
  <div class={body({ class: clsx((theme as ModalTheme)?.body, bodyClass) })}>
    {@render children?.()}
  </div>
  {#if footer}
    <div class={footerCls({ class: clsx((theme as ModalTheme)?.footer, footerClass) })}>
      {@render footer()}
    </div>
  {/if}
  {#if dismissable && !permanent && !title}
    <CloseButton type="submit" formnovalidate onclick={close_handler(form)} class={closebutton({ class: clsx((theme as ModalTheme)?.closebutton, closeBtnClass) })} />
  {/if}
{/snippet}

{#if open}
  <dialog {@attach init} use:focusTrap class={base({ class: clsx((theme as ModalTheme)?.base, className) })} tabindex="-1" onsubmit={_onsubmit} oncancel={_oncancel} onclick={_onclick} ontoggle={_ontoggle} transition:transition|global={paramsOptions as ParamsType} {...restProps}>
    {#if form}
      <form method="dialog" class={formCls({ class: clsx((theme as ModalTheme)?.form) })}>
        {@render content()}
      </form>
    {:else}
      {@render content()}
    {/if}
  </dialog>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1034)
## Props
@prop children
@prop onaction = ()
@prop oncancel
@prop onsubmit
@prop ontoggle
@prop form = false
@prop modal = true
@prop autoclose = false
@prop focustrap = false
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
