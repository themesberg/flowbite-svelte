<script lang="ts">
  import { dialog, type DialogProps, type ParamsType, trapFocus } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";

  let { children, onaction = () => true, oncancel, onsubmit, ontoggle, form = false, modal = true, autoclose = false, focustrap = false, open = $bindable(false), permanent = false, dismissable = true, outsideclose = true, class: className, classes, transition = fade, transitionParams, ...restProps }: DialogProps = $props();

  const paramsOptions = $derived(transitionParams ?? { duration: 100, easing: sineIn });

  let { base, form: formCls, close: closeCls } = dialog();

  const close = (dlg: HTMLDialogElement) => (open = false);

  // Prefer requestClose when available to trigger a cancellable "cancel" event; otherwise synthesize it.
  const cancel = (dlg: HTMLDialogElement) => {
    if (typeof dlg.requestClose === "function") return dlg.requestClose();
    dlg.dispatchEvent(new Event("cancel", { bubbles: true, cancelable: true }));
  };

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

  function _onclick(ev: MouseEvent & { currentTarget: HTMLDialogElement }) {
    const dlg: HTMLDialogElement = ev.currentTarget,
      rect = dlg.getBoundingClientRect(),
      clickedInContent = ev.clientX >= rect.left && ev.clientX <= rect.right && ev.clientY >= rect.top && ev.clientY <= rect.bottom;

    // if (outsideclose && ev.target === dlg) {
    if (outsideclose && !clickedInContent) {
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
    if (modal) dlg.showModal();
    else dlg.show();
    return () => dlg.close();
  }

  const focusTrap = (node: HTMLElement) => (focustrap ? trapFocus(node) : undefined);

  let ref: HTMLDialogElement | undefined = $state(undefined);

  function close_handler(ev: MouseEvent) {
    if (form) {
      // dialog/form mechanism will close the dialog
      return;
    }

    ref?.dispatchEvent(new Event("cancel", { bubbles: true, cancelable: true }));
  }

  createDismissableContext(close_handler);
</script>

{#snippet content()}
  {@render children?.()}
  {#if dismissable && !permanent}
    <CloseButton type="submit" formnovalidate class={closeCls({ class: clsx(classes?.close) })} />
  {/if}
{/snippet}

{#if open}
  <dialog {@attach init} bind:this={ref} use:focusTrap tabindex="-1" onsubmit={_onsubmit} oncancel={_oncancel} onclick={_onclick} ontoggle={_ontoggle} transition:transition|global={paramsOptions as ParamsType} {...restProps} class={base({ class: clsx(className) })}>
    {#if form}
      <form method="dialog" class={formCls({ class: clsx(classes?.form) })}>
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
[DialogProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L557)
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
@prop open = $bindable(false)
@prop permanent = false
@prop dismissable = true
@prop outsideclose = true
@prop class: className
@prop classes
@prop transition = fade
@prop transitionParams
@prop ...restProps
-->
