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
  <P class="text-body text-sm font-normal">Connect with one of our available wallet providers or create a new one.</P>
  <ul class="my-4 space-y-3">
    <li>
      <a href="/" class="group rounded-base bg-neutral-tertiary text-heading hover:bg-neutral-secondary-medium flex items-center p-3 text-base font-bold hover:shadow-xs">
        <MetaMask />
        <span class="ms-3 flex-1 whitespace-nowrap">MetaMask</span>
        <span class="bg-neutral-quaternary text-body ms-3 inline-flex items-center justify-center rounded-sm px-2 py-0.5 text-xs font-medium">Popular</span>
      </a>
    </li>
    <li>
      <a href="/" class="group rounded-base bg-neutral-tertiary text-heading hover:bg-neutral-secondary-medium flex items-center p-3 text-base font-bold hover:shadow-xs">
        <CoinbaseWallet />
        <span class="ms-3 flex-1 whitespace-nowrap">Coinbase Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="group rounded-base bg-neutral-tertiary text-heading hover:bg-neutral-secondary-medium flex items-center p-3 text-base font-bold hover:shadow-xs">
        <OperaWallet />
        <span class="ms-3 flex-1 whitespace-nowrap">Opera Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="group rounded-base bg-neutral-tertiary text-heading hover:bg-neutral-secondary-medium flex items-center p-3 text-base font-bold hover:shadow-xs">
        <WalletConnect />
        <span class="ms-3 flex-1 whitespace-nowrap">WalletConnect</span>
      </a>
    </li>
    <li>
      <a href="/" class="group rounded-base bg-neutral-tertiary text-heading hover:bg-neutral-secondary-medium flex items-center p-3 text-base font-bold hover:shadow-xs">
        <Fortmatic />
        <span class="ms-3 flex-1 whitespace-nowrap">Fortmatic</span>
      </a>
    </li>
  </ul>
  <div>
    <a href="/" class="text-body inline-flex items-center text-xs font-normal hover:underline">
      <QuestionCircleOutline class="me-2 h-3 w-3" /> Why do I need to connect with my wallet?
    </a>
  </div>
</Modal>
