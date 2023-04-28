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
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, P, A } from '$lib'
  import { props as buttonProps } from '../../props/Button.json'

  const events = ["on:change","on:click","on:keydown","on:keyup","on:mouseenter","on:mouseleave"];
  // slots
  let slotHeader = ['Name', 'Description']
  let slotItems = [['default', 'For a button label.']]
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
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
```

## Button with link

You can add a link to a Button component:

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button href="/">Home</Button>
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button pill={true}>Default</Button>
<Button color="alternative" pill={true}>Alternative</Button>
<Button color="dark" pill={true}>Dark</Button>
<Button color="light" pill={true}>Light</Button>
<Button color="green" pill={true}>Green</Button>
<Button color="red" pill={true}>Red</Button>
<Button color="yellow" pill={true}>Yellow</Button>
<Button color="purple" pill={true}>Purple</Button>
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button gradient color="blue">Blue</Button>
<Button gradient color="green">Green</Button>
<Button gradient color="cyan">Cyan</Button>
<Button gradient color="teal">Teal</Button>
<Button gradient color="lime">Lime</Button>
<Button gradient color="red">Red</Button>
<Button gradient color="pink">Pink</Button>
<Button gradient color="purple">Purple</Button>
```

## Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button gradient color="purpleToBlue">Purple to Blue</Button>
<Button gradient color="cyanToBlue">Cyan to Blue</Button>
<Button gradient color="greenToBlue">Green to Blue</Button>
<Button gradient color="purpleToPink">Purple to Pink</Button>
<Button gradient color="pinkToOrange">Pink to Orange</Button>
<Button gradient color="tealToLime">Teal to Lime</Button>
<Button gradient color="redToYellow">Red to Yellow</Button>
```

## Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button outline gradient color="purpleToBlue">Purple to Blue</Button>
<Button outline gradient color="cyanToBlue">Cyan to Blue</Button>
<Button outline gradient color="greenToBlue">Green to Blue</Button>
<Button outline gradient color="purpleToPink">Purple to Pink</Button>
<Button outline gradient color="pinkToOrange">Pink to Orange</Button>
<Button outline gradient color="tealToLime">Teal to Lime</Button>
<Button outline gradient color="redToYellow">Red to Yellow</Button>
```

## Colored shadows

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button shadow="blue" gradient color="blue">Blue</Button>
<Button shadow="green" gradient color="green">Green</Button>
<Button shadow="cyan" gradient color="cyan">Cyan</Button>
<Button shadow="teal" gradient color="teal">Teal</Button>
<Button shadow="lime" gradient color="lime">Lime</Button>
<Button shadow="red" gradient color="red">Red</Button>
<Button shadow="pink" gradient color="pink">Pink</Button>
<Button shadow="purple" gradient color="purple">Purple</Button>
```

## Outline buttons

Use the following button styles to show the colors only for the border of the element.

```svelte example class="flex flex-wrap gap-2" hideScript
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

## Button sizes

Use these examples if you want to use smaller or larger buttons.

```svelte example class="gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Base</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>
```

## Buttons with icon

Use the following examples to add a SVG icon inside the button either on the left or right side.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button>
  <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> Buy Now
</Button>
<Button>
  Choose Plan <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</Button>
```

## Button with label

This example can be used to show a notification count or helper text inside a button using the badge element.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button>
  Messages
  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
    2
  </span>
</Button>
```

## Icon buttons

Sometimes you need a button to indicate an action using only an icon.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<div class="flex flex-wrap items-center gap-2">
  <Button class="!p-2"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  <Button pill={true} class="!p-2"><svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  <Button outline={true} class="!p-2" size="lg"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  <Button pill={true} outline={true} class="!p-2" size="xl"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
</div>
```

## Loader

Use the spinner components from Flowbite-Svelte to indicate a loader animation inside buttons.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Button, Spinner } from 'flowbite-svelte';
</script>
<Button>
  <Spinner class="mr-3" size="4" color="white" />Loading ...
</Button>
<Button color="alternative">
  <Spinner class="mr-3" size="4" />Loading ...
</Button>
```

## Disabled

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

```svelte example class="flex flex-wrap gap-2" hideScript
<script>
  import { Button } from 'flowbite-svelte';
</script>
<Button disabled >Disabled</Button>
```

## Events

You can use on:click or any standard on:* to listen to the event.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Button } from 'flowbite-svelte';
  const btn1 = () => {
    alert('You clicked btn1.');
  };
  const btn2 = () => {
    alert('You clicked btn2.');
  };
</script>
<Button on:click={btn1}>Button 1</Button>
<Button on:click={btn2}>Button 2</Button>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.

<TableProp>
<TableDefaultRow items={buttonProps} rowState='hover' />
</TableProp>

### Custom CSS

Use `btnClass` to overwrite Button class.

## Slots

<TableProp header={slotHeader}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

## Forwarded Events

<DocBadgeList items={events} />


## References

<P>
  <A href="https://flowbite.com/docs/components/buttons/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Buttons</A
  >
</P>
