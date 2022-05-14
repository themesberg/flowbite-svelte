<script lang="ts">
  import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Label, TextInput, Checkbox, Select } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiExclamationCircleOutline, HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';

  let modalOpen1 = false;
  let modalOpen2 = false;
  let modalOpen3 = false;
  let modalOpen4 = false;
  let selectedSize: any = '5xl';
  let modalOpen5 = false;
  let selectedPlacement: any = 'center';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default modal</span>
    <Card>
      <Button on:click={() => (modalOpen1 = true)}>Toggle modal</Button>
      <Modal bind:open={modalOpen1}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody class="space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button on:click={() => (modalOpen1 = false)}>I accept</Button>
          <Button color="alternative" on:click={() => (modalOpen1 = false)}>Decline</Button>
        </ModalFooter>
      </Modal>
      <HighlightSvelte
        code={`${'<'}script>
  let open = false;
  const toggle = () => (open = !open);
</script>

<Button on:click={toggle}>Toggle modal</Button>
<Modal bind:open={open}>
  <ModalHeader>Terms of Service</ModalHeader>
  <ModalBody class="space-y-6">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
      to ensure a common set of data rights in the European Union. It requires organizations to notify users as
      soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button on:click={toggle}>I accept</Button>
    <Button color="alternative" on:click={toggle}>Decline</Button>
  </ModalFooter>
</Modal>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Pop-up modal</span>
    <Card>
      <Button on:click={() => (modalOpen2 = true)}>Toggle modal</Button>
      <Modal bind:open={modalOpen2} size="md" popup={true}>
        <ModalHeader />
        <ModalBody class="text-center">
          <HiExclamationCircleOutline class="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div class="flex justify-center gap-4">
            <Button color="red" on:click={() => (modalOpen2 = false)}>Yes, I'm sure</Button>
            <Button color="alternative" on:click={() => (modalOpen2 = false)}>No, cancel</Button>
          </div>
        </ModalBody>
      </Modal>
      <HighlightSvelte
        code={`${'<'}script>
  let open = false;
  const toggle = () => (open = !open);
</script>

<Button on:click={toggle}>Toggle modal</Button>
<Modal bind:open={open} size="md" popup={true}>
  <ModalHeader />
  <ModalBody class="text-center">
    <HiExclamationCircleOutline class="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Are you sure you want to delete this product?
    </h3>
    <div class="flex justify-center gap-4">
      <Button color="red" on:click={toggle}>Yes, I'm sure</Button>
      <Button color="alternative" on:click={toggle}>No, cancel</Button>
    </div>
  </ModalBody>
</Modal>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Form elements </span>
    <Card>
      <Button on:click={() => (modalOpen3 = true)}>Toggle modal</Button>
      <Modal bind:open={modalOpen3} size="md" popup={true}>
        <ModalHeader />
        <ModalBody class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <Label class="mb-2 block" htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              class="dark:border-gray-500 dark:bg-gray-600"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <Label class="mb-2 block" htmlFor="password">Your password</Label>
            <TextInput id="password" class="dark:border-gray-500 dark:bg-gray-600" type="password" required={true} />
          </div>
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <Checkbox id="remember" class="dark:border-gray-500 dark:bg-gray-600" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="/modal" class="text-sm text-blue-700 hover:underline dark:text-blue-500"> Lost Password? </a>
          </div>
          <Button class="w-full">Log in to your account</Button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a href="/modal" class="text-blue-700 hover:underline dark:text-blue-500"> Create account </a>
          </div>
        </ModalBody>
      </Modal>
      <HighlightSvelte
        code={`${'<'}script>
  let open = false;
  const toggle = () => (open = !open);
</script>

<Button on:click={toggle}>Toggle modal</Button>
<Modal bind:open={open} size="md" popup={true}>
  <ModalHeader />
  <ModalBody class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <div>
      <Label class="mb-2 block" htmlFor="email">Your email</Label>
      <TextInput
        id="email"
        class="dark:border-gray-500 dark:bg-gray-600"
        placeholder="name@company.com"
        required={true}
      />
    </div>
    <div>
      <Label class="mb-2 block" htmlFor="password">Your password</Label>
      <TextInput id="password" class="dark:border-gray-500 dark:bg-gray-600" type="password" required={true} />
    </div>
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <Checkbox id="remember" class="dark:border-gray-500 dark:bg-gray-600" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <a href="/modal" class="text-sm text-blue-700 hover:underline dark:text-blue-500"> Lost Password? </a>
    </div>
    <Button class="w-full">Log in to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?
      <a href="/modal" class="text-blue-700 hover:underline dark:text-blue-500"> Create account </a>
    </div>
  </ModalBody>
</Modal>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Sizing </span>
    <Card>
      <div class="flex flex-wrap gap-4">
        <Select class="!w-40" bind:value={selectedSize}>
          <option value="sm"> sm </option>
          <option value="md"> md </option>
          <option value="lg"> lg </option>
          <option value="xl"> xl </option>
          <option value="2xl"> 2xl </option>
          <option value="3xl"> 3xl </option>
          <option value="4xl"> 4xl </option>
          <option value="5xl"> 5xl </option>
          <option value="6xl"> 6xl </option>
          <option value="7xl"> 7xl </option>
        </Select>
        <Button on:click={() => (modalOpen4 = true)}>Toggle modal</Button>
      </div>
      <Modal bind:open={modalOpen4} size={selectedSize}>
        <ModalHeader>Sized modal</ModalHeader>
        <ModalBody class="space-y-6 p-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button on:click={() => (modalOpen4 = false)}>I accept</Button>
          <Button color="alternative" on:click={() => (modalOpen4 = false)}>Decline</Button>
        </ModalFooter>
      </Modal>
      <HighlightSvelte
        code={`${'<'}script>
  let open = false;
  let selectedSize = "${selectedSize}";
  const toggle = () => (open = !open);
</script>

<div class="flex flex-wrap gap-4">
  <Select class="!w-40" bind:value={selectedSize}>
    <option value="sm"> sm </option>
    <option value="md"> md </option>
    <option value="lg"> lg </option>
    <option value="xl"> xl </option>
    <option value="2xl"> 2xl </option>
    <option value="3xl"> 3xl </option>
    <option value="4xl"> 4xl </option>
    <option value="5xl"> 5xl </option>
    <option value="6xl"> 6xl </option>
    <option value="7xl"> 7xl </option>
  </Select>
  <Button on:click={toggle}>Toggle modal</Button>
</div>
<Modal bind:open={open} size={selectedSize}>
  <ModalHeader>Sized modal</ModalHeader>
  <ModalBody class="space-y-6 p-6">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
      to ensure a common set of data rights in the European Union. It requires organizations to notify users as
      soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button on:click={toggle}>I accept</Button>
    <Button color="alternative" on:click={toggle}>Decline</Button>
  </ModalFooter>
</Modal>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Placement </span>
    <Card>
      <div class="flex flex-wrap gap-4">
        <Select class="!w-40" defaultValue="md" bind:value={selectedPlacement}>
          <option value="center"> Center </option>
          <option value="top-left"> Top left </option>
          <option value="top-center"> Top center </option>
          <option value="top-right"> Top right </option>
          <option value="center-left"> Center left </option>
          <option value="center-right"> Center right </option>
          <option value="bottom-right"> Bottom right </option>
          <option value="bottom-center"> Bottom center </option>
          <option value="bottom-left"> Bottom left </option>
        </Select>
        <Button on:click={() => (modalOpen5 = true)}>Toggle modal</Button>
      </div>
      <Modal bind:open={modalOpen5} placement={selectedPlacement}>
        <ModalHeader>Placed modal</ModalHeader>
        <ModalBody class="space-y-6 p-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button on:click={() => (modalOpen5 = false)}>I accept</Button>
          <Button color="alternative" on:click={() => (modalOpen5 = false)}>Decline</Button>
        </ModalFooter>
      </Modal>
      <HighlightSvelte
        code={`${'<'}script>
  let open = false;
  let selectedPlacement = "${selectedPlacement}";
  const toggle = () => (open = !open);
</script>

<div class="flex flex-wrap gap-4">
  <Select class="!w-40" bind:value={selectedPlacement}>
    <option value="center"> Center </option>
    <option value="top-left"> Top left </option>
    <option value="top-center"> Top center </option>
    <option value="top-right"> Top right </option>
    <option value="center-left"> Center left </option>
    <option value="center-right"> Center right </option>
    <option value="bottom-right"> Bottom right </option>
    <option value="bottom-center"> Bottom center </option>
    <option value="bottom-left"> Bottom left </option>
  </Select>
  <Button on:click={toggle}>Toggle modal</Button>
</div>
<Modal bind:open={open} placement={selectedPlacement}>
  <ModalHeader>Placed modal</ModalHeader>
  <ModalBody class="space-y-6 p-6">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
      to ensure a common set of data rights in the European Union. It requires organizations to notify users as
      soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button on:click={toggle}>I accept</Button>
    <Button color="alternative" on:click={toggle}>Decline</Button>
  </ModalFooter>
</Modal>`}
      />
    </Card>
  </div>
</div>
