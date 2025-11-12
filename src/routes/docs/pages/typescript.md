---
layout: componentLayout
breadcrumb_title: Typescript
title: TypeScript Types - Flowbite Svelte
dir: Pages
component_title: Typescript
description: Learn more about the value types and class interfaces that you can use and extend with Flowbite coupled with Svelte by leveraging the features of TypeScript
---

<script lang="ts">
  import { LlmLink } from '../../utils';
  import HighlightCompo from "../../utils/HighlightCompo.svelte";
  import typescript from 'highlight.js/lib/languages/typescript';
  const examples = import.meta.glob('../../../lib/types.ts', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  const tsLang = {
    name: 'typescript',
    register: typescript
  };
</script>

## Typescript types

Enhance the reliability and scalability of your user interface code by leveraging data types. The following excerpt shows you the full list of TypeScript types and interfaces that are being used with the Flowbite Svelte library.

<HighlightCompo codeLang={tsLang} code={examples["../../../lib/types.ts"] as string} class="max-w-7xl bg-white"  numberLine/>

## LLM Link

<LlmLink />