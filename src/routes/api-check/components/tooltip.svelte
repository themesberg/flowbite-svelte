<script lang="ts">
  import { P, A } from "$lib";
  import type { Placement } from "@floating-ui/utils";
  import { Tooltip, Button } from "$lib";
  let placement: Placement = "top";
  function onbeforetoggle(ev: Event) {
    const trigger = (ev as any).trigger;
    if (trigger?.id) {
      placement = trigger.id.replace("ref-", "");
    }
  }
  let placement2: Placement = "left";
</script>

<h1 class="my-4 text-3xl">Tooltip</h1>

<h2 class="text-2xl">Default tooltip example</h2>
<div class="my-4 flex h-32 items-end justify-center rounded border p-8">
  <Button>Default tooltip</Button>
  <Tooltip>Tooltip content</Tooltip>
</div>

If you have anything else between the button and tooltip, they won't find each other and you will need to specify the link between them by setting the property `triggeredBy` to the CSS query of the element that triggers the tooltip. Most of the time you will want to use the `id` attribute of the element to link them, but you can use any CSS query you want. See the examples further down.

<div class="my-4 flex h-32 items-end justify-center rounded border p-8">
  <Button id="specific-button-anywhere-on-page">Default tooltip</Button>
  <P>hi mom</P>
  <P>lorem ipsum, content blah blah, other stuff</P>
  <Tooltip triggeredBy="#specific-button-anywhere-on-page">Tooltip content</Tooltip>
</div>

<h2 class="text-2xl">Tooltip types</h2>
You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `type=light|dark` data attribute.

<div class="my-4 flex h-32 items-end justify-center space-x-4 rounded border p-8">
  <Button>Light tooltip</Button>
  <Tooltip type="light">Tooltip content</Tooltip>
  <Button>Default tooltip</Button>
  <Tooltip type="auto">Tooltip content</Tooltip>
  <Button>Dark tooltip</Button>
  <Tooltip type="dark">Tooltip content</Tooltip>
</div>

<h2 class="text-2xl">Placement</h2>
The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement=top|right|bottom|left` attribute. **Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

<div class="my-4 flex h-32 items-end justify-center space-x-4 rounded border p-8">
  <Button>Tooltip left</Button>
  <Tooltip placement="left">Tooltip content - Left</Tooltip>
  <Button>Tooltip top</Button>
  <Tooltip placement="top">Tooltip content - Top</Tooltip>
  <Button>Tooltip bottom</Button>
  <Tooltip placement="bottom">Tooltip content - Bottom</Tooltip>
  <Button>Tooltip right</Button>
  <Tooltip placement="right">Tooltip content - Right</Tooltip>
</div>

<h2 class="text-2xl">Triggering</h2>

<div class="my-4 flex h-32 items-end justify-center space-x-4 rounded border p-8">
  <Button id="hover">Tooltip hover</Button>
  <Button id="click">Tooltip click</Button>
  <Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
  <Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
</div>

<h2 class="text-2xl">Disable arrow</h2>

<div class="my-4 flex h-32 items-end justify-center rounded border p-8">
  <Button id="disable-arrow">Default tooltip</Button>
  <Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>
</div>

<h2 class="text-2xl">External reference</h2>
If you need the tooltip to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

<div class="my-4 flex h-72 flex-col items-center justify-center gap-4 rounded border">
  <div id="ext-ref" class="rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>
  <div class="space-x-4 rtl:space-x-reverse">
    <Button id="ref-left">Left</Button>
    <Button id="ref-top">Top</Button>
    <Button id="ref-right">Right</Button>
  </div>
  <Tooltip reference="#ext-ref" triggeredBy="[id^='ref-']" {placement} {onbeforetoggle} class="w-64 text-sm font-light">And here's some amazing content. It's very engaging. Right?</Tooltip>
</div>

<h2 class="text-2xl">Custom type</h2>
Various color palettes can be set for a tooltip by using the `color` property from the underlying `Frame` component. (Setting `color` prop sets the `type` to `custom` implicitly.) When you want to add a fully custom styles, use `type="custom"`, `defaultClass`, and `class` to modify the tooltip styling.

<div class="my-4 flex h-32 items-end justify-center space-x-4 rounded border p-8">
  <Button>Green tooltip</Button>
  <Tooltip color="green">Tooltip content</Tooltip>

  <Button>Yellow tooltip</Button>
  <Tooltip color="yellow">Tooltip content</Tooltip>

  <Button>Custom type</Button>
  <Tooltip placement="right" type={undefined} class="bg-purple-500 p-4 text-lg font-medium text-gray-100" arrow={false}>Tooltip content</Tooltip>
</div>
