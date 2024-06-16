---
layout: blockComponentLayout
title: Marketing UI - Flowbite Svelte Blocks
breadcrumb_title: ''
no_of_components: 0
dir: marketing
description: Get started with a large collection of free and premium UI components built with Tailwind CSS and the Flowbite library featuring hero sections, headers, contact forms, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  import { SectionComponent } from '../utils';
  
</script>

<SectionComponent {data} section="marketing"/>
