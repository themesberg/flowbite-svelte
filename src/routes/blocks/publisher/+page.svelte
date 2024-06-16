---
layout: blockComponentLayout
title: Publisher UI - Flowbite Svelte Blocks
breadcrumb_title: ''
no_of_components:
dir: publisher
description: Get started with a collection of free and premium Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import { SectionComponent } from '../utils';
  
</script>

<SectionComponent {data} section="publisher"/>
