<script lang="ts">
  import { type ModalProps, type ParamsType, CloseButton, trapFocus } from "$lib";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalTheme } from ".";

  let { children, onaction = () => true, oncancel, onsubmit, ontoggle, form = false, modal = true, autoclose = false, focustrap = false, header, footer, title, open = $bindable(false), permanent = false, dismissable = true, closeBtnClass, headerClass, bodyClass, footerClass, outsideclose = true, size = "md", placement, class: className, params, transition = fade, ...restProps }: ModalProps = $props();

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(params ?? paramsDefault);

  const { base, form: formCls, header: headerCls, footer: footerCls, body, closeBtn } = $derived(modalTheme({ placement, size }));

  const close = (dlg: HTMLDialogElement) => (open = false);
  // @ts-expect-error: dlg.requestClose may not be supported
  const cancel = (dlg: HTMLDialogElement) => (typeof dlg.requestClose === "function" ? dlg.requestClose() : close());

  function _oncancel(ev: Event & { currentTarget: HTMLDialogElement }) {
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
      cancel(dlg);
    }
    if (autoclose && ev.target instanceof HTMLButtonElement && !permanent) {
      close(dlg);
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
    <div class={headerCls({ class: clsx(headerClass) })}>
      {#if title}
        <h3>{title}</h3>
        {#if dismissable && !permanent}
          <CloseButton type="submit" onclick={close_handler(form)} class={clsx(closeBtnClass)} />
        {/if}
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
    <CloseButton type="submit" onclick={close_handler(form)} class={closeBtn({ class: clsx(closeBtnClass) })} />
  {/if}
{/snippet}

{#if open}
  <dialog {@attach init} use:focusTrap class={base({ class: clsx(className) })} tabindex="-1" onsubmit={_onsubmit} oncancel={_oncancel} onclick={_onclick} ontoggle={_ontoggle} transition:transition|global={paramsOptions as ParamsType} {...restProps}>
    {#if form}
      <form method="dialog" class={formCls()}>
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
[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1066)
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
