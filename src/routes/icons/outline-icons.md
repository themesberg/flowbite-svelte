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

```svelte example hideSource hideResponsiveButtons
<script>
  import { Label, Range, TabItem, Tabs } from "$lib";
  import * as Icons from "flowbite-svelte-icons";
  import { IconOutline } from "flowbite-svelte-icons";
  import { filterIconsByKeyword, random_hex_color_code, random_tailwind_color } from "../icons/utils/utils";
  const keywordsToInclude = "Outline";
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const contentClass = " rounded-lg mt-4";
  let searchTerm = $state("");

  let filteredEntries = $derived(Object.entries(keyIcons).filter(([name, component]) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  let size = $state(6);
  // for metatag
  const title = "Outline Icons - Flowbite Svelte Icons";
  const subtitle = "Outline Icons";
  const path = "outline";
  const description = "Accessible SVG icons - Outline";
  const tabItemDivcls = "grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white";
</script>

<div class="w-full">
  <div class="mb-4 w-full max-w-64">
    <Label class="py-4 text-lg ">Icon size: {size}</Label>
    <Range id="range1" min="4" max="10" bind:value={size} />
  </div>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      {#snippet titleSlot()}
        <span class="text-lg">Mono</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component]}
          <div class="flex items-center gap-4 text-lg">
            <IconOutline Icon={component} class="shrink-0 h-{size} w-{size}" />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span class="text-lg">Random Hex Colors</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component]}
          <div class="flex items-center gap-4 text-lg">
            <IconOutline Icon={component} color={random_hex_color_code()} class="shrink-0 h-{size} w-{size}" />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span class="text-lg">Random Tailwind CSS Colors</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component]}
          <div class="flex items-center gap-4 text-lg">
            <IconOutline Icon={component} class="{random_tailwind_color()} shrink-0 h-{size} w-{size}" />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
  <!-- </TableSearch> -->
</div>
```
