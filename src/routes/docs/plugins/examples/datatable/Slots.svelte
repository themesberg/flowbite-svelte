<script lang="ts">
  import { Table } from '@flowbite-svelte-plugins/datatable';
  import { P, Heading } from 'flowbite-svelte';
  import items from './data/sample.json';
</script>

<Table {items}>
  {#snippet captionSlot()}
    <Heading tag="h4" class="text-left">Caption</Heading>
    <P>Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</P>
  {/snippet}
  {#snippet footerSlot()}
    <tr>
      <td colspan={4} class="text-left text-base leading-normal font-normal tracking-normal whitespace-normal text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam placeat eum facilis aliquam, adipisci consequuntur excepturi rerum distinctio illum quibusdam neque magni quaerat
        dolorum hic labore repellat omnis? Quisquam?
      </td>
    </tr>
  {/snippet}
</Table>
