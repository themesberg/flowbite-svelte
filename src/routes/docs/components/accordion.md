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
  import { P, A } from 'flowbite-svelte'; 
  const dirName = toKebabCase(component_title)
</script>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

## Setup

```svelte example hideOutput
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>
```

## Default accordion

Accordion uses the single selection mode by default i.e. it collapses every other child element when expanding a one.

To prevent that behavior set `multiple` property to `true`.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Always open

Use the `open` prop to make an item open on mount.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem open>
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Color option

You can control the look and feel of `AccordionItems` by overwriting the `activeClass` and `inactiveClass` properties. You can define them in `Accordion` so that they will apply to all children or set them individually on each `AccordionItem`.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
  <AccordionItem class="">
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Flush accordion

Use `flush` prop to remove the rounded borders.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion flush>
  <AccordionItem>
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Arrow style

Use the `arrowup` and `arrowdown` snippets to set up and down icons.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}Header 2-1{/snippet}
    {#snippet arrowup()}
      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    {#snippet arrowdown()}
      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    {#snippet arrowup()}
      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    {#snippet arrowdown()}
      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Icon Accordion

Use `header` snippet to add your icon and title.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { CartSolid, CogOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CartSolid />
        <span>My Header 1</span>
      </div>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CogOutline />
        <span>My Header 2</span>
      </div>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
  </AccordionItem>
</Accordion>
```

## Multiple mode

Use `multiple` to open all accordion items.

```svelte example
<script lang="ts">
  import { Accordion, AccordionItem } from "flowbite-svelte";
</script>

<Accordion multiple>
  <AccordionItem>
    {#snippet header()}
      Header 1-1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      Header 1-2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

Another example how to use the `multiple` option together with expand all behavior.

```svelte example class="space-y-4"
<script>
  import { AccordionItem, Accordion, Button } from "flowbite-svelte";
  const items = [false, false, false];

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<Button onclick={open_all}>Open all</Button>
<Button onclick={close_all}>Close all</Button>
<Accordion multiple>
  <AccordionItem bind:open={items[0]}>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    {#snippet header()}My Header 3{/snippet}
    <p>Something more</p>
  </AccordionItem>
</Accordion>
```

## Custom transitions

The default transition of `AccordionItem`s is <A href="https://svelte.dev/docs#run-time-svelte-transition-slide">slide</A>. Use the `transitionType` and `transitionParams` prop to make custom transitions.

```svelte example
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<Accordion>
  <AccordionItem transitionParams={{ duration: 2000 }}>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType={fly} transitionParams={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType={fade} transitionParams={{ duration: 1000 }}>
    {#snippet header()}My Header 3{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Nesting accordions

Accordions can be nested. All of the mentioned options are supported.

```svelte example hideScript
<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem open>
    {#snippet header()}My Header 1{/snippet}
    <Accordion>
      <AccordionItem>
        {#snippet header()}My Header 1{/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </AccordionItem>
      <AccordionItem>
        {#snippet header()}My Header 2{/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
          <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
        </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Using Svelte’s snapshot to preserve the input

Use the following example to preserve the input value. First fill out the form, navigate to a different page, and then use your browser’s back button. You’ll notice that your input is preserved automatically.

```svelte example hideOutput
<script lang="ts">
  import { AccordionItem, Accordion, Input, Textarea, Button, Label, A } from "flowbite-svelte";
  import type { Snapshot } from "./$types";
  let name = $state("");
  let email = $state("");
  let comment = $state("");
  export const snapshot: Snapshot<{ name: string; email: string; comment: string }> = {
    capture: () => ({ name, email, comment }),
    restore: (value) => {
      name = value.name;
      email = value.email;
      comment = value.comment;
    }
  };
  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nComment: ${comment}`);
  };
</script>

<A href="/">Go home</A>
<Accordion>
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    <form method="POST">
      <Label for="name">Name</Label>
      <Input id="name" bind:value={name} type="text" />
      <label for="email">Email</label>
      <Input id="email" bind:value={email} type="email" />
      <label for="comment">Comment</label>
      <Textarea id="comment" bind:value={comment} />
      <Button onclick={handleSubmit} class="mt-4">Submit</Button>
    </form>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Accordion](https://flowbite.com/docs/components/accordion/)

<GitHubCompoLinks />
