---
layout: componentLayout
breadcrumb_title: Types
title: Types
dir: Pages
description: Flowbite-Svelte Types page
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { PageHeadSection, ExampleDiv , MetaTag } from '../utils'
  import { A, P, List, Li, Alert  } from '$lib'
  // Load assets as strings
  import TypeList from '../../lib/types.js?raw'
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} />

<ExampleDiv tag="pre" class="text-gray-900 dark:text-white whitespace-pre-wrap">
{TypeList}
</ExampleDiv>

