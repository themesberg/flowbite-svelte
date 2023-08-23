<script lang="ts">
  import TableProp from './TableProp.svelte';
  import TableDefaultRow from './TableDefaultRow.svelte';


  export let componentData: any;

</script>

{#if componentData.props.length > 0}
<h4>Props</h4>
  <ul class="w-full">
    <TableProp>
    <TableDefaultRow items={componentData.props} rowState='hover' />
    </TableProp>
  </ul>
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 gap-2">

{#if componentData.events.length > 0}
<div>
<h4 class="mt-8 mb-4 text-lg font-bold text-gray-900 dark:text-white">Events</h4>
  <ul>
    <TableProp category="slots">
    <TableDefaultRow items={componentData.events} rowState='hover' />
    </TableProp>
  </ul>
</div>
{/if}

{#if componentData.slots.length > 0}
<div>
<h4 class="mt-8 mb-4 text-lg font-bold text-gray-900 dark:text-white">Slots</h4>
  <ul class="w-full">
    <TableProp category="slots">
    <TableDefaultRow items={componentData.slots} rowState='hover' />
    </TableProp>
  </ul>
</div>
{/if}

</div>