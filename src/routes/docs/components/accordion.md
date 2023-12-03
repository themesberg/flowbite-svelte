---
layout: componentLayout
title: Svelte Accordion - Flowbite
breadcrumb_title: Svelte Accordion
component_title: Accordion
dir: Components
description: Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'; 
  const dirName = toKebabCase(component_title)
</script>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

## Setup

```svelte example hideOutput
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>
```

## Default accordion

Accordion uses the single selection mode by default i.e. it collapses every other child element when expanding a one.

To prevent that behavior set `multiple` property to `true`.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion>
  <AccordionItem>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">My Header 2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Always open

Use the `open` prop to make an item open on mount.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion>
  <AccordionItem open>
    <span slot="header">Header 2-1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Header 2-2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Color option

You can control the look and feel of `AccordionItems` by overwriting the `activeClass` and `inactiveClass` properties. You can define them in `Accordion` so that they will apply to all children or set them individually on each `AccordionItem`.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
  <AccordionItem class="">
    <span slot="header">Header 2-1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Header 2-2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Flush accordion

Use `flush` prop to remove the rounded borders.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion flush>
  <AccordionItem>
    <span slot="header">Header 2-1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Header 2-2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Arrow style

Use the `arrowup` and `arrowdown` slots to set up and down icons.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
</script>

<Accordion>
  <AccordionItem>
    <span slot="header">Header 2-1</span>
    <div slot="arrowup">
      <ChevronDoubleUpOutline class="h-3 w-3 -me-0.5" />
    </div>
    <span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-3 w-3 -me-0.5" />
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Header 2-2</span>
    <div slot="arrowup">
      <ChevronDoubleUpOutline class="h-3 w-3 -me-0.5" />
    </div>
    <span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-3 w-3 -me-0.5" />
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Icon Accordion

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { ShoppingCartSolid, CogOutline } from 'flowbite-svelte-icons';
</script>

<Accordion>
  <AccordionItem>
    <span slot="header" class="text-base flex gap-2">
      <ShoppingCartSolid class="mt-0.5" />
      <span>My Header 1</span>
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header" class="text-base flex gap-2">
      <CogOutline class="mt-0.5" />
      <span>My Header 2</span>
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
  </AccordionItem>
</Accordion>
```

## Multiple mode

Example how to use the `multiple` option together with expand all behavior.

```svelte example class="space-y-4"
<script>
  import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
  const items = Array(3);

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<Button on:click={open_all}>Open all</Button>
<Button on:click={close_all}>Close all</Button>
<Accordion multiple>
  <AccordionItem bind:open={items[0]}>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    <div slot="header">My Header 2</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    <div slot="header">My Header 3</div>
    <p>Something more</p>
  </AccordionItem>
</Accordion>
```

## Custom transitions

The default transition of `AccordionItem`s is <A href="https://svelte.dev/docs#run-time-svelte-transition-slide">slide</A>. Use the `transitionType` and `transitionParams` prop to make custom transitions.

```svelte example
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion>
  <AccordionItem>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionParams={{ duration: 2000 }}>
    <span slot="header">My Header 2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType="fade" transitionParams={{ duration: 1000 }}>
    <span slot="header">My Header 3</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Nesting accordians

Accordions can be nested. All of the mentioned options are supported.

```svelte example hideScript
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<Accordion>
  <AccordionItem open>
    <span slot="header">My Header 1</span>
    <Accordion>
      <AccordionItem>
        <span slot="header">My Header 1</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">My Header 2</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
          <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
          <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">My Header 2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Accordion styling

- Use the `class` prop to overwrite `defaultClass`.
- Use the `classActive` prop to overwrite `activeClass`.
- Use the `classInactive` prop to overwrite `inactiveClass`.

### AccordionItem styling

- Use the `class` prop to overwrite `defaultClass`.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Accordion](https://flowbite.com/docs/components/accordion/)

<GitHubCompoLinks />
