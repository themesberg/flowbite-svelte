<script>
  import { Button, Modal, uiHelpers } from '$lib';
  import MetaMask from '../../../utils/icons/MetaMask.svelte';
  import CoinbaseWallet from '../../../utils/icons/CoinbaseWallet.svelte';
  import OperaWallet from '../../../utils/icons/OperaWallet.svelte';
  import Fortmatic from '../../../utils/icons/Fortmatic.svelte';
  import WalletConnect from '../../../utils/icons/WalletConnect.svelte';
  import { QuestionCircleOutline } from 'flowbite-svelte-icons';
  let walletModal = $state(false);
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

<Modal title="Connect wallet"   {modalStatus} {closeModal}  size="xs">
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
  <ul class="my-4 space-y-3">
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <MetaMask />
        <span class="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
        <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"> Popular </span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <CoinbaseWallet />
        <span class="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <OperaWallet />
        <span class="flex-1 ms-3 whitespace-nowrap">Opera Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <WalletConnect />
        <span class="flex-1 ms-3 whitespace-nowrap">WalletConnect</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <Fortmatic />
        <span class="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
      </a>
    </li>
  </ul>
  <div>
    <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
      <QuestionCircleOutline class="w-3 h-3 me-2" /> Why do I need to connect with my wallet?
    </a>
  </div>
</Modal>