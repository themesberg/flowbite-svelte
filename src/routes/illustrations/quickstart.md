---
layout: componentLayout
title: Quickstart - Flowbite Svelte Illustrations
breadcrumb_title: Illustrations Quickstart
pkg: Flowbite Svelte Illustrations
component_title: Quickstart
dir: Illustrations
description: Get started with a collection of open-source Flowbite Svelte Illustrations
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { A } from '$lib'

</script>

Get started with 54 free and open-source SVG illustrations based on 3D styles, fully compatible with Flowbite and Tailwind CSS.

## Installation

```bash
pnpm i -D flowbite-svelte-illustrations
```

## Requirements

```md
- Svelte 5
- TailwindCSS 4
```

## How to use

```svelte example
<script lang="ts">
  import { A404NotFoundSmiley, A404NotFoundSmileyDark } from "flowbite-svelte-illustrations";
</script>

<div class="dark:hidden">
  <A404NotFoundSmiley />
</div>
<div class="hidden dark:block">
  <A404NotFoundSmileyDark />
</div>
```

## Types

```js
export type TitleType = {
id?: string;
title?: string;
};

export type DescType = {
id?: string;
desc?: string;
};

import type { SVGAttributes } from 'svelte/elements';
interface Props extends SVGAttributes<SVGElement> {
color1?: string;
color2?: string;
color3?: string;
color4?: string;
// more colors depends on illustration
ariaLabel?: string;
class?: string;
height?: string;
title?: TitleType;
desc?: DescType;
};
```

## Props

```md
- color1 = '#2563eb',
- color2 = '#9ab7f6',
- color3 = '#c8d8fa',
- color4 = '#d6e2fb',
  // more colors depends on illustration
- ariaLabel = <file name>,
- class: className = 'shrink-0 w-auto max-w-[16rem] h-40 text-gray-800 dark:text-white',
- height = '100',
- title,
- desc,
- ...restProps
```

## Accessibility

Use the following example for an accessibility-friendly illustration.

```svelte example
<script lang="ts">
  import { CreditCardPaymentReceipt } from "flowbite-svelte-illustrations";
</script>

<CreditCardPaymentReceipt title={{ id: "my-title", title: "Your title here" }} desc={{ id: "my-desc", desc: "Description here" }} />
```
