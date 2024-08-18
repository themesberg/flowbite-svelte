<script lang="ts">
  import {
    Select,
    Label, Radio,
    Helper,
    Dropdown,
    DropdownUl,
    DropdownLi,
    uiHelpers
  } from '$lib';
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
    { value: 'us', name: 'United States', href: '/' },
    { value: 'ca', name: 'Canada', href: '/' },
    { value: 'fr', name: 'France' , href: '/'}
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

  const sizes = ['sm', 'md', 'lg'];
  let selectSize: Select['size'] = $state('md');
  const sizeDisplay: Record<Select['size'], string> = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large'
  };
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
    <button
      id="states-button"
      class="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      type="button"
      onclick={dropdown.toggle}
    >
      <Usa />
      USA
      <ChevronDownOutline class="ms-2 h-6 w-6" />
    </button>
    <div class="relative">
      <Dropdown
        {dropdownStatus}
        {closeDropdown}
        {transitionParams}
        class="absolute top-[40px] -left-[120px]"
      >
        <DropdownUl>
          <DropdownLi aClass="flex items-center" href="/">
            <Usa />
            United States
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <Germany />
            Germany
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <Italy />
            Italy
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <China />
            China
          </DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <Select
      items={states}
      placeholder="Choose the state"
      selectClass="!rounded-s-none"
    />
  </div>
</CodeWrapper>

<H2>Size</H2>

<CodeWrapper>
  <div class="h-64">
    <Label for="select-sm" class="mb-4">{sizeDisplay[selectSize]} select</Label>
    <Select id="select-sm" size={selectSize} items={countries} selectClass="mb-8" />
    <Select id="select-sm" underline size={selectSize} items={countries} selectClass="mb-8" />
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio
        labelClass="w-24 my-1"
        name="input_size"
        bind:group={selectSize}
        value={option}>{option}</Radio
      >
    {/each}
  </div>
</CodeWrapper>

<H2>Custom options</H2>

<CodeWrapper>
  <Label for="countries">Select an option</Label>
  <Select id="countries" selectClass="mt-2" bind:value={selected} placeholder="">
    <option selected value="all">All</option>

    {#each countries as { value, name }}
      <option {value}>{name}</option>
    {/each}
  </Select>
</CodeWrapper>