# Svelte Speed Dial - Flowbite


Get started with the speed dial component to show a list of buttons or menu items positioned relative to the body in either corner as a quick way to allow certains actions to be made by your users.

## Default speed dial

To initialize a speed dial component you need to wrap the trigger element and the list of items inside an element and use the data-dial-init data attribute on it.

You can use any elment as `SpeedDial` trigger (see the [Custom main button](#custom-main-button) example), but for convenience `SpeedDialTrigger` element is used in the below examples.

<Alert>

**Note!** Default class for speed dial was `fixed end-6 bottom-6`. Now no positioning is set by default.

</Alert>

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
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

The Speed Dial components accommodate color options ("red" | "lime" | "green" | "teal" | "cyan" | "blue" | "purple" | "pink" | undefined), gradient, shadow, and outline styles. For further information, please refer to **[the Button component](https://flowbite-svelte.com/components/button)** documentation.

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { ShareNodesSolid } from "flowbite-svelte-icons";
</script>

<div class="grid w-fit grid-cols-8 gap-x-6 gap-y-18">
  <SpeedDialTrigger color="red" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purple" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="light" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="dark" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="red" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="yellow" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purpleToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyanToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="greenToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purpleToPink" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="green" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="red" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purple" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="blue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyan" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="teal" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger shadow gradient color="blue" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="green" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="purple" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="pink" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
</div>
```

## Square speed dial

Use this example to make the trigger button’s style square instead of a full circle. As `SpeedDialButton` is an instance of `Button` we use the `pill` property to achevie the effect.

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
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

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
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

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
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

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte";
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

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte";
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

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the speed dial. Press `ESC` to close it.

## Alignment - Position

Align the speed dial menu items by using property `placement="top|right|left|bottom"`.

Control the main button position using the flexbox utility classes from Tailwind CSS through property `class`.

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/dom";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
  type ExPosition = [string, Placement, Placement | "none"];
  const placements: ExPosition[] = [
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

## Transition

Since the `SpeedDial` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
  import { blur, scale } from "svelte/transition";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6" />
<SpeedDial transition={blur} transitionParams={{ duration: 1000 }}>
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
<SpeedDial transition={scale} transitionParams={{ duration: 1000 }}>
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

## Triggering

Use the `trigger="click|hover"` attribute of the speed dial component to set which type of action should activate the speed dial: click or hover.

The default trigger type is hover for each speed dial component.

```svelte
<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
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

The default trigger type is hover for each speed dial component.

## Custom main button

You can change the main button to any element you want.

```svelte
<script lang="ts">
  import { Button, SpeedDial, SpeedDialButton, Rating } from "flowbite-svelte";
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

### SpeedDial

#### Types

[SpeedDialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1530)

#### Props

- children
- popperClass
- placement: "top"
- pill: true
- tooltip: "left"
- trigger: "hover"
- textOutside: false
- class: className
- classes
- isOpen: $bindable(false)

### SpeedDialButton

#### Types

[SpeedDialButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1545)

#### Props

- children
- name: ""
- color: "light"
- tooltip: _tooltip
- pill: context.pill
- textOutside: context.textOutside
- textClass
- class: className
- classes

### SpeedDialTrigger

#### Types

[SpeedDialTriggerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1528)

#### Props

- children
- name: "Open actions menu"
- gradient: false
- icon
- pill: true
- color
- class: className


## References

- [Flowbite Speed Dial](https://flowbite.com/docs/components/speed-dial/)
