<script>
  import { ButtonGroup, Button, GradientButton } from "$lib";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";

  const handleClick = () => {
    alert("Clicked");
  };
</script>

<h1 class="my-4 text-3xl">Button Group</h1>

<h2 class="my-4 text-2xl">Setup</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup class="*:ring-primary-700!">
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Default</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup class="*:ring-primary-700!">
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Disabled</h2>
<div class="my-4 flex justify-center space-x-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup>
    <Button disabled>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <ButtonGroup disabled>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">More examples</h2>

<div class="my-4 flex flex-col flex-wrap gap-4 rounded border border-gray-200 p-4 text-gray-900 dark:border-gray-600 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Profile</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>

  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Profile</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>

  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="red">Profile</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>

  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <GradientButton shadow color="green">Profile</GradientButton>
    <GradientButton shadow color="pink">Settings</GradientButton>
    <GradientButton shadow color="teal">Messages</GradientButton>
  </ButtonGroup>

  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <GradientButton color="purpleToBlue">Profile</GradientButton>
    <GradientButton color="cyanToBlue">Settings</GradientButton>
    <GradientButton color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>

  <div class="py-4">Dualtone gradient pill</div>
  <ButtonGroup class="space-x-px">
    <GradientButton pill color="purpleToBlue">Profile</GradientButton>
    <GradientButton pill color="cyanToBlue">Settings</GradientButton>
    <GradientButton pill color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Button group as links</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup class="*:ring-primary-700!">
    <Button href="/">Profile</Button>
    <Button href="/">Settings</Button>
    <Button href="/">Messages</Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Group buttons with icons</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup class="*:ring-primary-700!">
    <Button>
      <UserCircleSolid class="me-2 h-4 w-4" />
      Profile
    </Button>
    <Button>
      <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
      Settings
    </Button>
    <Button>
      <DownloadSolid class="me-2 h-4 w-4" />
      Download
    </Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Outline</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup>
    <Button outline color="dark">Profile</Button>
    <Button outline color="dark">Settings</Button>
    <Button outline color="dark">Messages</Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Outline with icon</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup>
    <Button outline color="dark">
      <UserCircleSolid class="me-2 h-4 w-4" />
      Profile
    </Button>
    <Button outline color="dark">
      <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
      Settings
    </Button>
    <Button outline color="dark">
      <DownloadSolid class="me-2 h-4 w-4" />
      Download
    </Button>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Events</h2>

<div class="my-4 flex justify-center rounded border border-gray-200 p-4 dark:border-gray-600">
  <ButtonGroup class="*:ring-primary-700!">
    <Button onclick={handleClick}>Click me</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>
