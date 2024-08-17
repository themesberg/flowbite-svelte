<script lang="ts">
  import {
    Radio,
    radio,
    Helper,
    RadioButton,
    ButtonGroup,
    Label,
    P,
    Dropdown,
    DropdownUl,
    Button,
    uiHelpers
  } from '$lib';
  // let { group = $bindable() ,technology = $bindable('svelte'), radioGroup = $bindable('notes') } = $props();
  // let colors = 'text-purple-500';
  let technology = $state('svelte');
  let inline1 = $state('second');
  import {
    ArrowRightOutline,
    ListMusicSolid,
    OrderedListOutline,
    ListOutline,
    ChevronDownOutline
  } from 'flowbite-svelte-icons';
  let radioGroup = $state('notes');

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(radio.variants.color) as Radio['color'][];
  let radioColor: Radio['color'] = $state('primary');
  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let group3 = $state(2);
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
  // let sizeEx = $state('default');
</script>

<H1>Radio, Helper, and RadioButton</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Radio examples</H2>
<CodeWrapper class="flex flex-col gap-4">
  <Radio name="example">Default radio</Radio>
  <Radio name="example" checked>Checked state</Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-examples.md'] as string} />

<H2>Colors</H2>
<CodeWrapper class="flex flex-col gap-4">
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color:</Label>
    {#each colors as colorOption}
      <Radio
        labelClass="w-24 m-2"
        name="radio_color"
        bind:group={radioColor}
        color={colorOption}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Size</H2>
<P>Use <code>inputClass</code>.</P>
<CodeWrapper class="flex gap-4">
  <Radio name="size-example">Default size</Radio>
  <Radio name="size-example" inputClass="w-6 h-6">w-6 h-6</Radio>
  <Radio name="size-example" inputClass="w-8 h-8">w-8 h-8</Radio>
</CodeWrapper>
<HighlightCompo code={modules['./md/size.md'] as string} />

<H2>Disabled state</H2>
<CodeWrapper class="flex flex-col gap-4">
  <Radio name="disabled-state" disabled>Disabled radio</Radio>
  <Radio name="disabled-state" disabled checked>Disabled checked</Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Radio with a link</H2>
<CodeWrapper>
  <Radio name="with-link">
    I agree with the <a
      href="/"
      class="ms-1 text-primary-600 hover:underline dark:text-primary-500"
    >
      terms and conditions
    </a>.
  </Radio>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-with-a-link.md'] as string} />

<H2>Helper text</H2>
<CodeWrapper>
  <Radio aria_describedby="helper-checkbox-text"
    >Free shipping via Flowbite</Radio
  >
  <Helper id="helper-checkbox-text" class="ps-6"
    >For orders shipped from $25 in books or $29 in other categories</Helper
  >
</CodeWrapper>

<HighlightCompo code={modules['./md/helper-text.md'] as string} />

<H2>Bordered</H2>
<CodeWrapper>
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="bordered" labelClass="p-4">Default radio</Radio>
    </div>
    <div class="rounded border border-gray-200 dark:border-gray-700">
      <Radio name="bordered" checked labelClass="p-4">Checked state</Radio>
    </div>
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/bordered.md'] as string} />

<H2>Radio list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">
    Technology <span class="capitalize">{technology}</span>
  </p>
  <ul
    class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
  >
    <li>
      <Radio labelClass="p-3" bind:group={technology} value="svelte"
        >Svelte</Radio
      >
    </li>
    <li>
      <Radio labelClass="p-3" bind:group={technology} value="vue js"
        >Vue JS</Radio
      >
    </li>
    <li>
      <Radio labelClass="p-3" bind:group={technology} value="react">React</Radio
      >
    </li>
    <li>
      <Radio labelClass="p-3" bind:group={technology} value="angular"
        >Angular</Radio
      >
    </li>
  </ul>
</CodeWrapper>

<HighlightCompo code={modules['./md/radio-list-group.md'] as string} />

<H2>Horizontal list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul
    class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
  >
    <li class="w-full">
      <Radio name="hor-list" labelClass="p-3">Svelte</Radio>
    </li>
    <li class="w-full">
      <Radio name="hor-list" labelClass="p-3">Vue JS</Radio>
    </li>
    <li class="w-full">
      <Radio name="hor-list" labelClass="p-3">React</Radio>
    </li>
    <li class="w-full">
      <Radio name="hor-list" labelClass="p-3">Angular</Radio>
    </li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/horizontal-list-group.md'] as string} />

<H2>Radio in dropdown</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdown.toggle}
    >Dropdown radio<ChevronDownOutline
      class="ms-2 h-6 w-6 text-white dark:text-white"
    /></Button
  >
  <div class="relative">
    <Dropdown
      {dropdownStatus}
      {closeDropdown}
      {transitionParams}
      divClass="overflow-y-auto p-0 pb-3 text-sm w-64 h-64 absolute top-[50px] -left-[210px]"
    >
      <DropdownUl>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group3" bind:group={group3} value={1}
            >Enable notifications</Radio
          >
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group3" bind:group={group3} value={2}
            >Enable 2FA auth</Radio
          >
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group3" bind:group={group3} value={3}
            >Subscribe newsletter</Radio
          >
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </li>
      </DropdownUl>
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Inline layout</H2>
<CodeWrapper>
  <div class="flex gap-3">
    <Radio bind:group={inline1} name="inline-layout" value="first"
      >Inline 1</Radio
    >
    <Radio bind:group={inline1} name="inline-layout" value="second"
      >Inline 2 checked</Radio
    >
    <Radio bind:group={inline1} name="inline-layout" value="third"
      >Inline 3</Radio
    >
    <Radio bind:group={inline1} name="inline-layout" value="fourth" disabled
      >Inline disabled</Radio
    >
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/inline-layout.md'] as string} />

<H2>Advanced layout</H2>
<CodeWrapper>
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
    Choose technology:
  </p>
  <div class="grid w-full gap-6 md:grid-cols-2">
    <Radio name="custom">
      <div
        id="hosting-small"
        class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
      >
        <div>
          <div class="w-full text-lg font-semibold">0-50 MB</div>
          <div class="w-full">Good for small websites</div>
        </div>
        <ArrowRightOutline class="ms-3 h-6 w-6" />
      </div>
    </Radio>
    <Radio name="custom">
      <div
        id="hosting-big"
        class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">500-1000 MB</div>
          <div class="w-full">Good for large websites</div>
        </div>
        <ArrowRightOutline class="ms-3 h-6 w-6" />
      </div>
    </Radio>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/advanced-layout.md'] as string} />

<H2>Radio button</H2>
<CodeWrapper class="space-y-4">
  <div>
    <RadioButton value="notes" bind:group={radioGroup}
      ><ListMusicSolid /></RadioButton
    >
    <RadioButton value="numbers" bind:group={radioGroup}
      ><OrderedListOutline /></RadioButton
    >
    <RadioButton value="bullets" bind:group={radioGroup}
      ><ListOutline /></RadioButton
    >
  </div>

  <ButtonGroup>
    <RadioButton value="notes" bind:group={radioGroup}
      ><ListMusicSolid /></RadioButton
    >
    <RadioButton value="numbers" bind:group={radioGroup}
      ><OrderedListOutline /></RadioButton
    >
    <RadioButton value="bullets" bind:group={radioGroup}
      ><ListOutline /></RadioButton
    >
  </ButtonGroup>

  <p>List style: {radioGroup}</p>
</CodeWrapper>
<HighlightCompo code={modules['./md/radio-button.md'] as string} />
