# Svelte Modal - Flowbite


The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.

## Setup

```svelte
<script>
  import { Modal } from "flowbite-svelte";
</script>
```

## Default modal

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle.

Closing the modal will trigger the `close` or `cancel` events - see [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) API for details.

An option of automatic closing of the modal can be enabled by setting the `autoclose` property. Any `<button>` element put in the modal will close it on click.

```svelte
<script>
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>

  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## autoclose

If `autoclose` is set to `false` or omitted, clicking buttons inside the modal will not automatically close it.

```svelte
<script>
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal}>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>

  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Clicking outside

`Modal` has got the prop `outsideclose` set to `true` by default, to allow the user to close the modal by clicking outside of it. If you want to block that behaviour set that prop to `false`.

You can control that outside space - called backdrop - by passing the `backdrop:` Tailwind class.

This example shows the `header` customization as well.

```svelte
<script>
  import { Button, Modal } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal bind:open autoclose outsideclose={false} class="backdrop:bg-red-900/50 dark:backdrop:bg-green-300/50">
  {#snippet header()}
    <h3>
      Terms of Service <small class="font-normal">(Revised)</small>
    </h3>
  {/snippet}
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the modal. Press `ESC` to close it.

## Permanent

If you want to display a modal permanently, add `permanent` prop. All close function will be disabled.

`<Modal title="My title" permanent>Content</Modal>`

## Modal with onclose

Use the `onclose` prop to run code when the modal closes, regardless of how it was triggered (close button, outside click, ESC key, or autoclose).

```svelte
<script>
  import { Button, Modal } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal
  bind:open
  autoclose
  onclose={() => {
    alert("Using onclose prop.");
  }}
>
  {#snippet header()}
    <h3>
      Terms of Service <small class="font-normal">(Revised)</small>
    </h3>
  {/snippet}
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Pop-up modal

You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.

Notice lack of the `footer` snippet and the transition set to `slide`.

```svelte
<script>
  import { Button, Modal } from "flowbite-svelte";
  import { ExclamationCircleOutline } from "flowbite-svelte-icons";
  import { slide } from "svelte/transition";
  let popupModal = $state(false);
</script>

<Button onclick={() => (popupModal = true)}>Pop-up modal</Button>

<Modal bind:open={popupModal} size="xs" autoclose transition={slide}>
  <div class="text-center">
    <ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
    <Button color="red" class="me-2">Yes, I'm sure</Button>
    <Button color="alternative">No, cancel</Button>
  </div>
</Modal>
```

## Form element

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

<Alert color="none" border>
<b>Note!</b> Remember to set <code>method="dialog"</code> on your form inside that <code>dialog</code> component.
</Alert>

```svelte
<script>
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  let formModal = $state(false);
</script>

<Button onclick={() => (formModal = true)}>Form modal</Button>

<Modal bind:open={formModal} size="xs">
  <form class="flex flex-col space-y-6" method="dialog" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a href="/" class="text-primary-700 dark:text-primary-500 ms-auto text-sm hover:underline">Lost password?</a>
    </div>
    <Button type="submit" class="w-full1">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
    </div>
  </form>
</Modal>
```

## Crypto wallet

Use this web3 modal component to show crypto wallet connection options like MetaMask or WalletConnect when building a website based on NFT authentication and collectibles.

```svelte
<script>
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  import MetaMask from "../../utils/icons/MetaMask.svelte";
  import CoinbaseWallet from "../../utils/icons/CoinbaseWallet.svelte";
  import OperaWallet from "../../utils/icons/OperaWallet.svelte";
  import Fortmatic from "../../utils/icons/Fortmatic.svelte";
  import WalletConnect from "../../utils/icons/WalletConnect.svelte";
  import { QuestionCircleOutline } from "flowbite-svelte-icons";
  let walletModal = $state(false);
</script>

<Button onclick={() => (walletModal = true)}>Crypto wallet modal</Button>

<Modal title="Connect wallet" bind:open={walletModal} size="xs">
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
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

## Sizes

You can use five different modal sizing options starting from extra small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

```svelte
<script lang="ts">
  import { Button, Modal, type ModalProps } from "flowbite-svelte";

  let openModal = $state(false);
  let size: ModalProps["size"] = $state();
  function onclick(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    size = (ev.target as HTMLButtonElement).textContent as ModalProps["size"];
    openModal = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
  <Button size="xs" {onclick}>xs</Button>
  <Button size="sm" {onclick}>sm</Button>
  <Button size="md" {onclick}>md</Button>
  <Button size="lg" {onclick}>lg</Button>
  <Button size="xl" {onclick}>xl</Button>
</div>

<Modal title="Terms of Service" bind:open={openModal} {size} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Placement

```svelte
<script lang="ts">
  import { Button, Modal, type ModalPlacementType } from "flowbite-svelte";

  let id = $state("placement-modal");
  let placement: ModalPlacementType = $state("center");
  let openPlacement = $state(false);
  const setPlacement = (ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
    placement = (ev.target as HTMLButtonElement).textContent as ModalPlacementType;
    id = `${placement}-modal`;
    openPlacement = !openPlacement;
  };
</script>

<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
  <Button onclick={setPlacement}>top-left</Button>
  <Button onclick={setPlacement}>top-center</Button>
  <Button onclick={setPlacement}>top-right</Button>
  <Button onclick={setPlacement}>center-left</Button>
  <Button onclick={setPlacement}>center</Button>
  <Button onclick={setPlacement}>center-right</Button>
  <Button onclick={setPlacement}>bottom-left</Button>
  <Button onclick={setPlacement}>bottom-center</Button>
  <Button onclick={setPlacement}>bottom-right</Button>
</div>

<Modal {id} title="Terms of Service" bind:open={openPlacement} {placement} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Colors

```svelte
<script lang="ts">
  import { Button, Modal, P, type ButtonProps } from "flowbite-svelte";

  let openColor = $state(false);
  let color = $state();
  function onclickColor(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    color = (ev.target as HTMLButtonElement).textContent?.split(" ")[0].toLowerCase();
    openColor = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-2 rtl:space-x-reverse">
  <Button color="primary" onclick={onclickColor}>Primary modal</Button>
  <Button color="red" onclick={onclickColor}>Red modal</Button>
  <Button color="green" onclick={onclickColor}>Green modal</Button>
  <Button color="blue" onclick={onclickColor}>Blue modal</Button>
  <Button color="yellow" onclick={onclickColor}>Yellow modal</Button>
</div>

<Modal title="Terms of Service" bind:open={openColor} {color} autoclose>
  <div class="text-base leading-relaxed">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</div>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')} color={color as ButtonProps["color"]}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Scrolling behaviour

```svelte
<script>
  import { Button, Modal } from "flowbite-svelte";
  let scrollingModal = $state(false);
</script>

<Button onclick={() => (scrollingModal = true)}>Scrolling modal</Button>

<Modal title="Terms of Service" bind:open={scrollingModal}>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Non-modal case

Rarely you would need a non-modal dialog. You can get it by setting `modal` property to `false`. Note, however, that in that mode dialog does not have a backdrop, is not a top level window (notice `z-10` class below), does not manage `Esc` key.

```svelte
<script>
  import { Button, Modal } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Non modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose modal={false} class="z-10 border shadow-xl">
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  {/snippet}
</Modal>
```

## Component data

### Modal

#### Types

[ModalProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1035)

#### Props

- children
- oncancel
- onclose
- modal: true
- autoclose: false
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
- outsideclose: true
- size: "md"
- placement
- class: className
- params
- transition: fade


## References

- [Flowbite Modal](https://flowbite.com/docs/components/modal/)


