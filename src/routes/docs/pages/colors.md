---
layout: componentLayout
title: Colors - Flowbite Svelte
breadcrumb_title: Colors - Flowbite Svelte
component_title: Colors
dir: Pages
description: Customize your project and the color of the components from Flowbite Svelte by editing the layout.css file
---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, LlmLink } from '../../utils';
  import { A, Img, P } from '$lib';
</script>

## Override the brand colors

The following lines can be used to override the brand colors:

```css
@theme {
  --color-primary-50: #fff5f2;
  --color-primary-100: #fff1ee;
  --color-primary-200: #ffe4de;
  --color-primary-300: #ffd5cc;
  --color-primary-400: #ffbcad;
  --color-primary-500: #fe795d;
  --color-primary-600: #ef562f;
  --color-primary-700: #eb4f27;
  --color-primary-800: #cc4522;
  --color-primary-900: #a5371b;

  --color-secondary-50: #f0f9ff;
  --color-secondary-100: #e0f2fe;
  --color-secondary-200: #bae6fd;
  --color-secondary-300: #7dd3fc;
  --color-secondary-400: #38bdf8;
  --color-secondary-500: #0ea5e9;
  --color-secondary-600: #0284c7;
  --color-secondary-700: #0369a1;
  --color-secondary-800: #075985;
  --color-secondary-900: #0c4a6e;

  --color-brand-softer: var(--color-primary-50);
  --color-brand-soft: var(--color-primary-100);
  --color-brand: var(--color-primary-700);
  --color-brand-medium: var(--color-primary-200);
  --color-brand-strong: var(--color-primary-800);

  --color-fg-brand-subtle: var(--color-primary-200);
  --color-fg-brand: var(--color-primary-700);
  --color-fg-brand-strong: var(--color-primary-900); 
  
  --color-brand-subtle: var(--color-primary-200);
  --color-brand-light: var(--color-primary-600);
}

@layer base {
  .dark {
    --color-brand-softer: var(--color-primary-900);
    --color-brand-soft: var(--color-primary-800);
    --color-brand: var(--color-primary-600);
    --color-brand-medium: var(--color-primary-800);
    --color-brand-strong: var(--color-primary-700);

    --color-fg-brand-subtle: var(--color-primary-200);
    --color-fg-brand: var(--color-primary-500);
    --color-fg-brand-strong: var(--color-primary-400);

    --color-brand-subtle: var(--color-primary-800);
    --color-brand-light: var(--color-primary-600);
  }
}
```

## LLM Link

<LlmLink />