<script lang="ts">
  import { Tabs, TabItem } from '$lib';
  import TableProp from './TableProp.svelte';
  import TableDefaultRow from './TableDefaultRow.svelte';
  import { GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  import { getFilteredFileNames } from './helpers';

  type TCompoData = {
    data: {
      default: {
        name: string;
        props: string[][];
        events: string[][];
        slots: string[][];
      };
    };
  };

  export let dirName: string = '';
  export let components: string;

  let compoData: TCompoData[] = [];
  // default is find fileName using dirName
  const fileNames = getFilteredFileNames(dirName);

  // if components are given (e.g. checkbox, etc in forms, typography, utils)
  // use the components string
  let componentArray = components ? components.split(', ') : [];

  if (components) {
    // Split the components into an array
    const componentArray = components.split(', ');
  }
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let importPromises: Promise<any>[] = [];

  async function processComponents() {
    if (componentArray.length > 0) {
      importPromises = componentArray.map(async (component) => {
        const module = await import(`../component-data/${component}.json`);
        return { data: module };
      });
    } else {
      importPromises = fileNames.map(async (component) => {
        const module = await import(`../component-data/${component}.json`);
        return { data: module };
      });
    }

    try {
      compoData = await Promise.all(importPromises);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  onMount(() => {
    processComponents().catch((error) => {
      console.error('Error outside of processComponents:', error);
    });
  });
</script>

{#if compoData}
  <div id="compoData">
    {#each compoData as compo}
      <h4 class="text-xl font-bold text-black dark:text-white">{compo.data.default.name}</h4>
      <Tabs style="underline" class="list-none flex" divider={false} contentClass="bg-gray-50 dark:bg-gray-800 mb-4">
        {#if compo.data.default.props.length > 0}
          <TabItem open>
            <div slot="title" class="flex items-center gap-2">
              <ClipboardSolid size="sm" />
              Props
            </div>
            <ul class="w-full">
              <TableProp>
                <TableDefaultRow items={compo.data.default.props} rowState="hover" />
              </TableProp>
            </ul>
          </TabItem>
        {/if}

        {#if compo.data.default.events.length > 0}
          <TabItem>
            <div slot="title" class="flex items-center gap-2">
              <AdjustmentsVerticalSolid size="sm" />
              Events
            </div>
            <ul class="w-full list-none">
              <TableProp category="slots">
                <TableDefaultRow items={compo.data.default.events} rowState="hover" />
              </TableProp>
            </ul>
          </TabItem>
        {/if}

        {#if compo.data.default.slots.length > 0}
          <TabItem>
            <div slot="title" class="flex items-center gap-2">
              <GridSolid size="sm" />
              Slots
            </div>
            <ul class="w-full list-none">
              <TableProp category="slots">
                <TableDefaultRow items={compo.data.default.slots} rowState="hover" />
              </TableProp>
            </ul>
          </TabItem>
        {/if}
      </Tabs>
    {/each}
  </div>
{/if}
