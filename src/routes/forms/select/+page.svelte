<script lang="ts">
  import { Select, Label, Helper, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { sineIn } from 'svelte/easing';
  import Usa from '../../utils/icons/Usa.svelte';
  import Germany from '../../utils/icons/Germany.svelte';
  import Italy from '../../utils/icons/Italy.svelte';
  import China from '../../utils/icons/China.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let selected: any = $state();
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];

  let states = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];

  let transitionParams = {
    y: 0,
    duration: 100,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<H1>Select</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Select input example</H2>

<CodeWrapper class="h-48">
  <Label>
    Select an option
    <Select selectClass="mt-2" items={countries} bind:value={selected} />
  </Label>
  <Helper class="mt-2">Your selected value is: {selected}</Helper>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultselect.md'] as string} />

<H2>Disabled state</H2>

<CodeWrapper class="h-48">
  <Label for="select-disabled" color="disabled" class="mb-2"
    >Disabled select</Label
  >
  <Select
    id="select-disabled"
    disabled
    items={countries}
    placeholder="You can't select anything..."
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled.md'] as string} />

<H2>Underline select</H2>

<CodeWrapper class="h-48">
  <Label for="select-underline" class="sr-only">Underline select</Label>
  <Select
    id="select-underline"
    underline
    selectClass="mt-2"
    items={countries}
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/underline.md'] as string} />

<H2>Select with dropdown</H2>
<CodeWrapper class="h-96">
  <div class="flex">
    <button id="states-button" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button" onclick={dropdown.toggle}>
      <Usa />
      USA
      <ChevronDownOutline class="w-6 h-6 ms-2" />
    </button>
    <div class="relative">
    <Dropdown 
      {dropdownStatus}
      {closeDropdown}
      {transitionParams}
      divClass="overflow-y-auto p-0 pb-3 text-sm w-32 absolute top-[50px] -left-[110px]"
      ulClass="space-y-2"
      >
      <DropdownUl>
        <DropdownLi liClass="flex items-center">
          <Usa />
          United States
        </DropdownLi>
        <DropdownLi liClass="flex items-center">
          <Germany />
          Germany
        </DropdownLi>
        <DropdownLi liClass="flex items-center">
          <Italy />
          Italy
        </DropdownLi>
        <DropdownLi liClass="flex items-center">
          <China />
          China
        </DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
    <Select items={states} placeholder="Choose the state" selectClass="!rounded-s-none" />
  </div>
</CodeWrapper>