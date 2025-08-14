---
layout: componentLayout
title: Flowbite Svelte Illustrations - Free and open-source SVG illustrations
subtitle: SVG Illustrations
dir: Illustrations
pkg: Flowbite Svelte Illustrations
breadcrumb_title: Illustrations
component_title: Illustrations
description: Get started with 54 free and open-source SVG illustrations based on 3D styles, fully compatible with Flowbite and Tailwind CSS.
---

<script lang="ts">
	import { filterIconsByKeyword } from './utils/helper';
	import IllustPage from './utils/IllustPage.svelte';
	import * as icons from 'flowbite-svelte-illustrations';
	import { excludeIconsByKeyword } from './utils/helper';

	const keywordsToFilter = 'Dark';
	const DarkIcons = filterIconsByKeyword(icons, keywordsToFilter);
	const LightIcons = excludeIconsByKeyword(icons, keywordsToFilter);
</script>

<div class="relative dark:hidden">
	<IllustPage
		minSize="60"
		defaultSize="100"
		maxSize="140"
		step="10"
		title="Flowbite Svelte Illustrations"
		icons={LightIcons}
		threeTabs={false}
	/>
</div>
<div class="relative hidden dark:block">
	<IllustPage
		minSize="100"
		defaultSize="140"
		maxSize="200"
		step="10"
		title="Flowbite Svelte Illustrations"
		icons={DarkIcons}
		threeTabs={false}
	/>
</div>
