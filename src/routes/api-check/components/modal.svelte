<script lang="ts">
  import { Button, Modal, P, Label, Input, Checkbox, type ModalProps, type ModalPlacementType, type ButtonProps } from "$lib";

  import { ExclamationCircleOutline, QuestionCircleOutline } from "flowbite-svelte-icons";
  import { slide } from "svelte/transition";
  import MetaMask from "../../utils/icons/MetaMask.svelte";
  import CoinbaseWallet from "../../utils/icons/CoinbaseWallet.svelte";
  import OperaWallet from "../../utils/icons/OperaWallet.svelte";
  import Fortmatic from "../../utils/icons/Fortmatic.svelte";
  import WalletConnect from "../../utils/icons/WalletConnect.svelte";

  // For default modal
  let defaultModal = $state(false);

  // For outside clicking modal
  let open = $state(false);

  // For popup modal
  let popupModal = $state(false);

  // For form modal
  let formModal = $state(false);

  // For crypto wallet modal
  let walletModal = $state(false);

  // For sizes example
  let openModal = $state(false);
  let size: ModalProps["size"] = $state();
  function onclick(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    size = (ev.target as HTMLButtonElement).textContent as ModalProps["size"];
    openModal = true;
  }

  // For placement example
  let id = $state("placement-modal");
  let placement: ModalPlacementType = $state("center");
  let openPlacement = $state(false);
  const setPlacement = (ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
    placement = (ev.target as HTMLButtonElement).textContent as ModalPlacementType; // text in the button
    id = `${placement}-modal`;
    openPlacement = !openPlacement;
  };

  // For colors example
  let openColor = $state(false);
  let color: ModalProps["color"] = $state("purple");
  function onclickColor(ev: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    color = (ev.target as HTMLButtonElement).textContent?.split(" ")[0].toLowerCase();
    openColor = true;
  }

  // For scrolling example
  let scrollingModal = $state(false);

  // For non-modal example
  let nonModal = $state(false);
</script>

<h1 class="my-4 text-3xl">Modal</h1>

<h2 class="my-4 text-2xl">Default modal</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (defaultModal = true)}>Default modal</Button>
  <Modal title="Terms of Service" bind:open={defaultModal} autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>

    {#snippet footer()}
      <Button onclick={() => alert('Handle "success"')}>I accept</Button>
      <Button color="alternative">Decline</Button>
    {/snippet}
  </Modal>
</div>

<h2 class="my-4 text-2xl">Clicking outside</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (open = true)}>Default modal</Button>

  <Modal bind:open autoclose outsideclose={false} class="backdrop:bg-red-900/50 dark:backdrop:bg-green-300/50">
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
</div>

<h2 class="my-4 text-2xl">Modal with onclose</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
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
</div>

<h2 class="my-4 text-2xl">Pop-up modal</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (popupModal = true)}>Pop-up modal</Button>

  <Modal bind:open={popupModal} size="xs" autoclose transition={slide}>
    <div class="text-center">
      <ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
      <Button color="red" class="me-2">Yes, I'm sure</Button>
      <Button color="alternative">No, cancel</Button>
    </div>
  </Modal>
</div>

<h2 class="my-4 text-2xl">Form element</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (formModal = true)}>Form modal</Button>

  <Modal bind:open={formModal} size="xs" autoclose={false}>
    <form class="flex flex-col space-y-6" action="#">
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
      <Button type="submit" class="w-full">Login to your account</Button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="/" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
      </div>
    </form>
  </Modal>
</div>

<h2 class="my-4 text-2xl">Crypto wallet</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
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
</div>

<h2 class="my-4 text-2xl">Sizes</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
    <Button size="xs" {onclick}>xs</Button>
    <Button size="sm" {onclick}>sm</Button>
    <Button size="md" {onclick}>md</Button>
    <Button size="lg" {onclick}>lg</Button>
    <Button size="xl" {onclick}>xl</Button>
  </div>

  <Modal title="Terms of Service" bind:open={openModal} {size} autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    {#snippet footer()}
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    {/snippet}
  </Modal>
</div>

<h2 class="my-4 text-2xl">Placement</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
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
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    {#snippet footer()}
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    {/snippet}
  </Modal>
</div>

<h2 class="my-4 text-2xl">Colors</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
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
</div>

<h2 class="my-4 text-2xl">Scrolling behaviour</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (scrollingModal = true)}>Scrolling modal</Button>

  <Modal title="Terms of Service" bind:open={scrollingModal}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    {#snippet footer()}
      <Button onclick={() => alert('Handle "success"')}>I accept</Button>
      <Button color="alternative">Decline</Button>
    {/snippet}
  </Modal>
</div>

<h2 class="my-4 text-2xl">Non-modal case</h2>
<div class="my-4 flex justify-center rounded border border-gray-200 dark:border-gray-600 p-4">
  <Button onclick={() => (nonModal = true)}>Non modal</Button>
  <Modal title="Terms of Service" bind:open={nonModal} autoclose modal={false} class="z-10 border shadow-xl">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    {#snippet footer()}
      <Button onclick={() => alert('Handle "success"')}>I accept</Button>
      <Button color="alternative">Decline</Button>
    {/snippet}
  </Modal>
</div>
