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
  import { SectionCompo } from '../utils'
  export let data: PageData;
  console.log('data', data)
</script>

<SectionCompo {data} section="application"/>
