# Svelte Modal - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A, Alert } from '$lib'  
  const dirName = toKebabCase(component_title)
</script>

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.

## Setup

```svelte
<script lang="ts">
  import { Modal } from "flowbite-svelte";
</script>
```

## Default modal

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle.

Upon action taken from user i.e. pressing the action button, the `onaction` callback function will be called.

Modal can me dismissed (canceled) by pressing `Esc` key, clicking outside of it or clicking the close button.

```svelte
{#include Default.svelte}
```

This component is built upon the **dialog - form** pair (note the `form` property set on dialog above):

```html
<dialog>
  <form method="dialog">...</form>
</dialog>
```

In such a structure, it is enough to press `<button type="submit" value="somevalue">` to close the dialog and sets its return value to the `value` parameter of that submitter. Use a convenience callback `onaction` to get the action info:

```typescript
function onaction(params: {
  action: string; // name of the action
  data: FormData; // form data - if other then buttons form elements used
}): void;
```

Returning explicit `false` from `onaction` prevents the dialog from closing. See [Form element](#form-element)

**Note:** Flowbite `<Button>` by default is implemented as `<button type="button">`, so to use it as an action button you have to explicity change its type: `<Button type="submit">`. Leaving `value` parameter empty, will cancel the dialog without triggering `onaction`.

## Pop-up modal

You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.

Notice the `permanent` prop causing that user is forced to take an action, as all canceling functions will be disabled (Esc key, click outside, close button).

Notice as well the lack of the `footer` snippet and the transition set to `slide`.

```svelte
{#include Popup.svelte}
```

## Form element

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

```svelte
{#include Form.svelte}
```

## Crypto wallet

Use this web3 modal component to show crypto wallet connection options like MetaMask or WalletConnect when building a website based on NFT authentication and collectibles.

```svelte
{#include Crypto.svelte}
```

## Clicking outside

`Modal` has got the prop `outsideclose` set to `true` by default, to allow the user to close the modal by clicking outside of it. If you want to block that behaviour set that prop to `false`.

You can control that outside space - called backdrop - by passing the `backdrop:` Tailwind class.

This example shows the `header` customization as well.

```svelte
{#include Outside.svelte}
```

## Focus trap

You can use `Tab` and `Shift+Tab` to navigate between buttons or links in the modal. Element `<dialog>` prevents the focus from going back to the current document body outside the dialog itself, however it allows focus to go out to the browser user interface.

You can force the _focus trap_ option to disallow focus to leave the page by setting `focustrap` prop to `true`. Note that this is discurage as, in case of problems, user won't be able to get to browser UX with keyboard only.

Note the `autofocus` set on `Input`. See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes)

```svelte
{#include Focus.svelte}
```

An option of automatic closing of the modal can be enabled by setting the `autoclose` property. Any `<button>` element put in the modal will close it on click.

## Sizes

You can use five different modal sizing options starting from extra small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

```svelte
{#include Sizes.svelte}
```

## Placement

```svelte
{#include Placement.svelte}
```

## Scrolling behaviour

```svelte
{#include Scrolling.svelte}
```

## Non-modal case

Rarely you would need a non-modal dialog. You can get it by setting `modal` property to `false`. Note, however, that in that mode dialog does not have a backdrop, is not a top level window (notice `z-10` class below), does not manage `Esc` key.

```svelte
{#include NonModal.svelte}
```

## No internal form

If you want the dialog without the default form inside or you want to manage the form yourself omit the `form` prop or set it to `false`. Remeber that you will need to handle the buttons actions with `onclick` handlers or use the deprecated `autoclose` prop.

```svelte
{#include NoForm.svelte}
```

## Modal events

Modal triggers the `close` or `cancel` events - see [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) API for details.

The `oncancel` handler will run when dialog is closed by non-action trigger: `Esc` key, click outside, close button, submit button with empty `value` attribute. This event is cancelable.

Use the `onclose` event handler to run code when the modal closes, regardless of how it was triggered.

You can as well use the `onsubmit` event handler which is bubbled event from the internal form.

```svelte
{#include Events.svelte}
```

## Full-Screen Modal

Use the following example to create a full-screen modal.

```svelte
{#include Full.svelte}
```

## Component data

### Modal

#### Types

[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1061)

#### Props

- children
- header
- footer
- title
- open: $bindable(false)
- permanent: false
- dismissable: true
- closeBtnClass
- headerClass
- bodyClass
- footerClass
- size: "md"
- placement
- class: className
- classes
- transitionParams
- transition: fade
- fullscreen: false


## References

- [Flowbite Modal](https://flowbite.com/docs/components/modal/)


