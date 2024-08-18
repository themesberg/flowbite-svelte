<script lang="ts">
  import { Select, Label, Search, Button, Dropdown, DropdownUl, DropdownLi } from '$lib';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const items = [
    { label: 'All categories' },
    { label: 'Mockups'},
    { label: 'Templates'},
    { label: 'Design' },
    { label: 'Logos' }
  ]

  let selectCategory = 'All categories'
</script>

<H1>Search Input</H1>

<H2>Default search input</H2>
<CodeWrapper>
  <Search class="pl-10">
    <Button class="mr-1">Search</Button>
  </Search>
</CodeWrapper>

<H2>Simple search input</H2>
<CodeWrapper>
  <form class="flex gap-2">
    <Search size="md" class="pl-10"/>
    <Button class="!p-2.5">
      <SearchOutline class="w-5 h-5" />
    </Button>
  </form>
</CodeWrapper>

<H2>Search with dropdown</H2>
<CodeWrapper>

</CodeWrapper>