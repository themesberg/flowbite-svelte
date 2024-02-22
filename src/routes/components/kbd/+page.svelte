<script lang="ts">
  import { Kbd } from '$lib';
  import { CaretDownSolid, CaretRightSolid, CaretLeftSolid, CaretUpSolid } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>KBD (Keyboard)</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default KBD</H2>

<CodeWrapper class="flex justify-center gap-1">
  <Kbd kbdclass="px-2 py-1.5">Shift</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Ctrl</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Tab</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Caps Lock</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Esc</Kbd>
  <Kbd kbdclass="px-4 py-1.5">Spacebar</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Enter</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultkbd.md'] as string} />

<H2>KBD inside text</H2>

<CodeWrapper class="flex justify-center">
  <p class="text-gray-500 dark:text-gray-400">
    Please press <Kbd kbdclass="px-2 py-1.5">Ctrl</Kbd> + <Kbd kbdclass="px-2 py-1.5">Shift</Kbd> + <Kbd kbdclass="px-2 py-1.5">R</Kbd> to re-render an
    MDN page.
  </p>
</CodeWrapper>

<HighlightCompo code={modules['./md/insidetext.md'] as string} />

<H2>Arrow keys</H2>

<CodeWrapper class="flex justify-center">
  <Kbd kbdclass="me-1 inline-flex items-center px-2 py-1.5">
    <CaretUpSolid size="xs" />
    <span class="sr-only">Arrow key up</span>
  </Kbd>
  <Kbd kbdclass="me-1 inline-flex items-center px-2 py-1.5">
    <CaretDownSolid size="xs" />
    <span class="sr-only">Arrow key down</span>
  </Kbd>
  <Kbd kbdclass="me-1 inline-flex items-center px-2 py-1.5">
    <CaretLeftSolid size="xs" />
    <span class="sr-only">Arrow key left</span>
  </Kbd>
  <Kbd kbdclass="me-1 inline-flex items-center px-2 py-1.5">
    <CaretRightSolid size="xs" />
    <span class="sr-only">Arrow key right</span>
  </Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/arrow.md'] as string} />

<H2>Letter keys</H2>

<CodeWrapper class="flex justify-center gap-1">
  <Kbd kbdclass="px-2 py-1.5">Q</Kbd>
  <Kbd kbdclass="px-2 py-1.5">W</Kbd>
  <Kbd kbdclass="px-2 py-1.5">E</Kbd>
  <Kbd kbdclass="px-2 py-1.5">R</Kbd>
  <Kbd kbdclass="px-2 py-1.5">T</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Y</Kbd>
  <Kbd kbdclass="px-2 py-1.5">U</Kbd>
  <Kbd kbdclass="px-2 py-1.5">I</Kbd>
  <Kbd kbdclass="px-2 py-1.5">O</Kbd>
  <Kbd kbdclass="px-2 py-1.5">P</Kbd>
  <Kbd kbdclass="px-2 py-1.5">A</Kbd>
  <Kbd kbdclass="px-2 py-1.5">S</Kbd>
  <Kbd kbdclass="px-2 py-1.5">D</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F</Kbd>
  <Kbd kbdclass="px-2 py-1.5">G</Kbd>
  <Kbd kbdclass="px-2 py-1.5">H</Kbd>
  <Kbd kbdclass="px-2 py-1.5">J</Kbd>
  <Kbd kbdclass="px-2 py-1.5">K</Kbd>
  <Kbd kbdclass="px-2 py-1.5">L</Kbd>
  <Kbd kbdclass="px-2 py-1.5">Z</Kbd>
  <Kbd kbdclass="px-2 py-1.5">X</Kbd>
  <Kbd kbdclass="px-2 py-1.5">C</Kbd>
  <Kbd kbdclass="px-2 py-1.5">V</Kbd>
  <Kbd kbdclass="px-2 py-1.5">B</Kbd>
  <Kbd kbdclass="px-2 py-1.5">N</Kbd>
  <Kbd kbdclass="px-2 py-1.5">M</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/letter.md'] as string} />

<H2>Number keys</H2>

<CodeWrapper class="flex justify-center gap-1">
  <Kbd kbdclass="px-2 py-1.5">1</Kbd>
  <Kbd kbdclass="px-2 py-1.5">2</Kbd>
  <Kbd kbdclass="px-2 py-1.5">3</Kbd>
  <Kbd kbdclass="px-2 py-1.5">4</Kbd>
  <Kbd kbdclass="px-2 py-1.5">5</Kbd>
  <Kbd kbdclass="px-2 py-1.5">6</Kbd>
  <Kbd kbdclass="px-2 py-1.5">7</Kbd>
  <Kbd kbdclass="px-2 py-1.5">8</Kbd>
  <Kbd kbdclass="px-2 py-1.5">9</Kbd>
  <Kbd kbdclass="px-2 py-1.5">0</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/number.md'] as string} />

<H2>Function keys</H2>

<CodeWrapper class="flex justify-center gap-1">
  <Kbd kbdclass="px-2 py-1.5">F1</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F2</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F3</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F4</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F5</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F6</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F7</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F8</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F9</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F10</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F11</Kbd>
  <Kbd kbdclass="px-2 py-1.5">F12</Kbd>
</CodeWrapper>

<HighlightCompo code={modules['./md/functionkbd.md'] as string} />
