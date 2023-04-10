---
layout: componentLayout
breadcrumb_title: Types
title: Types
dir: Pages
description: Flowbite-Svelte Types page
---

<script>
  import Prism from 'prismjs/prism';
  import 'prism-svelte';
  //import "prismjs/themes/prism-tomorrow.css";
  import "prismjs/components/prism-typescript";
  // Load assets as strings
  import TypeList from '../../lib/types.js?raw';
  
  const highlighted = Prism.highlight(TypeList, Prism.languages.typescript, 'typescript');
</script>

<pre><code>{@html highlighted}</code></pre>

