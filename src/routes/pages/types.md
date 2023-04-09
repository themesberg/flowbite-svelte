---
layout: componentLayout
breadcrumb_title: Types
title: Types
dir: Pages
description: Flowbite-Svelte Types page
---

<script>
  import { ExampleDiv } from '../utils'
  import { A, P, List, Li, Alert  } from '$lib'
  // Load assets as strings
  import TypeList from '../../lib/types.js?raw'
</script>

<ExampleDiv tag="pre" class="text-gray-900 dark:text-white whitespace-pre-wrap">
{TypeList}
</ExampleDiv>

