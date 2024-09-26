---
layout: componentLayout
title: Solid Icons - Flowbite Svelte Icons
breadcrumb_title: Solid Icons
component_title: SolidIcons
dir: Icons
description: Solid icons
---

<script>
  import MetaTag from './utils/MetaTag.svelte';
  import { Range, Label, Tabs, TabItem, TableSearch } from '$lib';

  import {
    filterIconsByKeyword,
    random_tailwind_color,
    random_hex_color_code
  } from './utils/utils';
  import * as Icons from 'flowbite-svelte-icons';
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const contentClass = ' rounded-lg mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  $: size = 6;
  // for metatag
  const title = 'Solid Icons - Flowbite Svelte Icons';
  const subtitle = 'Solid Icons';
  const path = 'solid-icons';
  const description = 'Accessible SVG icons - Solid Icons';
  const tabItemDivcls = 'grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white'
</script>

<MetaTag {title} {subtitle} {path} {description} />

<div class="m-8 w-full">
  <h1>Solid Icons - Flowbite Svelte Icons</h1>
  <TableSearch
    placeholder="Search by icon name"
    hoverable={true}
    bind:inputValue={searchTerm}
    divClass="relative overflow-x-auto"
  >
    <div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
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