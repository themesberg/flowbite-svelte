---
layout: componentLayout
title: Svelte Outline Icons - Flowbite
breadcrumb_title: Outline Icons
component_title: Outline Icons
dir: Icons
description: Get started with a collection of outline styled open-source Svelte 5 powered icons built by the Flowbite community and use the interactive search and configurator features
---

Use this page to easily search and configure a collection of up to 500 SVG open-source outline styled icons from the Flowbite library optimized for Svelte. Make sure that you have followed the Svelte 4 or Svelte 5 Icons guide from the documentation.

## Browse outline icons

Search by the icon name and you'll find the component name that you need to import in your Svelte app.

<script>
  import MetaTag from './utils/MetaTag.svelte';
  import { Range, Label, Tabs, TabItem, TableSearch } from '$lib';

  import {
    filterIconsByKeyword,
    random_tailwind_color,
    random_hex_color_code
  } from './utils/utils';
  import * as Icons from 'flowbite-svelte-icons';
  const keywordsToInclude = 'Outline';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const contentClass = ' rounded-lg mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  $: size = 6;
  // for metatag
  const title = 'Outline Icons - Flowbite Svelte Icons';
  const subtitle = 'Outline Icons';
  const path = 'outline';
  const description = 'Accessible SVG icons - Outline';
  const tabItemDivcls = 'grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white'
</script>

<MetaTag {title} {subtitle} {path} {description} />

<div class="w-full">
    <TableSearch
      placeholder="Search by icon name"
      hoverable={true}
      bind:inputValue={searchTerm}
      divClass="relative overflow-x-auto [&>div]:p-0"
    >
    <div class="w-full max-w-64 mb-4">
      <Label class="text-lg py-4 ">Icon size: {size}</Label>
      <Range id="range1" min="4" max="10" bind:value={size} />
    </div>
    <Tabs style="pill" {contentClass} class="p-4">
      <TabItem open>
        <span slot="title" class="text-lg">Mono</span>
        <div
          class={tabItemDivcls}
        >
          {#each filteredEntries as [name, component]}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component this={component} class="shrink-0 h-{size} w-{size}" />
              {name}
            </div>
          {/each}
        </div>
      </TabItem>
      <TabItem>
        <span slot="title" class="text-lg">Random Hex Colors</span>
        <div
          class={tabItemDivcls}
        >
          {#each filteredEntries as [name, component]}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                color={random_hex_color_code()}
                class="shrink-0 h-{size} w-{size}"
              />
              {name}
            </div>
          {/each}
        </div>
      </TabItem>
      <TabItem>
        <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
        <div
          class={tabItemDivcls}
        >
          {#each filteredEntries as [name, component]}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                class="{random_tailwind_color()} shrink-0 h-{size} w-{size}"
              />
              {name}
            </div>
          {/each}
        </div>
      </TabItem>
    </Tabs>
  </TableSearch>
</div>