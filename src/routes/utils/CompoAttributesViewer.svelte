<script lang="ts">
  import { onMount } from "svelte";
  import { getFilteredFileNames } from "./helpers";
  import TableDefaultRow from "./TableDefaultRow.svelte";
  import TableProp from "./TableProp.svelte";
  import { A } from "$lib";
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

  let { dirName = "", components }: { dirName: string; components: string } = $props();

  let compoData: TCompoData[] = $state([]);
  // default is find fileName using dirName
  const fileNames = getFilteredFileNames(dirName);

  // if components are given (e.g. checkbox, etc in forms, typography, utils)
  // use the components string
  let componentArray = components ? components.split(", ") : [];

  if (components) {
    // Split the components into an array
    const componentArray = components.split(", ");
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

{#if compoData}
  <div id="compoData">
    {#each compoData as compo}
      <JSONView data={compo.data.default} />
    {/each}
  </div>
{/if}
