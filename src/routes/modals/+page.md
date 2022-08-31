---
layout: modalLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Button, Checkbox, Modal, Label, Input, Breadcrumb, BreadcrumbItem, Heading } from '$lib'
  import { goto } from "$app/navigation";
  import Metamask from "./Metamask/+page.svelte"
  import Coinbase from "./Coinbase/+page.svelte"
  import Fortmatic from "./Fortmatic/+page.svelte"
  import OperaWallet from "./OperaWallet/+page.svelte"
  import WalletConnect from "./WalletConnect/+page.svelte"

  import componentProps1 from '../props/Modal.json'

  let items1 = componentProps1.props
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let exModal1;
  let exModal2;

  let defaultModal = false;
  let popupModal = false;
  let formModal = false;
  let walletModal = false;
  let size;
  let sizesModal = false;
  let placement;
  let placementModal = false;

  const setPlacement = (value) => () => {
    placement = value;
    placementModal = !placementModal
  };

</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Modals</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Modals</Heading>

<CompoDescription>Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles</CompoDescription>

<ExampleDiv>
<GitHubSource href="modals/Modal.svelte">Modal</GitHubSource>
</ExampleDiv>

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.

<Htwo label="Setup" />

```html
<script>
  import { Modal } from 'flowbite-svelte'
</script>
```

<Htwo label="Default modal" />

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle.
You can also use the `open=true` attribute to show open the modal by default.

Any `<button>` element put in the modal will close it on click. To prevent that behaviour set `autoclose=false` property.

Opening and closeing the modal will trigger the `show` and `hide` events.

<ExampleDiv class="flex gap-4">
  <Button on:click={() => defaultModal = true}>Default modal</Button>
  <Modal title="Terms of Service" bind:open={defaultModal}>
    <p class="text-base leading-relaxed text1-gray-500 dark:text1-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button on:click={() => alert('Handle "success"')}>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</ExampleDiv>

```html
  <script>
    let defaultModal;
  </script>

  <Button on:click={() => (defaultModal = true)}>Default modal</Button>
	<Modal title="Terms of Service" bind:open={defaultModal}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"> With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
```

<Htwo label="Pop-up modal" />

You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.

Notice lack of the `footer` slot.

<ExampleDiv>
<Button on:click={() => popupModal = true}>Pop-up modal</Button>
<Modal bind:open={popupModal}>
  <div class="text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
      <Button color="red" class="mr-2">Yes, I'm sure</Button>
      <Button color='alternative'>No, cancel</Button>
  </div>
</Modal>
</ExampleDiv>

```html
<script>
  let popupModal;
</script>

<Button on:click={() => popupModal = true}>Pop-up modal</Button>
<Modal bind:open={popupModal}>
  <div class="text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
      <Button color="red" class="mr-2">Yes, I'm sure</Button>
      <Button color='alternative'>No, cancel</Button>
  </div>
</Modal>
```

<Htwo label="Form element" />

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

<ExampleDiv>
<Button on:click={() => formModal = true}>Form modal</Button>
<Modal bind:open={formModal} size="xs">
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in to our platform</h3>
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
				<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
		</div>
		<Button type="submit" class="w-full1">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
			</div>
	</form>
</Modal>
</ExampleDiv>

```html
<script>
  let formModal = false
</script>

<Button on:click={() => formModal = true}>Form modal</Button>
<Modal bind:open={formModal} size="xs">
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in to our platform</h3>
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
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
		</div>
		<Button type="submit" class="w-full1">Login to your account</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
		</div>
	</form>
</Modal>
```

<Htwo label="Crypto wallet" />

Use this web3 modal component to show crypto wallet connection options like MetaMask or WalletConnect when building a website based on NFT authentication and collectibles.

<ExampleDiv>
<Button on:click={() => walletModal = true}>Crypto wallet modal</Button>
<Modal title="Connect wallet"  bind:open={walletModal} size="xs" padding="xs">
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
  <ul class="my-4 space-y-3">
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Metamask />
            <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Coinbase />
            <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <OperaWallet />
            <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <WalletConnect />
            <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Fortmatic />
            <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
        </a>
    </li>
  </ul>
  <div>
      <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
          <span class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg></span> Why do I need to connect with my wallet?</a>
  </div>
</Modal>
</ExampleDiv>

```html
<script>
  let walletModal = false
  import Metamask from "./path/to/Metamask.svelte"
  import Coinbase from "./path/to/Coinbase.svelte"
  import Fortmatic from "./path/to/Fortmatic.svelte"
  import OperaWallet from "./path/to/OperaWallet.svelte"
  import WalletConnect from "./path/to/WalletConnect.svelte"
</script>

<Button on:click={() => walletModal = true}>Crypto wallet modal</Button>
<Modal title="Connect wallet"  bind:open={walletModal} size="xs" padding="xs">
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
  <ul class="my-4 space-y-3">
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Metamask />
            <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Coinbase />
            <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <OperaWallet />
            <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <WalletConnect />
            <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
        </a>
    </li>
    <li>
        <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <Fortmatic />
            <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
        </a>
    </li>
  </ul>
  <div>
      <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
          <span class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg></span> Why do I need to connect with my wallet?</a>
  </div>
</Modal>
```

<Htwo label="Sizes" />

You can use five different modal sizing options starting from extra small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

<ExampleDiv class="space-x-4">
  <Button size="xs" on:click={()=> {size = 'xs'; sizesModal = true} }>xs</Button>
  <Button size="sm" on:click={()=> {size = 'sm'; sizesModal = true} }>sm</Button>
  <Button size="md" on:click={()=> {size = 'md'; sizesModal = true} }>md</Button>
  <Button size="lg" on:click={()=> {size = 'lg'; sizesModal = true} }>lg</Button>
  <Button size="xl" on:click={()=> {size = 'xl'; sizesModal = true} }>xl</Button>

  <Modal title="Terms of Service" bind:open={sizesModal} {size}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</ExampleDiv>

```html
<script>
  let sizeModal = false
</script>

  <Button size="xs" on:click={()=> {size = 'xs'; open = true} }>xs</Button>
  <Button size="sm" on:click={()=> {size = 'sm'; open = true} }>sm</Button>
  <Button size="md" on:click={()=> {size = 'md'; open = true} }>md</Button>
  <Button size="lg" on:click={()=> {size = 'lg'; open = true} }>lg</Button>
  <Button size="xl" on:click={()=> {size = 'xl'; open = true} }>xl</Button>

  <Modal title="Terms of Service" bind:open={sizesModal} {size}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
```

<Htwo label="Placement" />

<ExampleDiv>
  <div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
    <Button on:click={setPlacement('top-left')}>top-left</Button>
    <Button on:click={setPlacement('top-center')}>top-center</Button>
    <Button on:click={setPlacement('top-right')}>top-right</Button>
    <Button on:click={setPlacement('center-left')}>center-left</Button>
    <Button on:click={setPlacement('center')}>center</Button>
    <Button on:click={setPlacement('center-right')}>center-right</Button>
    <Button on:click={setPlacement('bottom-left')}>bottom-left</Button>
    <Button on:click={setPlacement('bottom-center')}>bottom-center</Button>
    <Button on:click={setPlacement('bottom-right')}>bottom-right</Button>
  </div>
  <Modal title="Terms of Service" bind:open={placementModal} {placement}>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
</ExampleDiv>

```html
<script>
  let placementModal = false
  const setPlacement = (value) => () => {
    placement = value;
    open = true
  };
</script>

<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
  <Button on:click={setPlacement('top-left')}>top-left</Button>
  <Button on:click={setPlacement('top-center')}>top-center</Button>
  <Button on:click={setPlacement('top-right')}>top-right</Button>
  <Button on:click={setPlacement('center-left')}>center-left</Button>
  <Button on:click={setPlacement('center')}>center</Button>
  <Button on:click={setPlacement('center-right')}>center-right</Button>
  <Button on:click={setPlacement('bottom-left')}>bottom-left</Button>
  <Button on:click={setPlacement('bottom-center')}>bottom-center</Button>
  <Button on:click={setPlacement('bottom-right')}>bottom-right</Button>
</div>

<Modal title="Terms of Service" bind:open={placementModal} {placement}>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot='footer'>
    <Button>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Modal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
