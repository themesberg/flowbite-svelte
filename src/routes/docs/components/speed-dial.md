---
layout: componentLayout
title: Svelte Speed Dial - Flowbite
breadcrumb_title: Svelte Speed Dial
component_title: Speed Dial
dir: Components
description: The speed dial component can be used as a quick way to show a list of action buttons to a user when hovering or clicking on the main trigger element.
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A, Alert } from '$lib'  
  const dirName = toKebabCase(component_title)
</script>

Get started with the speed dial component to show a list of buttons or menu items positioned relative to the body in either corner as a quick way to allow certains actions to be made by your users.

## Default speed dial

To initialize a speed dial component you need to wrap the trigger element and the list of items inside an element and use the data-dial-init data attribute on it.

You can use any elment as `SpeedDial` trigger (see the [Custom main button](#custom-main-button) example), but for convenience `SpeedDialTrigger` element is used in the below examples.

<Alert>

**Note!** Default class for speed dial was `fixed end-6 bottom-6`. Now no positioning is set by default.

</Alert>



```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Colors

The Speed Dial components accommodate a variety of Button component properties, including color options (blue, dark, alternative, light, green, red, yellow, primary, and purple), gradient, shadow, and outline styles. For further information, please refer to **[the Button component](https://flowbite-svelte-next.com/components/button)** documentation.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid } from "flowbite-svelte-icons";
</script>

<div class="grid w-fit grid-cols-8 gap-x-6 gap-y-18">
<SpeedDialTrigger color="primary"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger color="purple"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger color="light"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="dark"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="red"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="yellow"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purpleToBlue" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyanToBlue" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="greenToBlue" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purpleToPink" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="green" outline/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="red" outline/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue" outline/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purple" outline/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="blue" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyan" gradient/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="teal" gradient/>
<SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger shadow gradient color="blue"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="green"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="purple"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="pink"/>
<SpeedDial>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
</div>
```

## Square speed dial

Use this example to make the trigger button’s style square instead of a full circle. As `SpeedDialButton` is an instance of `Button` we use the `pill` property to achevie the effect.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial pill={false}>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Text inside button

This example can be used to show the descriptive text inside the button instead of a tooltip.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6" />
<SpeedDial tooltip="none">
  <SpeedDialButton name="Share" textClass="text-blue-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial pill={false} tooltip="none">
  <SpeedDialButton name="Share" textClass="text-green-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Text outside button

Use this example to show the text of each button outside of the speed dial as an alternative style.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6" />
<SpeedDial tooltip="none" textOutside>
  <SpeedDialButton name="Share" textClass="text-pink-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial pill={false} tooltip="none" textOutside>
  <SpeedDialButton name="Share" textClass="text-purple-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Dropdown menu

This example can be used to show a list of menu items instead of buttons when activating the speed dial.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte-next";
  import { DotsHorizontalOutline, DotsVerticalOutline, ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6">
  {#snippet icon()}
    <DotsHorizontalOutline class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <ShareNodesSolid class="h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <PrinterSolid class="h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <DownloadSolid class="h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <FileCopySolid class="h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6">
  {#snippet icon()}
    <DotsVerticalOutline class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" pill={false} placement="top-end">
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <ShareNodesSolid class="h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <PrinterSolid class="h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <DownloadSolid class="h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <FileCopySolid class="h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
```

## Alternative menu

This example can be used to show an alternative style when showing a list of menu items.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte-next";
  import { PenSolid, ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6">
  {#snippet icon()}
    <PenSolid class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
  <Listgroup active>
    <ListgroupItem class="flex">
      <ShareNodesSolid class="me-2 h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <PrinterSolid class="me-2 h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <DownloadSolid class="me-2 h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <FileCopySolid class="me-2 h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial tooltip="none" pill={false} placement="top-end">
  <Listgroup active>
    <ListgroupItem class="flex">
      <ShareNodesSolid class="me-2 h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <PrinterSolid class="me-2 h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <DownloadSolid class="me-2 h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <FileCopySolid class="me-2 h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
```

## Alignment - Position

Align the speed dial menu items by using property `placement="top|right|left|bottom"`.

Control the main button position using the flexbox utility classes from Tailwind CSS through property `class`.

```svelte example class="relative h-[400px]" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
  const placements = [
    ["start-2 top-2", "right", "bottom"],
    ["end-6 top-2", "bottom", "left"],
    ["end-6 bottom-6", "left", "top"],
    ["start-2 bottom-6", "top", "right"]
  ];
</script>

{#each placements as [position, placement, tooltip]}
  <SpeedDialTrigger class="absolute {position}" />
  <SpeedDial {placement}>
    <SpeedDialButton name="Share" {tooltip}>
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Print" {tooltip}>
      <PrinterSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Download" {tooltip}>
      <DownloadSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Copy" {tooltip}>
      <FileCopySolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
{/each}
```

## Triggering

Use the `trigger="click|hover"` attribute of the speed dial component to set which type of action should activate the speed dial: click or hover.

The default trigger type is hover for each speed dial component.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute start-2 bottom-6" />
<SpeedDial trigger="hover" tooltip="right">
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial trigger="click">
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Control open state

Use the `open` property to control the state of the popup menu.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import {SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte-next";
  let open = false;

  const close = () => {
    open = false;
  };
</script>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial bind:open>
  <SpeedDialButton name="Share" on:click={close}>Share</SpeedDialButton>
  <SpeedDialButton name="Print" on:click={close}>Print</SpeedDialButton>
</SpeedDial>
```

The default trigger type is hover for each speed dial component.

## Custom main button

You can change the main button to any element you want by using the `slot='button'`.

```svelte example class="relative h-96" hideResponsiveButtons
<script>
  import { Button, SpeedDial, SpeedDialButton, Rating } from "flowbite-svelte-next";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<Button color="green" class="absolute end-6 bottom-6 py-0">
  <Rating total={1} rating={0.5} size={48} /> Rating
</Button>
<SpeedDial placement="top-end">
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### SpeedDial styling

- Use the `class` prop to overwrite default styling.

### SpeedDialButton styling

- Use the `class` prop to overwrite default styling.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Speed Dial](https://flowbite.com/docs/components/speed-dial/)

<GitHubCompoLinks />
