---
layout: componentLayout
breadcrumb_title: Types
title: Types
dir: Pages
description: Flowbite-Svelte Types page
---

<script>
  // TODO: Does not build on the server - need to work on it
  // import Prism from 'prismjs';
  // import 'prism-svelte';
  // import "prismjs/components/prism-typescript";
  // const highlighted = Prism.highlight(TypeList, Prism.languages.js, 'js');

  // Load assets as strings
  import TypeList from '../../../lib/types.js?raw';
  
</script>

<pre><code>{@html TypeList}</code></pre>

