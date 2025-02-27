---
layout: componentLayout
title: Svelte Marquee Banner - Flowbite
breadcrumb_title: Svelte Marquee
component_title: Marquee Banner
dir: Extend
description: Use Marquee Banner to display a series of items
---

<script>
  import {  TableProp, TableDefaultRow, CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  import { P, A } from '$lib'
  const components = 'Marquee'
</script>

## Setup

```svelte example hideOutput
<script>
  import { Marquee } from 'flowbite-svelte'
</script>
```

## Simple Maquee

```svelte example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee speed={1} class="py-16">
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

## Hover speed

```svelte example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee speed={1} hoverSpeed={0.5} class="py-16">
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

## Shadow

```svelte example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee shadow class="py-16">
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-16 h-16" alt="flowbite-svelte icon logo" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

## Component data

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
