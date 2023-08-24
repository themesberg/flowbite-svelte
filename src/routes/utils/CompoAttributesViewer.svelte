<script lang="ts">
  import TableProp from './TableProp.svelte';
  import TableDefaultRow from './TableDefaultRow.svelte';

  import { onMount } from 'svelte';

  
  export let components;
  let compoData = [];

  // Split the components into an array
  const componentArray = components.split(', ');

  async function processComponents() {
    const importPromises = componentArray.map(async (component) => {
      const module = await import(`../component-data/${component}.json`);
      return { data: module };
    });

    try {
      compoData = await Promise.all(importPromises);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  onMount(() => {
    processComponents()
      .catch(error => {
        console.error('Error outside of processComponents:', error);
      });
  });
 
</script>

{#if compoData}
<h3>Props, events, and slots</h3>
{#each compoData as compo}

<h4>{compo.data.default.name}</h4>

{#if compo.data.default.props.length > 0}
<h5 class="mt-8 mb-4 text-md font-bold text-gray-900 dark:text-white">Props</h5>
  <ul class="w-full">
    <TableProp>
    <TableDefaultRow items={compo.data.default.props} rowState='hover' />
    </TableProp>
  </ul>
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 gap-2">

{#if compo.data.default.events.length > 0}
<div>
<h5 class="mt-8 mb-4 text-md font-bold text-gray-900 dark:text-white">Events</h5>
  <ul>
    <TableProp category="slots">
    <TableDefaultRow items={compo.data.default.events} rowState='hover' />
    </TableProp>
  </ul>
</div>
{/if}

{#if compo.data.default.slots.length > 0}
<div>
<h5 class="mt-8 mb-4 text-md font-bold text-gray-900 dark:text-white">Slots</h5>
  <ul class="w-full">
    <TableProp category="slots">
    <TableDefaultRow items={compo.data.default.slots} rowState='hover' />
    </TableProp>
  </ul>
</div>
{/if}

</div>
{/each}
{/if}