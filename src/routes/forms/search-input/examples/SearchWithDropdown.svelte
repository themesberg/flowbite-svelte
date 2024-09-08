<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Search, Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
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
    dropdownStatus = dropdown.isOpen;
  });
</script>

<form class="flex">
  <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
    {selectCategory}
    <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
  </Button>
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[160px] top-[40px]">
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
