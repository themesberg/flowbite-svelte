# Svelte Modal - Flowbite


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
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Terms of Service" form bind:open={defaultModal} onaction={({ action }) => alert(`Handle "${action}"`)}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>

  {#snippet footer()}
    <Button type="submit" value="success">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>
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
<script lang="ts">
  import { Button, Modal } from "flowbite-svelte";
  import { ExclamationCircleOutline } from "flowbite-svelte-icons";
  import { slide } from "svelte/transition";
  let popupModal = $state(false);
</script>

<Button onclick={() => (popupModal = true)}>Pop-up modal</Button>

<Modal form bind:open={popupModal} size="xs" transition={slide} permanent>
  <div class="text-center">
    <ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
    <div class="space-x-2">
      <Button type="submit" value="yes" color="red">Yes, I'm sure</Button>
      <Button type="submit" value="no" color="alternative">No, cancel</Button>
    </div>
  </div>
</Modal>
```

## Form element

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

```svelte
<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";

  let formModal = $state(false);
  let error = $state("");

  function onaction({ action, data }: { action: string; data: FormData }) {
    error = "";
    // Check the data validity, return false to prevent dialog closing; anything else to proceed
    if (action === "login" && (data.get("password") as string)?.length < 4) {
      error = "Password must have at least 4 characters";
      return false;
    }
  }
</script>

<Button onclick={() => (formModal = true)}>Form modal</Button>

<Modal form bind:open={formModal} size="xs" {onaction}>
  <div class="flex flex-col space-y-6">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    {#if error}
      <Label color="red">{error}</Label>
    {/if}
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="min. 4 characters" required />
    </Label>
    <div class="flex items-start">
      <Checkbox name="remember">Remember me</Checkbox>
      <a href="/" class="text-primary-700 dark:text-primary-500 ms-auto text-sm hover:underline">Lost password?</a>
    </div>
    <Button type="submit" value="login">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
    </div>
  </div>
</Modal>
```

## Crypto wallet

Use this web3 modal component to show crypto wallet connection options like MetaMask or WalletConnect when building a website based on NFT authentication and collectibles.

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  import MetaMask from "$icons/MetaMask.svelte";
  import CoinbaseWallet from "$icons/CoinbaseWallet.svelte";
  import OperaWallet from "$icons/OperaWallet.svelte";
  import Fortmatic from "$icons/Fortmatic.svelte";
  import WalletConnect from "$icons/WalletConnect.svelte";
  import { QuestionCircleOutline } from "flowbite-svelte-icons";
  let walletModal = $state(false);
</script>

<Button onclick={() => (walletModal = true)}>Crypto wallet modal</Button>

<Modal title="Connect wallet" bind:open={walletModal} size="xs">
  <P class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</P>
  <ul class="my-4 space-y-3">
    <li>
      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
        <MetaMask />
        <span class="ms-3 flex-1 whitespace-nowrap">MetaMask</span>
        <span class="ms-3 inline-flex items-center justify-center rounded-sm bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>
      </a>
    </li>
    <li>
      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
        <CoinbaseWallet />
        <span class="ms-3 flex-1 whitespace-nowrap">Coinbase Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
        <OperaWallet />
        <span class="ms-3 flex-1 whitespace-nowrap">Opera Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
        <WalletConnect />
        <span class="ms-3 flex-1 whitespace-nowrap">WalletConnect</span>
      </a>
    </li>
    <li>
      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow-sm dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
        <Fortmatic />
        <span class="ms-3 flex-1 whitespace-nowrap">Fortmatic</span>
      </a>
    </li>
  </ul>
  <div>
    <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
      <QuestionCircleOutline class="me-2 h-3 w-3" /> Why do I need to connect with my wallet?
    </a>
  </div>
</Modal>
```

## Clicking outside

`Modal` has got the prop `outsideclose` set to `true` by default, to allow the user to close the modal by clicking outside of it. If you want to block that behaviour set that prop to `false`.

You can control that outside space - called backdrop - by passing the `backdrop:` Tailwind class.

This example shows the `header` customization as well.

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal form bind:open outsideclose={false} class="backdrop:bg-red-900/50 dark:backdrop:bg-green-300/50">
  {#snippet header()}
    <h3>
      Terms of Service <small class="font-normal">(Revised)</small>
    </h3>
  {/snippet}
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit" value="accept">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Focus trap

You can use `Tab` and `Shift+Tab` to navigate between buttons or links in the modal. Element `<dialog>` prevents the focus from going back to the current document body outside the dialog itself, however it allows focus to go out to the browser user interface.

You can force the _focus trap_ option to disallow focus to leave the page by setting `focustrap` prop to `true`. Note that this is discurage as, in case of problems, user won't be able to get to browser UX with keyboard only.

Note the `autofocus` set on `Input`. See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes)

```svelte
<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  let open = $state(false);
  let checked = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>
<Checkbox bind:checked>Focus trap</Checkbox>

<Modal form bind:open focustrap={checked} size="sm" title="Notify user">
  <Label class="space-y-2">
    <span>Email:</span>
    <Input autofocus />
  </Label>
  {#snippet footer()}
    <Button type="submit" value="notify">Notify</Button>
    <Button type="submit" color="alternative">Cancel</Button>
  {/snippet}
</Modal>
```

An option of automatic closing of the modal can be enabled by setting the `autoclose` property. Any `<button>` element put in the modal will close it on click.

## Sizes

You can use five different modal sizing options starting from extra small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

```svelte
<script lang="ts">
  import { Button, Modal, type ModalProps, P } from "flowbite-svelte";

  let openModal = $state(false);
  let size: ModalProps["size"] = $state("md"); // Set default value

  function onclick(modalSize: ModalProps["size"]) {
    size = modalSize;
    openModal = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
  <Button onclick={() => onclick("xs")}>xs</Button>
  <Button onclick={() => onclick("sm")}>sm</Button>
  <Button onclick={() => onclick("md")}>md</Button>
  <Button onclick={() => onclick("lg")}>lg</Button>
  <Button onclick={() => onclick("xl")}>xl</Button>
</div>

<Modal form title="Terms of Service" bind:open={openModal} {size}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Placement

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";

  type ModalPlacementType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";

  let placement: ModalPlacementType = $state("center");
  let openPlacement = $state(false);

  const setPlacement = (newPlacement: ModalPlacementType) => {
    placement = newPlacement;
    console.log("placement: ", placement);
    openPlacement = !openPlacement;
  };
</script>

<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
  <Button onclick={() => setPlacement("top-left")}>top-left</Button>
  <Button onclick={() => setPlacement("top-center")}>top-center</Button>
  <Button onclick={() => setPlacement("top-right")}>top-right</Button>
  <Button onclick={() => setPlacement("center-left")}>center-left</Button>
  <Button onclick={() => setPlacement("center")}>center</Button>
  <Button onclick={() => setPlacement("center-right")}>center-right</Button>
  <Button onclick={() => setPlacement("bottom-left")}>bottom-left</Button>
  <Button onclick={() => setPlacement("bottom-center")}>bottom-center</Button>
  <Button onclick={() => setPlacement("bottom-right")}>bottom-right</Button>
</div>

<Modal title="Terms of Service" form bind:open={openPlacement} {placement}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Scrolling behaviour

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let scrollingModal = $state(false);
</script>

<Button onclick={() => (scrollingModal = true)}>Scrolling modal</Button>

<Modal title="Terms of Service" form bind:open={scrollingModal}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Non-modal case

Rarely you would need a non-modal dialog. You can get it by setting `modal` property to `false`. Note, however, that in that mode dialog does not have a backdrop, is not a top level window (notice `z-10` class below), does not manage `Esc` key.

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Non modal</Button>
<Modal title="Terms of Service" form bind:open={defaultModal} modal={false} class="z-10 border shadow-xl">
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## No internal form

If you want the dialog without the default form inside or you want to manage the form yourself omit the `form` prop or set it to `false`. Remeber that you will need to handle the buttons actions with `onclick` handlers or use the deprecated `autoclose` prop.

```svelte
<script lang="ts">
  import { Button, Modal, Input, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>No form modal</Button>
<Modal bind:open title="Custom form">
  <form method="dialog" name="my_form" novalidate>
    <fieldset class="flex gap-4 border p-4">
      <legend class="px-2">Custom form</legend>
      <Input required placeholder="This is separate form" />
      <Button type="submit" value="accept" class="shrink-0">Submit button</Button>
    </fieldset>
  </form>

  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>

  {#snippet footer()}
    <Button type="submit" value="accept">Submit button not in form</Button>
    <Button onclick={() => (open = false)} color="alternative">Button with 'onclick' handler</Button>
  {/snippet}
</Modal>
```

## Modal events

Modal triggers the `close` or `cancel` events - see [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) API for details.

The `oncancel` handler will run when dialog is closed by non-action trigger: `Esc` key, click outside, close button, submit button with empty `value` attribute. This event is cancelable.

Use the `onclose` event handler to run code when the modal closes, regardless of how it was triggered.

You can as well use the `onsubmit` event handler which is bubbled event from the internal form.

```svelte
<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal
  form
  bind:open
  onsubmit={() => alert(`SUBMIT: Form is about to be submitted.`)}
  oncancel={() => alert("CANCEL: User canceled the dialog")}
  onclose={(ev) => alert(`CLOSE: Dialog closed with "${(ev.target as HTMLDialogElement)?.returnValue || "no"}" action.`)}
  title="Terms of Service"
>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit" value="accept">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Full-Screen Modal

Use the following example to create a full-screen modal.

```svelte
<script lang="ts">
  import { Button, Modal, P } from "$lib";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal bind:open={defaultModal} fullscreen size="none" class="bg-gray-100">
  <div class="flex h-screen items-center justify-center">
    <P class="text-3xl">Content</P>
  </div>
</Modal>
```

## Modal with Countdown

Enhance user engagement and ensure content visibility by adding countdown timers to modals. During the countdown period, users cannot dismiss the modal through outside clicks, ESC key, or the close button, forcing interaction with the content.

This is perfect for advertisements, terms of service, or important announcements.

```svelte
<script lang="ts">
  import { Button, Modal, P, A } from "$lib";
  import { createCountdown } from "$lib/utils/countdown.svelte";

  const adCountdown = createCountdown(4);
  const termsCountdown = createCountdown(5);

  let adModal = $state(false);
  let termsModal = $state(false);

  function countdownText(remaining: number): string {
    return `Close available in ${remaining}s`;
  }

  $effect(() => {
    if (adModal) adCountdown.start();
    else adCountdown.reset(4);
    if (termsModal) termsCountdown.start();
    else termsCountdown.reset(5);
  });
</script>

<div class="flex flex-col gap-4">
  <Button class="w-40" onclick={() => (adModal = true)}>Show Ad Modal</Button>

  <Modal bind:open={adModal} permanent={adCountdown.isRunning} dismissable={!adCountdown.isRunning} outsideclose={!adCountdown.isRunning}>
    {#snippet header()}
      <div class="flex w-full items-center justify-between">
        <h2>Ad: Special Offer!</h2>
        {#if adCountdown.isRunning}
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {countdownText(adCountdown.timeLeft)}
          </span>
        {/if}
      </div>
    {/snippet}
    <div class="text-center">
      <P>🎉 Get 50% off your next purchase!</P>
      <P>This amazing deal won't last long. Sign up now to claim your discount.</P>
    </div>
  </Modal>

  <A onclick={() => (termsModal = true)}>Terms of Service</A>

  <Modal form bind:open={termsModal} permanent={termsCountdown.isRunning} dismissable={!termsCountdown.isRunning} outsideclose={!termsCountdown.isRunning}>
    {#snippet header()}
      <div class="flex w-full items-center justify-between">
        <h3>Terms of Service</h3>
        {#if termsCountdown.isRunning}
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {countdownText(termsCountdown.timeLeft)}
          </span>
        {/if}
      </div>
    {/snippet}
    <P>
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </P>
    <P>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</P>

    {#snippet footer()}
      <Button value="success" onclick={() => alert("Clicked type is button")}>Button won't close the modal</Button>
      <Button type="submit" value="decline" color="alternative">type submit close the modal</Button>
    {/snippet}
  </Modal>
</div>
```

## Component data

### Modal

#### Types

[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1099)

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
