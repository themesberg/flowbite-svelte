<script>
  import { Li, List, Alert, Button } from "$lib";
  import { EnvelopeSolid, EyeSolid, InfoCircleSolid } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
  let alertStatus = $state(true);
  const closeAlert = () => {
    alert("Clicked closeAlert.");
    alertStatus = !alertStatus;
  };
</script>

<h1 class="my-4 text-3xl">Alert</h1>

<h2 class="my-4 text-2xl">Default alert</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert>
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="blue">
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red">
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green">
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow">
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="secondary">
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<h2 class="my-4 text-2xl">Alerts with icon</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="blue">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="secondary">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<h2 class="my-4 text-2xl">Bordered alerts</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert border>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert border color="blue">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert border color="red">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert border color="green">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert border color="yellow">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert border color="secondary">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<h2 class="my-4 text-2xl">Alerts with list</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert class="items-start!">
    {#snippet icon()}<span>
        <InfoCircleSolid class="h-5 w-5" />
        <span class="sr-only">Info</span>
      </span>
    {/snippet}
    <p class="font-medium">Ensure that these requirements are met:</p>
    <ul class="ms-4 mt-1.5 list-inside list-disc">
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </Alert>
  <Alert color="blue" class="items-start!">
    {#snippet icon()}<span>
        <InfoCircleSolid class="h-5 w-5" />
        <span class="sr-only">Info</span>
      </span>
    {/snippet}
    <p class="font-medium">Ensure that these requirements are met:</p>
    <List class="ms-4 mt-1.5">
      <Li>At least 10 characters (and up to 100 characters)</Li>
      <Li>At least one lowercase character</Li>
      <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
    </List>
  </Alert>
</div>

<h2 class="my-4 text-2xl">Dismissable alerts</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert dismissable>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    A simple default alert with an
    <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="blue" dismissable>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="red" dismissable>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="green" dismissable>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="yellow" dismissable transition={fly} params={{ x: 200 }}>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    An alert with non default animation - fly away.
  </Alert>
  <Alert color="purple" dismissable closeIcon={EnvelopeSolid}>
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    An alert with the custom dismissal button. slot
  </Alert>
</div>

<h2 class="my-4 text-2xl">Border accent</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert rounded={false} class="border-t-4">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" rounded={false} class="border-t-4">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" rounded={false} class="border-t-4">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" rounded={false} class="border-t-4">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="secondary" rounded={false} class="flex-row-reverse border-t-4">
    {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<h2 class="my-4 text-2xl">Additional content</h2>

<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert>
    <div class="flex items-center gap-3">
      <InfoCircleSolid class="h-5 w-5" />
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <div class="flex gap-2">
      <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
      <Button size="xs" outline>Go to Home</Button>
    </div>
  </Alert>
  <Alert color="green">
    <div class="flex items-center gap-3">
      <InfoCircleSolid class="h-5 w-5" />
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <div class="flex gap-2">
      <Button size="xs" color="green"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
      <Button size="xs" outline color="green">Go to Home</Button>
    </div>
  </Alert>
</div>

<h2 class="my-4 text-2xl">Custom color</h2>
<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert class="bg-sky-500 text-white">Your content</Alert>
</div>

<h2 class="my-4 text-2xl">Events</h2>
<div class="my-4 flex flex-col gap-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Alert dismissable onclick={closeAlert} bind:alertStatus>Close me</Alert>
</div>
