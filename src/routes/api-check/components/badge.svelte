<script lang="ts">
  import { Badge, Button, Indicator, type BadgeProps } from "$lib";

  import { ClockSolid, EnvelopeSolid, CheckOutline, CloseCircleSolid } from "flowbite-svelte-icons";

  function handleClose(event: Event) {
    event.preventDefault();
    alert("Badge dismissed");
  }

  setInterval(handleHover, 500);

  let color: BadgeProps["color"] = $state("primary");
  function handleHover() {
    color = color === "primary" ? "secondary" : "primary";
  }

  let openBadgeStatus = $state(false);
  function openBadge() {
    openBadgeStatus = true;
  }
</script>

<h1 class="my-4 text-3xl">Badge</h1>

<h2 class="my-4 text-2xl">Default badge</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge>Default</Badge>
  <Badge color="gray">Gray</Badge>
  <Badge color="red">Red</Badge>
  <Badge color="green">Green</Badge>
  <Badge color="yellow">Yellow</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="purple">Purple</Badge>
  <Badge color="pink">Pink</Badge>
</div>

<h2 class="my-4 text-2xl">Large badges</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge large>Default</Badge>
  <Badge large color="gray">Gray</Badge>
  <Badge large color="red">Red</Badge>
  <Badge large color="green">Green</Badge>
  <Badge large color="yellow">Yellow</Badge>
  <Badge large color="indigo">Indigo</Badge>
  <Badge large color="purple">Purple</Badge>
  <Badge large color="pink">Pink</Badge>
</div>

<h2 class="my-4 text-2xl">Bordered badge</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge border>Default</Badge>
  <Badge border color="gray">Gray</Badge>
  <Badge border color="red">Red</Badge>
  <Badge border color="green">Green</Badge>
  <Badge border color="yellow">Yellow</Badge>
  <Badge border color="indigo">Indigo</Badge>
  <Badge border color="purple">Purple</Badge>
  <Badge border color="pink">Pink</Badge>
</div>

<h2 class="my-4 text-2xl">Pills badge</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge rounded>Default</Badge>
  <Badge rounded color="gray">Gray</Badge>
  <Badge rounded color="red">Red</Badge>
  <Badge rounded color="green">Green</Badge>
  <Badge rounded color="yellow">Yellow</Badge>
  <Badge rounded color="indigo">Indigo</Badge>
  <Badge rounded color="purple">Purple</Badge>
  <Badge rounded color="pink">Pink</Badge>
</div>

<h2 class="my-4 text-2xl">Badges as links</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge href="/">Badge link</Badge>
  <Badge href="/" large>Badge link</Badge>
  <Badge href="/" border>Badge link</Badge>
  <Badge href="/" rounded>Badge link</Badge>
</div>

<h2 class="my-4 text-2xl">Badges with icon</h2>

<div class="flex flex-wrap gap-2 rounded border p-4">
  <Badge color="gray" border>
    <ClockSolid class="me-1.5 h-2.5 w-2.5" />
    3 days ago
  </Badge>
  <Badge border>
    <ClockSolid class="text-primary-800 dark:text-primary-400 me-1.5 h-2.5 w-2.5" />
    2 minutes ago
  </Badge>
</div>

<h2 class="my-4 text-2xl">Notification badge</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
  </Button>

  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="gray" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
  </Button>
</div>

<h2 class="my-4 text-2xl">Button with badge</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Button>
    Messages
    <Badge rounded class="text-primary-800 dark:text-primary-800 ms-2 h-4 w-4 bg-white p-0 font-semibold dark:bg-white">2</Badge>
  </Button>
</div>

<h2 class="my-4 text-2xl">Badge with icon only</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Badge color="gray" large class="p-1! font-semibold!">
    <CheckOutline class="h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="p-1! font-semibold!">
    <CheckOutline class="text-primary-800 dark:text-primary-400 h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
</div>

<h2 class="my-4 text-2xl">Dismissable badges</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Badge dismissable large>Default</Badge>
  <Badge dismissable large color="gray">Gray</Badge>
  <Badge dismissable large color="red">Red</Badge>
  <Badge dismissable large color="green">Green</Badge>
  <Badge dismissable large color="yellow">Yellow</Badge>
  <Badge dismissable large color="indigo">Indigo</Badge>
  <Badge dismissable large color="purple">Purple</Badge>
  <Badge dismissable large color="pink">Pink</Badge>
</div>

<div class="my-4 flex flex-wrap gap-4 rounded border p-4">
  <Badge dismissable>
    Default
    {#snippet icon()}
      <button type="button" class="bg-primary-500 dark:bg-primary-400 dark:text-primary-800 hover:bg-primary-900 my-0.5 ms-1.5 -me-1.5 inline-flex items-center rounded-full p-0.5 text-sm text-white hover:text-white dark:hover:bg-red-900 dark:hover:text-yellow-300" aria-label="Remove">
        <CloseCircleSolid class="h-4 w-4" />
        <span class="sr-only">Remove badge</span>
      </button>
    {/snippet}
  </Badge>

  <Badge dismissable large onclose={handleClose}>Default</Badge>
</div>

<h2 class="my-4 text-2xl">Dynamic color</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Badge large {color}>Blinking badge</Badge>
</div>

<h2 class="my-4 text-2xl">Opening badge</h2>

<div class="flex flex-wrap gap-4 rounded border p-4">
  <Button onclick={openBadge}>Open badge</Button>
  <Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>
</div>
