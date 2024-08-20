<script lang="ts">
  import { Select, Label, Search, Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { sineIn } from 'svelte/easing';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const items = [{ label: 'All categories' }, { label: 'Mockups' }, { label: 'Templates' }, { label: 'Design' }, { label: 'Logos' }];

  let selectCategory = $state('All categories');
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  const handleClick = (label: string) => {
    selectCategory = label;
    console.log('selectCategory', selectCategory);
    dropdown.close();
  };
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
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
    <Search size="md" class="pl-10" />
    <Button class="!p-2.5">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </form>
</CodeWrapper>

<H2>Search with dropdown</H2>
<CodeWrapper class="h-64">
  <form class="flex">
    <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
      {selectCategory}
      <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} {transitionParams} class="absolute -left-[160px] top-[40px]">
        <DropdownUl>
          {#each items as { label }}
            <DropdownLi onclick={() => handleClick(label)} liClass="hover:cursor-pointer py-1 pl-4 {selectCategory === label ? 'underline' : ''}">
              {label}
            </DropdownLi>
          {/each}
        </DropdownUl>
      </Dropdown>
    </div>
    <Search size="md" class="rounded-none py-2.5 pl-8" placeholder="Searching {selectCategory}" />
    <Button class="rounded-s-none !p-2.5">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</CodeWrapper>
