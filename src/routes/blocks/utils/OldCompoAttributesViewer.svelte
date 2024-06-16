<script lang="ts">
  import TableProp from './TableProp.svelte';
  import TableDefaultRow from './TableDefaultRow.svelte';
  

  export let componentData: any;

</script>

{#if componentData.props.length > 0}
<h4>Props</h4>
  <ul>
    <TableProp>
    <TableDefaultRow items={componentData.props} rowState='hover' />
    </TableProp>
  </ul>
{/if}

{#if componentData.slots.length > 0}
<h4>Slots</h4>
  <ul>
    <TableProp category="slots">
    <TableDefaultRow items={componentData.slots} rowState='hover' />
    </TableProp>
  </ul>
{/if}

{#if componentData.events.length > 0}
<h4>Events</h4>

{componentData.events}

{/if}