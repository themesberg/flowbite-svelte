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
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A, Alert } from '$lib'  

  const components = 'SpeedDial, SpeedDialButton'
</script>

Get started with the speed dial component to show a list of buttons or menu items positioned relative to the body in either corner as a quick way to allow certains actions to be made by your users.

## Default speed dial

To initialize a speed dial component you need to wrap the trigger element and the list of items inside an element and use the data-dial-init data attribute on it.

<Alert>

**Note!** Default class for speed dial is `fixed right-6 bottom-6`. However for the sake of the examples below `fixed` must be changed to `absolute`, therefore you can notice `defaultClass="absolute right-6 left-6"` at every example.

</Alert>

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-6 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Colors

The Speed Dial components accommodate a variety of Button component properties, including color options (blue, dark, alternative, light, green, red, yellow, primary, and purple), gradient, shadow, and outline styles. For further information, please refer to **[the Button component](https://flowbite-svelte.com/components/button)** documentation.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial color="primary" defaultClass="absolute left-6 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="purple" defaultClass="absolute left-24 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="light" defaultClass="absolute left-44 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="dark" defaultClass="absolute left-64 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial color="red" defaultClass="absolute right-6 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="green" defaultClass="absolute right-24 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="yellow" defaultClass="absolute right-44 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="blue" defaultClass="absolute right-64 bottom-6">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial color="purpleToBlue" gradient defaultClass="absolute left-6 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="cyanToBlue" gradient defaultClass="absolute left-24 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="greenToBlue" gradient defaultClass="absolute left-44 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="purpleToPink" gradient defaultClass="absolute left-64 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial color="green" outline defaultClass="absolute right-6 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="red" outline defaultClass="absolute right-24 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="blue" outline defaultClass="absolute right-44 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="purple" outline defaultClass="absolute right-64 bottom-36">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial color="blue" gradient defaultClass="absolute left-6 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="green" gradient defaultClass="absolute left-24 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="cyan" gradient defaultClass="absolute left-44 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial color="teal" gradient defaultClass="absolute left-64 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial shadow="blue" gradient color="blue" defaultClass="absolute right-6 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial shadow="green" gradient color="green" defaultClass="absolute right-24 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial shadow="purple" gradient color="purple" defaultClass="absolute right-44 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
<SpeedDial shadow="pink" gradient color="pink" defaultClass="absolute right-64 bottom-64">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Square speed dial

Use this example to make the trigger button’s style square instead of a full circle. As `SpeedDialButton` is an instance of `Button` we use the `pill` property to achevie the effect.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false}>
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Text inside button

This example can be used to show the descriptive text inside the button instead of a tooltip.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Text outside button

Use this example to show the text of each button outside of the speed dial as an alternative style.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" textOutside>
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" pill={false} tooltip="none" textOutside>
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Dropdown menu

This example can be used to show a list of menu items instead of buttons when activating the speed dial.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
  <Icon name="dots-horizontal-outline" slot="icon" class="w-8 h-8" />
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="share-nodes-solid" class="w-3.5 h-3.5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="print-solid" class="w-3.5 h-3.5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="download-solid" class="w-3.5 h-3.5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="file-copy-solid" class="w-3.5 h-3.5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
  <Icon name="dots-horizontal-outline" slot="icon" class="w-8 h-8" />
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="share-nodes-solid" class="w-3.5 h-3.5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="print-solid" class="w-3.5 h-3.5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="download-solid" class="w-3.5 h-3.5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <Icon name="file-copy-solid" class="w-3.5 h-3.5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
```

## Alternative menu

This example can be used to show an alternative style when showing a list of menu items.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute right-24 bottom-6" tooltip="none" placement="top-end">
  <Icon name="pen-solid" slot="icon" class="w-8 h-8" />
  <Listgroup active>
    <ListgroupItem class="flex">
      <Icon name="share-nodes-solid" class="mr-2 w-5 h-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="print-solid" class="mr-2 w-5 h-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="download-solid" class="mr-2 w-5 h-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="file-copy-solid" class="mr-2 w-5 h-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" tooltip="none" pill={false} placement="top-end">
  <Listgroup active>
    <ListgroupItem class="flex">
      <Icon name="share-nodes-solid" class="mr-2 w-5 h-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="print-solid" class="mr-2 w-5 h-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="download-solid" class="mr-2 w-5 h-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <Icon name="file-copy-solid" class="mr-2 w-5 h-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
```

## Alignment - Position

Align the speed dial menu items by using property `placement="top|right|left|bottom"`.

Control the main button position using the flexbox utility classes from Tailwind CSS through property `defaultClass`.

```svelte example class="relative h-[400px]"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
  const placements = [
    ['left-2 top-2', 'right', 'bottom'],
    ['right-6 top-2', 'bottom', 'left'],
    ['right-6 bottom-6', 'left', 'top'],
    ['left-2 bottom-6', 'top', 'right']
  ];
</script>

{#each placements as [position, placement, tooltip]}
  <SpeedDial defaultClass="absolute {position}" {placement}>
    <SpeedDialButton name="Share" {tooltip}>
      <Icon name="share-nodes-solid" class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Print" {tooltip}>
      <Icon name="print-solid" class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Download" {tooltip}>
      <Icon name="download-solid" class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Copy" {tooltip}>
      <Icon name="file-copy-solid" class="w-5 h-5" />
    </SpeedDialButton>
  </SpeedDial>
{/each}
```

## Triggering

Use the `trigger="click|hover"` attribute of the speed dial component to set which type of action should activate the speed dial: click or hover.

The default trigger type is hover for each speed dial component.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  import { Icon } from 'flowbite-svelte-icons';
</script>

<SpeedDial defaultClass="absolute left-2 bottom-6" trigger="hover" tooltip="right">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="absolute right-6 bottom-6" trigger="click">
  <SpeedDialButton name="Share">
    <Icon name="share-nodes-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <Icon name="print-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <Icon name="download-solid" class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <Icon name="file-copy-solid" class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
```

## Control open state

Use the `open` property to control the state of the popup menu.

```svelte example class="relative h-96"
<script>
  import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
  let open = false;

  const close = () => {
    open = false;
  };
</script>

<SpeedDial bind:open defaultClass="absolute right-6 bottom-6">
  <SpeedDialButton name="Share" on:click={close}>Share</SpeedDialButton>
  <SpeedDialButton name="Print" on:click={close}>Print</SpeedDialButton>
</SpeedDial>
```

The default trigger type is hover for each speed dial component.

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### SpeedDial styling

- Use the `class` prop to overwrite `defaultClass`.

### SpeedDialButton styling

- Use the `class` prop to overwrite `btnDefaultClass`.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Speed Dial](https://flowbite.com/docs/components/speed-dial/)
