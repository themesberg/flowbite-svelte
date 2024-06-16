---
layout: blockComponentLayout
title: Application UI - Flowbite Svelte Blocks
breadcrumb_title: ''
no_of_components: 0
dir: application
description: Get started with a collection of free and premium Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import { SectionComponent } from '../utils'
  
  // console.log('data', data)
</script>

<SectionComponent {data} section="application"/>
