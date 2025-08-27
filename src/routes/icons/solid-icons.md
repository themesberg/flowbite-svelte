---
layout: componentLayout
title: Svelte Solid Icons - Flowbite
breadcrumb_title: Solid Icons
component_title: Solid Icons
dir: Icons
pkg: Flowbite Svelte Icons
description: Get started with a collection of solid styled open-source Svelte 5 powered icons built by the Flowbite community and use the interactive search and configurator features
---

Use this page to easily search and configure a collection of up to 500 SVG open-source solid styled icons from the Flowbite library optimized for Svelte. Make sure that you have followed the Svelte 4 or Svelte 5 Icons guide from the documentation.

## Browse solid icons

Search by the icon name and you'll find the component name that you need to import in your Svelte app.

```svelte example hideSource hideResponsiveButtons
<script>
  import { Label, Range, TabItem, Tabs, Clipboard, Tooltip } from "$lib";
  import * as Icons from "flowbite-svelte-icons";
  import { CheckOutline, ClipboardCleanSolid } from "flowbite-svelte-icons";
  import IconSolid from "./utils/IconSolid.svelte";
  import { filterIconsByKeyword, random_hex_color_code, random_tailwind_color } from "../icons/utils/utils";
  const keywordsToInclude = "Solid";
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const content = "rounded-lg";
  let searchTerm = $state("");

  let filteredEntries = $derived(Object.entries(keyIcons).filter(([name, component]) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  let size = $state(6);
  // for metatag
  const title = "Solid Icons - Flowbite Svelte Icons";
  const subtitle = "Solid Icons";
  const path = "Solid";
  const description = "Accessible SVG icons - Solid";
  const tabItemDivcls = "grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white";
</script>

<div class="w-full">
  <div class="mb-4 w-full max-w-64">
    <Label class="py-4">Icon size: {size}</Label>
    <input type="search" id="site-search" name="q" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search icons" bind:value={searchTerm} />
    <Range id="range1" min="4" max="10" bind:value={size} />
  </div>
  <Tabs style="pill" classes={{ content }}>
    <TabItem open>
      {#snippet titleSlot()}
        <span>Mono</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component], i}
          {@const iconValue = `<${filteredEntries[i][0]} class="shrink-0 h-${size} w-${size}" />`}
          <div class="flex items-center gap-4">
            <IconSolid Icon={component} class="shrink-0 h-{size} w-{size}" />
            {name}
            <Clipboard value={iconValue} embedded>
              {#snippet children(success)}
                <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
                {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
              {/snippet}
            </Clipboard>
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Random Hex Colors</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component], i}
          {@const color = random_hex_color_code()}
          {@const iconValue = `<${filteredEntries[i][0]} class="shrink-0 h-${size} w-${size}" color="${color}"/>`}
          <div class="flex items-center gap-4">
            <IconSolid Icon={component} color={random_hex_color_code()} class="shrink-0 h-{size} w-{size}" />
            {name}
            <Clipboard value={iconValue} embedded>
              {#snippet children(success)}
                <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
                {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
              {/snippet}
            </Clipboard>
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      {#snippet titleSlot()}
        <span>Random Tailwind CSS Colors</span>
      {/snippet}
      <div class={tabItemDivcls}>
        {#each filteredEntries as [name, component], i}
          {@const color = random_tailwind_color()}
          {@const iconValue = `<${filteredEntries[i][0]} class="h-${size} w-${size} ${color}"/>`}
          <div class="flex items-center gap-4">
            <IconSolid Icon={component} class="{random_tailwind_color()} shrink-0 h-{size} w-{size}" />
            {name}
            <Clipboard value={iconValue} embedded>
              {#snippet children(success)}
                <Tooltip isOpen={success}>{success ? "Copied" : "Copy to clipboard"}</Tooltip>
                {#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
              {/snippet}
            </Clipboard>
          </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
  <!-- </TableSearch> -->
</div>
```
