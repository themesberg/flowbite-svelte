---
layout: componentLayout
title: Marketing UI - Flowbite Svelte Blocks
breadcrumb_title: Marketing
no_of_components: 0
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with a large collection of free UI components built with Tailwind CSS and the Flowbite library featuring hero sections, headers, contact forms, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  import SectionCompo from '../utils/Sectioncompo.svelte';
  export let data: PageData;
</script>

<SectionCompo {data} section="marketing"/>
