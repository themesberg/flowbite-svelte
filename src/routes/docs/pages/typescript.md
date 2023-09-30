---
layout: componentLayout
breadcrumb_title: Typescript
title: TypeScript Types - Flowbite Svelte
dir: Pages
component_title: Typescript
description: Learn more about the value types and class interfaces that you can use and extend with Flowbite coupled with Svelte by leveraging the features of TypeScript
---

## Typescript types

Enhance the reliability and scalability of your user interface code by leveraging data types. Here's an example of how to use them:

```
  import { Button } from 'flowbite-svelte';
  import type { SizeType } from 'flowbite-svelte'
  export let size: SizeType = 'lg'
```

The following excerpt shows you the full list of TypeScript types and interfaces that are being used with the Flowbite Svelte library.

<script>
  // TODO: Does not build on the server - need to work on it
  // import Prism from 'prismjs';
  // import 'prism-svelte';
  // import "prismjs/components/prism-typescript";
  // const highlighted = Prism.highlight(TypeList, Prism.languages.js, 'js');
  
  // Load assets as strings
  import TypeList from '../../../lib/types.ts?raw';
</script>

<pre><code>{@html TypeList}</code></pre>
