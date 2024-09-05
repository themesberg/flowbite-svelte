<script lang="ts">
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Input } from '$lib';
  import { CaretDownSolid, CaretRightSolid, CaretLeftSolid, CaretUpSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'kbd';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  // let { letter = $bindable() } = $props()
  let letter = $state('');
</script>

<H1>KBD (Keyboard)</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default KBD</H2>

<CodeWrapper>
  <div class="flex flex-wrap justify-center gap-1">
    <Kbd class="px-2 py-1.5">Shift</Kbd>
    <Kbd class="px-2 py-1.5">Ctrl</Kbd>
    <Kbd class="px-2 py-1.5">Tab</Kbd>
    <Kbd class="px-2 py-1.5">Caps Lock</Kbd>
    <Kbd class="px-2 py-1.5">Esc</Kbd>
    <Kbd class="px-4 py-1.5">Spacebar</Kbd>
    <Kbd class="px-2 py-1.5">Enter</Kbd>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/defaultkbd.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Letter keys</H2>
<CodeWrapper>
  <div class="space-y-4">
    <Kbd class="px-2 py-1.5">{letter === '' ? 'Type a letter' : letter}</Kbd>
    <Input bind:value={letter} placeholder="Type a letter" />
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/letter.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>KBD inside text</H2>
<CodeWrapper>
  <div class="flex flex-wrap justify-center">
    <p class="text-gray-500 dark:text-gray-400">
      Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
    </p>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/insidetext.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>KBD inside table</H2>
<CodeWrapper>
  <Table>
    <TableHead>
      <TableHeadCell>Key</TableHeadCell>
      <TableHeadCell>Description</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>
          <Kbd class="px-2 py-1.5">Shift</Kbd> or <Kbd class="px-2 py-1.5">Tab</Kbd>
        </TableBodyCell>
        <TableBodyCell>Navigate to interactive elements</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>
          <Kbd class="px-2 py-1.5">Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>
        </TableBodyCell>
        <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>
          <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
            <CaretUpSolid size="xs" />
            <span class="sr-only">Arrow key up</span>
          </Kbd>
          <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
            <CaretDownSolid size="xs" />
            <span class="sr-only">Arrow key down</span>
          </Kbd> or
          <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
            <CaretLeftSolid size="xs" />
            <span class="sr-only">Arrow key left</span>
          </Kbd>
          <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
            <CaretRightSolid size="xs" />
            <span class="sr-only">Arrow key right</span>
          </Kbd>
        </TableBodyCell>
        <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/table.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Arrow keys</H2>
<CodeWrapper>
  <div class="flex flex-wrap justify-center">
    <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
      <CaretUpSolid size="xs" />
      <span class="sr-only">Arrow key up</span>
    </Kbd>
    <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
      <CaretDownSolid size="xs" />
      <span class="sr-only">Arrow key down</span>
    </Kbd>
    <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
      <CaretLeftSolid size="xs" />
      <span class="sr-only">Arrow key left</span>
    </Kbd>
    <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
      <CaretRightSolid size="xs" />
      <span class="sr-only">Arrow key right</span>
    </Kbd>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/arrow.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName}/>