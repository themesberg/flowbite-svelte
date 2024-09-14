<script lang="ts">
  import { Table } from '$lib';
  const tableItems = [
    {name: 'Apple MacBook Pro 17"', qty: '1', price: '$2999'},
    {name: 'Microsoft Surface Pro', qty: '1',  price: '$1999'},
    {name: 'Magic Mouse 2', qty: '1',  price: '$99'},
  ]
</script>

<Table {tableItems} hoverable>
  {#snippet footerSlot()}
  <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 px-6">3</td>
      <td class="py-3 px-6">$5,097</td>
    </tr>
  </tfoot>
  {/snippet}
</Table>
