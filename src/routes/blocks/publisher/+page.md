---
layout: componentLayout
title: Publisher UI - Flowbite Svelte Blocks
breadcrumb_title: Publisher
no_of_components:
dir: publisher
pkg: Flowbite Svelte Blocks
description: Get started with a collection of free Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  import SectionCompo from '../utils/Sectioncompo.svelte';
  export let data: PageData;
</script>

<SectionCompo {data} section="publisher"/>
