# Svelte KBD (Keyboard) - Flowbite


The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.

## Setup

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>
```

## Default KBD

Here’s a list of KBD components that you can use inside any other element.

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>

<Kbd>Shift</Kbd>
<Kbd>Ctrl</Kbd>
<Kbd>Tab</Kbd>
<Kbd>Caps Lock</Kbd>
<Kbd>Esc</Kbd>
<Kbd class="px-4">Spacebar</Kbd>
<Kbd>Enter</Kbd>
```

## KBD inside text

Use this example by nesting an inline KBD component inside a paragraph.

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>

<p class="text-gray-500 dark:text-gray-400">
  Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.
</p>
```

## KBD inside table

The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.

```svelte
<script lang="ts">
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { CaretUpSolid, CaretDownSolid, CaretRightSolid, CaretLeftSolid } from "flowbite-svelte-icons";
</script>

<Table>
  <TableHead>
    <TableHeadCell>Key</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>
        <Kbd>Shift</Kbd> or <Kbd>Tab</Kbd>
      </TableBodyCell>
      <TableBodyCell>Navigate to interactive elements</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd>Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>
      </TableBodyCell>
      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretUpSolid />
          <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretDownSolid />
          <span class="sr-only">Arrow key down</span>
        </Kbd> or
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretLeftSolid />
          <span class="sr-only">Arrow key left</span>
        </Kbd>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretRightSolid />
          <span class="sr-only">Arrow key right</span>
        </Kbd>
      </TableBodyCell>
      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

## Arrow keys

Use this example to show arrow keys inside the KBD styled element.

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
  import { CaretUpSolid, CaretDownSolid, CaretRightSolid, CaretLeftSolid } from "flowbite-svelte-icons";
</script>

<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretUpSolid />
  <span class="sr-only">Arrow key up</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretDownSolid />
  <span class="sr-only">Arrow key down</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretLeftSolid />
  <span class="sr-only">Arrow key left</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretRightSolid />
  <span class="sr-only">Arrow key right</span>
</Kbd>
```

## Letter keys

Use this example if you need to show a key from the latin alphabet

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>

<Kbd>Q</Kbd>
<Kbd>W</Kbd>
<Kbd>E</Kbd>
<Kbd>R</Kbd>
<Kbd>T</Kbd>
<Kbd>Y</Kbd>
<Kbd>U</Kbd>
<Kbd>I</Kbd>
<Kbd>O</Kbd>
<Kbd>P</Kbd>
<Kbd>A</Kbd>
<Kbd>S</Kbd>
<Kbd>D</Kbd>
<Kbd>F</Kbd>
<Kbd>G</Kbd>
<Kbd>H</Kbd>
<Kbd>J</Kbd>
<Kbd>K</Kbd>
<Kbd>L</Kbd>
<Kbd>Z</Kbd>
<Kbd>X</Kbd>
<Kbd>C</Kbd>
<Kbd>V</Kbd>
<Kbd>B</Kbd>
<Kbd>N</Kbd>
<Kbd>M</Kbd>
```

## Number keys

Use this example to show a key inside a KBD component from the english numeral system.

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>

<Kbd>1</Kbd>
<Kbd>2</Kbd>
<Kbd>3</Kbd>
<Kbd>4</Kbd>
<Kbd>5</Kbd>
<Kbd>6</Kbd>
<Kbd>7</Kbd>
<Kbd>8</Kbd>
<Kbd>9</Kbd>
<Kbd>0</Kbd>
```

## Function keys

This example can be used to denote function keys inside the KBD component.

```svelte
<script lang="ts">
  import { Kbd } from "flowbite-svelte";
</script>

<Kbd>F1</Kbd>
<Kbd>F2</Kbd>
<Kbd>F3</Kbd>
<Kbd>F4</Kbd>
<Kbd>F5</Kbd>
<Kbd>F6</Kbd>
<Kbd>F7</Kbd>
<Kbd>F8</Kbd>
<Kbd>F9</Kbd>
<Kbd>F10</Kbd>
<Kbd>F11</Kbd>
<Kbd>F12</Kbd>
```

## Component data

### Kbd

#### Types

[KbdProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1047)

#### Props

- children
- class: className


## References

- [Flowbite KBD (Keyboard)](https://flowbite.com/docs/components/kbd/)
