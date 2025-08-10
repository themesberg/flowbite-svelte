<script lang="ts">
  import { onMount } from 'svelte';
  import JSONView from './JSONView.svelte';

  type TCompoData = {
    default: {
      name: string;
      props: string[][];
      type: {
        name: string;
        link: string;
      };
    };
  };

  // Replace dirName and components with a single fileName prop
  let { fileName = '' }: { fileName: string } = $props();

  let compoData: TCompoData | null = $state(null);

  async function loadComponentData() {
    try {
      // Import a single file directly without the array mapping
      const module = await import(`../component-data/${fileName}.json`);
      compoData = module;
    } catch (error) {
      console.error(`Error loading component data for ${fileName}:`, error);
      throw error;
    }
  }

  onMount(() => {
    if (fileName) {
      loadComponentData().catch((error) => {
        console.error('Error loading component data:', error);
      });
    }
  });
</script>

{#if compoData}
  <div id="compoData">
    <JSONView data={compoData.default} />
  </div>
{/if}
