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

  const items = [
    { label: 'All categories' },
    { label: 'Mockups'},
    { label: 'Templates'},
    { label: 'Design' },
    { label: 'Logos' }
  ]

  let selectCategory = $state('All categories');
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  const handleClick = (label: string) =>{
    selectCategory = label;
    console.log('selectCategory', selectCategory);
    dropdown.close();
  }
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
    <Search size="md" class="pl-10"/>
    <Button class="!p-2.5">
      <SearchOutline class="w-5 h-5" />
    </Button>
  </form>
</CodeWrapper>

<H2>Search with dropdown</H2>
<CodeWrapper class="h-64">
  <form class="flex">
    <Button class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700" onclick={dropdown.toggle}>
      {selectCategory}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <div class="relative">
      <Dropdown 
      {dropdownStatus} {closeDropdown} 
      {transitionParams}
      class="absolute top-[40px] -left-[160px]"
      >
        <DropdownUl>
        {#each items as { label }}
          <DropdownLi
            onclick={()=>handleClick(label)}
            liClass="hover:cursor-pointer py-1 pl-4 {selectCategory === label ? 'underline' : ''}"
            
          >
           {label}
          </DropdownLi>
        {/each}
        </DropdownUl>
      </Dropdown>
    </div>
    <Search size="md" class="rounded-none pl-8 py-2.5" placeholder="Searching {selectCategory}" />
    <Button class="!p-2.5 rounded-s-none">
      <SearchOutline class="w-6 h-6" />
    </Button>
  </form>
</CodeWrapper>