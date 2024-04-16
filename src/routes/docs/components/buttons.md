---
layout: componentLayout
title: Svelte Buttons - Flowbite
breadcrumb_title: Svelte Buttons
component_title: Buttons
dir: Components
description: Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
thumnailSize: w-24
---

<script>
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite-Svelte provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Setup

Import a button component in the script tag.

```svelte example hideOutput
<script>
  import { Button } from 'flowbite-svelte';
</script>
```

## Default button

Use these default button styles with multiple colors to indicate an action or link within your website. The default `type` is set to `button`. You can change it by using the `type` prop.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="blue">Blue</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
```

## Button with link

You can add a link to a Button component:

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button href="/">Home</Button>
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button pill>Default</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="dark" pill>Dark</Button>
<Button color="light" pill>Light</Button>
<Button color="blue" pill>Blue</Button>
<Button color="green" pill>Green</Button>
<Button color="red" pill>Red</Button>
<Button color="yellow" pill>Yellow</Button>
<Button color="purple" pill>Purple</Button>
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { GradientButton } from 'flowbite-svelte';
</script>

<GradientButton color="blue">Blue</GradientButton>
<GradientButton color="green">Green</GradientButton>
<GradientButton color="cyan">Cyan</GradientButton>
<GradientButton color="teal">Teal</GradientButton>
<GradientButton color="lime">Lime</GradientButton>
<GradientButton color="red">Red</GradientButton>
<GradientButton color="pink">Pink</GradientButton>
<GradientButton color="purple">Purple</GradientButton>
```

## Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { GradientButton } from 'flowbite-svelte';
</script>

<GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
<GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
<GradientButton color="greenToBlue">Green to Blue</GradientButton>
<GradientButton color="purpleToPink">Purple to Pink</GradientButton>
<GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
<GradientButton color="tealToLime">Teal to Lime</GradientButton>
<GradientButton color="redToYellow">Red to Yellow</GradientButton>
```

## Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { GradientButton } from 'flowbite-svelte';
</script>

<GradientButton outline color="purpleToBlue">Purple to Blue</GradientButton>
<GradientButton outline color="cyanToBlue">Cyan to Blue</GradientButton>
<GradientButton outline color="greenToBlue">Green to Blue</GradientButton>
<GradientButton outline color="purpleToPink">Purple to Pink</GradientButton>
<GradientButton outline color="pinkToOrange">Pink to Orange</GradientButton>
<GradientButton outline color="tealToLime">Teal to Lime</GradientButton>
<GradientButton outline pill color="redToYellow">Red to Yellow</GradientButton>
<GradientButton outline color="redToYellow" class="w-72">Red to Yellow</GradientButton>
```

## Colored shadows

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button, GradientButton } from 'flowbite-svelte';
</script>

<GradientButton shadow color="blue">Blue</GradientButton>
<GradientButton shadow color="green">Green</GradientButton>
<GradientButton shadow color="cyan">Cyan</GradientButton>
<GradientButton shadow color="teal">Teal</GradientButton>
<GradientButton shadow color="lime">Lime</GradientButton>
<GradientButton shadow color="red">Red</GradientButton>
<GradientButton shadow color="pink">Pink</GradientButton>
<GradientButton shadow color="purple">Purple</GradientButton>
```

## Outline buttons

Use the following button styles to show the colors only for the border of the element.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-wrap gap-2">
  <Button outline>Default</Button>
  <Button outline color="dark">Dark</Button>
  <Button outline color="green">Green</Button>
  <Button outline color="red">Red</Button>
  <Button outline color="yellow">Yellow</Button>
  <Button outline color="purple">Purple</Button>
</div>
```

## Button sizes with icons

Use these examples if you want to use smaller or larger buttons.

```svelte example class="gap-2" hideScript hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<Button size="xs"><EnvelopeSolid class="w-4 h-4 me-2" />Extra small</Button>
<Button size="sm"><EnvelopeSolid class="w-4 h-4 me-2" />Small</Button>
<Button size="md"><EnvelopeSolid class="w-5 h-5 me-2" />Base</Button>
<Button size="lg"><EnvelopeSolid class="w-5 h-5 me-2" />Large</Button>
<Button size="xl"><EnvelopeSolid class="w-6 h-6 me-2" />Extra large</Button>
```

## Button with icon

Use the following examples to add a SVG icon inside the button either on the left or right side.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline, CartSolid } from 'flowbite-svelte-icons';
</script>

<Button>
  <CartSolid class="w-5 h-5 me-2" /> Buy Now
</Button>
<Button>
  Choose Plan <ArrowRightOutline class="w-5 h-5 ms-2" />
</Button>
```

## Button with label

This example can be used to show a notification count or helper text inside a button using the badge element.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button, Indicator } from 'flowbite-svelte';
</script>

<Button class="gap-2">
  Messages
  <Indicator color="none" class="bg-primary-200 text-xs text-primary-800 font-semibold" size="lg">2</Indicator>
</Button>
```

## Icon buttons

Sometimes you need a button to indicate an action using only an icon.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
  import { ThumbsUpSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-wrap items-center gap-2">
  <Button class="!p-2"><ArrowRightOutline class="w-6 h-6" /></Button>
  <Button pill={true} class="!p-2"><ArrowRightOutline class="w-6 h-6" /></Button>
  <Button outline={true} class="!p-2" size="lg">
    <ThumbsUpSolid class="w-7 h-7 text-primary-700" />
  </Button>
  <Button pill={true} outline={true} class="!p-2" size="xl">
    <ThumbsUpSolid class="w-6 h-6 text-primary-700" />
  </Button>
</div>
```

## Loader

Use the spinner components from Flowbite-Svelte to indicate a loader animation inside buttons.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button, Spinner } from 'flowbite-svelte';
</script>

<Button>
  <Spinner class="me-3" size="4" color="white" />Loading ...
</Button>
<Button color="alternative">
  <Spinner class="me-3" size="4" />Loading ...
</Button>
```

## Disabled

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
</script>

<Button disabled>Disabled</Button>
```

## Events

You can use on:click or any standard on:\* to listen to the event.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
<script>
  import { Button } from 'flowbite-svelte';
  const btn1 = () => {
    alert('You clicked btn1.');
  };
  const btn2 = () => {
    alert('You touched btn2.');
  };
</script>

<Button on:click={btn1}>Button 1</Button>
<Button on:touchstart={btn2}>Button 2</Button>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Button styling

- Use the `class` prop to overwrite `button` tag class.

### GradientButton styling

- Use the `class` prop to overwrite `button` tag class.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Buttons](https://flowbite.com/docs/components/buttons/)

<GitHubCompoLinks />
