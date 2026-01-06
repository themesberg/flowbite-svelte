<script lang="ts">
  import type { Attachment } from "svelte/attachments";
  import type { DialogProps, ParamsType } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { createDismissableContext } from "$lib/utils/dismissable";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { dialog } from "./theme";

  let {
    children,
    onaction = () => true,
    oncancel,
    onsubmit,
    ontoggle,
    form = false,
    modal = true,
    autoclose = false,
    focustrap = false,
    open = $bindable(false),
    permanent = false,
    dismissable = true,
    outsideclose = true,
    class: className,
    classes,
    transition = fade,
    transitionParams,
    closeButtonProps,
    ...restProps
  }: DialogProps = $props();

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  // Respect reduced motion preference by setting duration to 0
  const effectiveParams = $derived(
    isBrowser && prefersReducedMotion.current ? { ...(transitionParams ?? { duration: 100, easing: sineIn }), duration: 0 } : (transitionParams ?? { duration: 100, easing: sineIn })
  );

  const styling = $derived(classes);
  let { base, form: formCls, close: closeCls } = $derived(dialog());

  const close = () => (open = false);

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
    if (!permanent) close();
  }

  function _onclick(ev: MouseEvent & { currentTarget: HTMLDialogElement }) {
    const dlg: HTMLDialogElement = ev.currentTarget;
    if (ev.target === dlg) {
      // click outside - backdrop is dialog
      const rect = dlg.getBoundingClientRect(),
        clickedInContent = ev.clientX >= rect.left && ev.clientX <= rect.right && ev.clientY >= rect.top && ev.clientY <= rect.bottom;

      if (outsideclose && !clickedInContent) {
        return cancel(dlg);
      }
    }

    if (autoclose && ev.target instanceof HTMLButtonElement && !permanent) {
      return close();
    }
  }

  function _onsubmit(ev: SubmitEvent & { currentTarget: HTMLDialogElement }) {
    onsubmit?.(ev);
    if (ev.defaultPrevented) return;

    // When dialog contains the <form method="dialog"> and when child with type="submit" was pressed
    if (!(ev.target instanceof HTMLFormElement) || ev.target.method !== "dialog") {
      return;
    }

    ev.preventDefault(); // stop dialog.close()

    const dlg: HTMLDialogElement = ev.currentTarget;

    if (ev.submitter && "value" in ev.submitter) {
      // this is done by the system but after the submit event
      dlg.returnValue = String(ev.submitter.value ?? "");
    }

    if (!dlg.returnValue) {
      return cancel(dlg); // if no action - treat that as cancel
    }

    if (typeof onaction === "function") {
      const result = onaction({ action: dlg.returnValue, data: new FormData(ev.target) });
      // explicit false from onaction blocks the form closing
      if (result === false) return;
    }

    close();
  }

  function _ontoggle(ev: ToggleEvent & { currentTarget: HTMLDialogElement }) {
    ontoggle?.(ev);
    open = ev.newState === "open"; // for cases when toggle by other means
  }

  const init: Attachment<HTMLDialogElement> = (dlg) => {
    if (modal) dlg.showModal();
    else dlg.show();

    queueMicrotask(() => {
      const autofocusEl = dlg.querySelector<HTMLElement>("[data-autofocus]") ?? dlg.querySelector<HTMLElement>('input, textarea, select, button:not([aria-label="Close"])');

      if (autofocusEl) {
        autofocusEl.focus();
      } else {
        dlg.focus();
      }
    });

    return () => dlg.close();
  };

  const trapFocusAttachment: Attachment<HTMLElement> = (node) => {
    if (!focustrap) return;

    const previous = document.activeElement as HTMLElement | null;
    let skipFocusRestore = false;
    let isFocusMovedOutside = false;

    function focusable(): HTMLElement[] {
      return Array.from(node.querySelectorAll<HTMLElement>('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        const elements = focusable();
        const first = elements[0];
        const last = elements.at(-1);
        const current = document.activeElement;

        if (event.shiftKey && current === first) {
          last?.focus();
          event.preventDefault();
        }

        if (!event.shiftKey && current === last) {
          first?.focus();
          event.preventDefault();
        }
      }

      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    }

    function handleFocusOut(event: FocusEvent) {
      const related = event.relatedTarget as Node | null;
      if (related && !node.contains(related) && related !== previous) {
        isFocusMovedOutside = true;
      }
    }

    node.addEventListener("keydown", handleKeydown);
    node.addEventListener("focusout", handleFocusOut);

    return () => {
      node.removeEventListener("keydown", handleKeydown);
      node.removeEventListener("focusout", handleFocusOut);

      if (!skipFocusRestore && !isFocusMovedOutside && previous) {
        setTimeout(() => previous.focus({ preventScroll: true }), 0);
      }
    };
  };

  let ref: HTMLDialogElement | undefined = $state(undefined);

  function close_handler() {
    if (form) {
      // dialog/form mechanism will close the dialog
      return;
    }

    ref?.dispatchEvent(new Event("cancel", { bubbles: true, cancelable: true }));
  }

  createDismissableContext(close_handler);

  const finalCloseProps = $derived({
    type: "submit" as const,
    formnovalidate: true,
    class: closeCls({ class: clsx(styling?.close, closeButtonProps?.class) }),
    color: closeButtonProps?.color,
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes,
    name: closeButtonProps?.name,
    ariaLabel: closeButtonProps?.ariaLabel,
    onclick: closeButtonProps?.onclick
  });
</script>

{#snippet content()}
  {@render children?.()}
  {#if dismissable && !permanent}
    <CloseButton {...finalCloseProps} />
  {/if}
{/snippet}

{#if open}
  <dialog
    data-scope="dialog"
    data-part="base"
    {@attach init}
    bind:this={ref}
    {@attach trapFocusAttachment}
    tabindex="-1"
    onsubmit={_onsubmit}
    oncancel={_oncancel}
    onclick={_onclick}
    ontoggle={_ontoggle}
    transition:transition|global={effectiveParams as ParamsType}
    {...restProps}
    class={base({ class: clsx(className) })}
  >
    {#if form}
      <form method="dialog" data-part="form" class={formCls({ class: clsx(styling?.form) })}>
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
[DialogProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L630)
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
@prop closeButtonProps
@prop ...restProps
-->
