<script>
    import { Kbd } from '$lib';
    import { CaretDownSolid, CaretRightSolid, CaretLeftSolid, CaretUpSolid } from 'flowbite-svelte-icons';
    import CodeWrapper from '../components/CodeWrapper.svelte';
  </script>

<CodeWrapper>
<Kbd class="px-2 py-1.5">Shift</Kbd>
<Kbd class="px-2 py-1.5">Ctrl</Kbd>
<Kbd class="px-2 py-1.5">Tab</Kbd>
<Kbd class="px-2 py-1.5">Caps Lock</Kbd>
<Kbd class="px-2 py-1.5">Esc</Kbd>
<Kbd class="px-4 py-1.5">Spacebar</Kbd>
<Kbd class="px-2 py-1.5">Enter</Kbd>
</CodeWrapper>


<CodeWrapper>
<p class="text-gray-500 dark:text-gray-400">
    Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
  </p>
</CodeWrapper>

<CodeWrapper>
  <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
    <CaretUpSolid size="xs"/>
    <span class="sr-only">Arrow key up</span>
  </Kbd>
  <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
    <CaretDownSolid  size="xs"/>
    <span class="sr-only">Arrow key down</span>
  </Kbd>
  <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
    <CaretLeftSolid  size="xs"/>
    <span class="sr-only">Arrow key left</span>
  </Kbd>
  <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
    <CaretRightSolid  size="xs"/>
    <span class="sr-only">Arrow key right</span>
  </Kbd>
</CodeWrapper>