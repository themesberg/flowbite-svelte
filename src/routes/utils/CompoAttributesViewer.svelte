<script lang="ts">
  import { onMount } from "svelte";
  import { getFilteredFileNames } from "./helpers";
  import JSONView from "./JSONView.svelte";

  type TCompoData = {
    data: {
      default: {
        name: string;
        props: string[][];
        type: {
          name: string;
          link: string;
        };
      };
    };
  };

  let { dirName = "", components, plugin }: { dirName: string; components: string; plugin: string } = $props();

  let compoData: TCompoData[] = $state([]);
  // default is find fileName using dirName
  const fileNames = getFilteredFileNames(dirName);

  // if components are given (e.g. checkbox, etc in forms, typography, utils)
  // use the components string
  let componentArray = components ? components.split(", ") : [];

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let importPromises: Promise<any>[] = [];

  let chartData = $state(null);
  let dataTableData = $state(null);
  let loading = $state(true);
  let error: string | null = $state(null);

  onMount(async () => {
    try {
      loading = true;

      const [chartResponse, tableResponse] = await Promise.all([fetch("https://raw.githubusercontent.com/shinokada/flowbite-svelte-plugins/main/apps/flowbite-svelte-chart/src/routes/component-data/Chart.json"), fetch("https://raw.githubusercontent.com/shinokada/flowbite-svelte-plugins/main/apps/flowbite-svelte-datatable/src/routes/component-data/Table.json")]);

      if (!chartResponse.ok || !tableResponse.ok) {
        throw new Error("Failed to fetch one or more data sources");
      }

      [chartData, dataTableData] = await Promise.all([chartResponse.json(), tableResponse.json()]);

      error = null;
    } catch (err) {
      error = err instanceof Error ? err.message : "An unknown error occurred";
    } finally {
      loading = false;
    }
  });

  async function processComponents() {
    if (componentArray.length > 0) {
      importPromises = componentArray.map(async (component) => {
        const module = await import(`../component-data/${component}.json`);
        return { data: module };
      });
    } else if (plugin === "chart" && chartData) {
      importPromises = [Promise.resolve({ data: chartData })];
    } else if (plugin === "dataTable" && dataTableData) {
      importPromises = [Promise.resolve({ data: dataTableData })];
    } else {
      importPromises = fileNames.map(async (component) => {
        const module = await import(`../component-data/${component}.json`);
        return { data: module };
      });
    }

    try {
      compoData = await Promise.all(importPromises);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  onMount(() => {
    processComponents().catch((error) => {
      console.error("Error outside of processComponents:", error);
    });
  });
</script>

{#if loading}
  <div>Loading...</div>
{:else if error}
  <div class="text-red-600 dark:text-red-400">
    Error: {error}
  </div>
{:else if compoData}
  <div id="compoData">
    {#each compoData as compo}
      <JSONView data={compo.data.default} />
    {/each}
  </div>
{/if}
