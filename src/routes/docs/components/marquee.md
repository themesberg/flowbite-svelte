---
layout: componentLayout
title: Svelte Marquee Banner - Flowbite
breadcrumb_title: Svelte Marquee
component_title: Marquee Banner
dir: Components
description: Use Marquee Banner to display a series of items
thumnailSize: w-36
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  import { props as items1 } from '../../props/Marquee.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover"];
</script>

## Setup

```svelte example hideOutput
<script>
  import { Marquee } from 'flowbite-svelte'
</script>
```

## Simple Maquee

```svelte  example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee speed={1}>
    <img class="w-32 h-32" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-32 h-32" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-32 h-32" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-32 h-32" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

## Hover speed

```svelte  example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee speed={1} hoverSpeed={0.5}>
    <img class="w-32 h-32" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-32 h-32" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-32 h-32" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-32 h-32" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

## Shadow

```svelte  example hideScript
<script>
  import { Marquee } from 'flowbite-svelte'
</script>

<Marquee shadow>
    <img class="w-32 h-32" src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" />
    <img class="w-32 h-32" src="https://www.flowbite-react.com/favicon.svg" />
    <img class="w-32 h-32" src="https://flowbite-vue.com/assets/logo.svg" />
    <img class="w-32 h-32" src="https://flowbite.com/docs/images/logo.svg" />
</Marquee>
```

### MarqueeItem

<TableProp>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
