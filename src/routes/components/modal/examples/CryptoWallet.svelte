<script>
  import { Button, Modal, uiHelpers } from "$lib";
  import MetaMask from "../../../utils/icons/MetaMask.svelte";
  import CoinbaseWallet from "../../../utils/icons/CoinbaseWallet.svelte";
  import OperaWallet from "../../../utils/icons/OperaWallet.svelte";
  import Fortmatic from "../../../utils/icons/Fortmatic.svelte";
  import WalletConnect from "../../../utils/icons/WalletConnect.svelte";
  import { QuestionCircleOutline } from "flowbite-svelte-icons";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
</script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Pop-up modal</Button>
</div>

<Modal title="Connect wallet" {modalStatus} {closeModal} size="xs">
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
