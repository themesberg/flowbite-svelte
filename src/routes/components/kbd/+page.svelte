<script lang="ts">
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow } from '$lib';
  import {
    CaretDownSolid,
    CaretRightSolid,
    CaretLeftSolid,
    CaretUpSolid
  } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>KBD (Keyboard)</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default KBD</H2>

<CodeWrapper class="flex justify-center gap-1 flex-wrap">
  <Kbd class="px-2 py-1.5">Shift</Kbd>
  <Kbd class="px-2 py-1.5">Ctrl</Kbd>
  <Kbd class="px-2 py-1.5">Tab</Kbd>
  <Kbd class="px-2 py-1.5">Caps Lock</Kbd>
  <Kbd class="px-2 py-1.5">Esc</Kbd>
  <Kbd class="px-4 py-1.5">Spacebar</Kbd>
  <Kbd class="px-2 py-1.5">Enter</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultkbd.md'] as string} />

<H2>KBD inside text</H2>

<CodeWrapper class="flex justify-center flex-wrap">
  <p class="text-gray-500 dark:text-gray-400">
    Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd
      class="px-2 py-1.5">Shift</Kbd
    > + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
  </p>
</CodeWrapper>

<HighlightCompo code={modules['./md/insidetext.md'] as string} />

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
          <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
            <CaretUpSolid size="xs"/>
            <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <CaretDownSolid  size="xs"/>
          <span class="sr-only">Arrow key down</span>
        </Kbd> or
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <CaretLeftSolid  size="xs"/>
          <span class="sr-only">Arrow key left</span>
      </Kbd>
      <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <CaretRightSolid  size="xs"/>
          <span class="sr-only">Arrow key right</span>
      </Kbd>
        </TableBodyCell>
        <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</CodeWrapper>

<H2>Arrow keys</H2>

<CodeWrapper class="flex justify-center flex-wrap">
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
</CodeWrapper>

<HighlightCompo code={modules['./md/arrow.md'] as string} />

<H2>Letter keys</H2>

<CodeWrapper class="flex justify-center gap-1 flex-wrap">
  <Kbd class="px-2 py-1.5">Q</Kbd>
  <Kbd class="px-2 py-1.5">W</Kbd>
  <Kbd class="px-2 py-1.5">E</Kbd>
  <Kbd class="px-2 py-1.5">R</Kbd>
  <Kbd class="px-2 py-1.5">T</Kbd>
  <Kbd class="px-2 py-1.5">Y</Kbd>
  <Kbd class="px-2 py-1.5">U</Kbd>
  <Kbd class="px-2 py-1.5">I</Kbd>
  <Kbd class="px-2 py-1.5">O</Kbd>
  <Kbd class="px-2 py-1.5">P</Kbd>
  <Kbd class="px-2 py-1.5">A</Kbd>
  <Kbd class="px-2 py-1.5">S</Kbd>
  <Kbd class="px-2 py-1.5">D</Kbd>
  <Kbd class="px-2 py-1.5">F</Kbd>
  <Kbd class="px-2 py-1.5">G</Kbd>
  <Kbd class="px-2 py-1.5">H</Kbd>
  <Kbd class="px-2 py-1.5">J</Kbd>
  <Kbd class="px-2 py-1.5">K</Kbd>
  <Kbd class="px-2 py-1.5">L</Kbd>
  <Kbd class="px-2 py-1.5">Z</Kbd>
  <Kbd class="px-2 py-1.5">X</Kbd>
  <Kbd class="px-2 py-1.5">C</Kbd>
  <Kbd class="px-2 py-1.5">V</Kbd>
  <Kbd class="px-2 py-1.5">B</Kbd>
  <Kbd class="px-2 py-1.5">N</Kbd>
  <Kbd class="px-2 py-1.5">M</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/letter.md'] as string} />

<H2>Number keys</H2>

<CodeWrapper class="flex justify-center gap-1 flex-wrap">
  <Kbd class="px-2 py-1.5">1</Kbd>
  <Kbd class="px-2 py-1.5">2</Kbd>
  <Kbd class="px-2 py-1.5">3</Kbd>
  <Kbd class="px-2 py-1.5">4</Kbd>
  <Kbd class="px-2 py-1.5">5</Kbd>
  <Kbd class="px-2 py-1.5">6</Kbd>
  <Kbd class="px-2 py-1.5">7</Kbd>
  <Kbd class="px-2 py-1.5">8</Kbd>
  <Kbd class="px-2 py-1.5">9</Kbd>
  <Kbd class="px-2 py-1.5">0</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/number.md'] as string} />

<H2>Function keys</H2>

<CodeWrapper class="flex justify-center gap-1 flex-wrap">
  <Kbd class="px-2 py-1.5">F1</Kbd>
  <Kbd class="px-2 py-1.5">F2</Kbd>
  <Kbd class="px-2 py-1.5">F3</Kbd>
  <Kbd class="px-2 py-1.5">F4</Kbd>
  <Kbd class="px-2 py-1.5">F5</Kbd>
  <Kbd class="px-2 py-1.5">F6</Kbd>
  <Kbd class="px-2 py-1.5">F7</Kbd>
  <Kbd class="px-2 py-1.5">F8</Kbd>
  <Kbd class="px-2 py-1.5">F9</Kbd>
  <Kbd class="px-2 py-1.5">F10</Kbd>
  <Kbd class="px-2 py-1.5">F11</Kbd>
  <Kbd class="px-2 py-1.5">F12</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/functionkbd.md'] as string} />
