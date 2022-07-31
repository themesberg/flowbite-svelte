---
layout: kbdLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, ArrowKeyDown, ArrowKeyLeft, ArrowKeyRight, ArrowKeyUp, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Kbd.json'
  import componentProps2 from '../props/ArrowKeyDown.json'
  import componentProps3 from '../props/ArrowKeyLeft.json'
  import componentProps4 from '../props/ArrowKeyRight.json'
  import componentProps5 from '../props/ArrowKeyUp.json'

  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props
  let items4 = componentProps4.props
  let items5 = componentProps5.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Kbd</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tailwind CSS KBD (Keyboard)</h1>

<Htwo label="Default KBD" />

<ExampleDiv>
<Kbd class='px-2 py-1.5'>Shift</Kbd>
<Kbd class='px-2 py-1.5'>Ctrl</Kbd>
<Kbd class='px-2 py-1.5'>Tab</Kbd>
<Kbd class='px-2 py-1.5'>Caps Lock</Kbd>
<Kbd class='px-2 py-1.5'>Esc</Kbd>
<Kbd class='px-4 py-1.5'>Spacebar</Kbd>
<Kbd class='px-2 py-1.5'>Enter</Kbd>
</ExampleDiv>

```html
<Kbd class='px-2 py-1.5'>Shift</Kbd>
<Kbd class='px-2 py-1.5'>Ctrl</Kbd>
<Kbd class='px-2 py-1.5'>Tab</Kbd>
<Kbd class='px-2 py-1.5'>Caps Lock</Kbd>
<Kbd class='px-2 py-1.5'>Esc</Kbd>
<Kbd class='px-4 py-1.5'>Spacebar</Kbd>
<Kbd class='px-2 py-1.5'>Enter</Kbd>
```

<Htwo label="KBD inside text" />

<ExampleDiv>
<p class="text-gray-500 dark:text-gray-400">
Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
</p>
</ExampleDiv>

```html
<p class="text-gray-500 dark:text-gray-400">
Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
</p>
```

<Htwo label="KBD inside table" />

<ExampleDiv>
<Table>
  <TableHead>
    <TableHeadCell>Key</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class='px-2 py-1.5'>Shift</Kbd> or <Kbd class='px-2 py-1.5'>Tab</Kbd>
      </TableBodyCell>
      <TableBodyCell>Navigate to interactive elements</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class='px-2 py-1.5'>Enter</Kbd> or <Kbd class='px-4 py-1.5'>Space bar</Kbd>
      </TableBodyCell>
      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyUp />
        <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyDown />
        <span class="sr-only">Arrow key down</span>
        </Kbd> or 
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyLeft />
        <span class="sr-only">Arrow key left</span>
        </Kbd>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyRight />
        <span class="sr-only">Arrow key right</span>
        </Kbd>
      </TableBodyCell>
      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</ExampleDiv>

```html
<Table>
  <TableHead>
    <TableHeadCell>Key</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class='px-2 py-1.5'>Shift</Kbd> or <Kbd class='px-2 py-1.5'>Tab</Kbd>
      </TableBodyCell>
      <TableBodyCell>Navigate to interactive elements</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class='px-2 py-1.5'>Enter</Kbd> or <Kbd class='px-4 py-1.5'>Space bar</Kbd>
      </TableBodyCell>
      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyUp />
        <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyDown />
        <span class="sr-only">Arrow key down</span>
        </Kbd> or 
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyLeft />
        <span class="sr-only">Arrow key left</span>
        </Kbd>
        <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
        <ArrowKeyRight />
        <span class="sr-only">Arrow key right</span>
        </Kbd>
      </TableBodyCell>
      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

<Htwo label='Arrow keys' />

<ExampleDiv>
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
  <ArrowKeyUp />
  <span class="sr-only">Arrow key up</span>
  </Kbd>
  <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
  <ArrowKeyDown />
  <span class="sr-only">Arrow key down</span>
  </Kbd>
  <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
  <ArrowKeyLeft />
  <span class="sr-only">Arrow key left</span>
  </Kbd>
  <Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
  <ArrowKeyRight />
  <span class="sr-only">Arrow key right</span>
  </Kbd>
</ExampleDiv>

```html
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
<ArrowKeyUp />
<span class="sr-only">Arrow key up</span>
</Kbd>
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
<ArrowKeyDown />
<span class="sr-only">Arrow key down</span>
</Kbd>
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
<ArrowKeyLeft />
<span class="sr-only">Arrow key left</span>
</Kbd>
<Kbd class="inline-flex items-center mr-1 px-2 py-1.5" >
<ArrowKeyRight />
<span class="sr-only">Arrow key right</span>
</Kbd>
```

<Htwo label='Letter keys' />

<ExampleDiv>
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
</ExampleDiv>

```html
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
```

<Htwo label='Number keys' />

<ExampleDiv>
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
</ExampleDiv>

```html
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
```

<Htwo label='Function keys' />

<ExampleDiv>
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
</ExampleDiv>

```html
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
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Kbd</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items} rowState='hover' />
</TableProp>

<h3>ArrowKeyDown</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>ArrowKeyLeft</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>ArrowKeyRight</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3>ArrowKeyUp</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

