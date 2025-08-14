---
layout: componentLayout
title: Application UI - Flowbite Svelte Blocks
breadcrumb_title: Application
no_of_components: 0
dir: application
pkg: Flowbite Svelte Blocks
description: Get started with a collection of free Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  import SectionCompo from '../utils/Sectioncompo.svelte';
  export let data: PageData;
</script>

<SectionCompo {data} section="application"/>
