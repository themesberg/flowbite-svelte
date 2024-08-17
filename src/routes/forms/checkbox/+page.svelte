<script lang="ts">
  import {
    Checkbox,
    CheckboxButton,
    ButtonGroup,
    checkbox,
    Helper,
    Label,
    Table,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    Radio,
    Button,
    Dropdown,
    DropdownUl,
    Search,
    uiHelpers,
    type CheckboxItem
  } from '$lib';
  import {
    ChevronDownOutline,
    UserRemoveSolid,
    AppleSolid,
    FacebookSolid,
    DiscordSolid,
    DropboxSolid
  } from 'flowbite-svelte-icons';
  import React from '../../utils/icons/React.svelte';
  import Vue from '../../utils/icons/Vue.svelte';
  import Angular from '../../utils/icons/Angular.svelte';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(checkbox.variants.color);
  let checkboxColor: Checkbox['color'] = $state('primary');

  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
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
  let choices: CheckboxItem[] = [
    { value: '1', checkboxLabel: 'One' },
    { value: '2', checkboxLabel: 'Two' },
    { value: '3', checkboxLabel: 'Three' }
  ];
  let group = $state(['2', '3']);
</script>

<H1>Checkbox</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Checkbox examples</H2>
<CodeWrapper class="space-y-4">
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox checked color="green">Checked state</Checkbox>
  <Checkbox indeterminate>Indeterminate state</Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-examples.md'] as string} />

<H2>Colors</H2>
<CodeWrapper class="space-y-4">
  <Checkbox color={checkboxColor} checked>Default checkbox</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio
        labelClass="w-24 my-1"
        name="checkbox_color"
        bind:group={checkboxColor}
        value={colorOption}>{colorOption}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md'] as string} />

<H2>Disabled state</H2>
<CodeWrapper class="space-y-4">
  <Checkbox disabled>Disabled checkbox</Checkbox>
  <Checkbox disabled checked>Disabled checked</Checkbox>
  <Checkbox disabled indeterminate>Disabled indeterminate</Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled-state.md'] as string} />

<H2>Alternative syntax</H2>
<CodeWrapper class="flex flex-col gap-4">
  <Table>
    <TableHead>
      <TableHeadCell>Left column</TableHeadCell>
      <TableHeadCell>Right column</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y dark:divide-gray-700">
      <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell
          ><Label for="checkbox1">Default checkbox</Label></TableBodyCell
        >
        <TableBodyCell
          ><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
        <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Label color="red" class="mt-4 flex items-center font-bold italic">
    Label on the other side <Checkbox class="ms-2" />
  </Label>
</CodeWrapper>

<H2>Checkbox with a link</H2>
<CodeWrapper>
  <Checkbox>
    I agree with the
    <a
      href="/"
      class="ms-1 text-primary-600 hover:underline dark:text-primary-500"
      >terms and conditions</a
    >.
  </Checkbox>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-with-a-link.md'] as string} />

<H2>Helper text</H2>
<CodeWrapper class="space-y-1">
  <Checkbox aria_describedby="helper-checkbox-text"
    >Free shipping via Flowbite</Checkbox
  >
  <Helper id="helper-checkbox-text" class="ps-6"
    >For orders shipped from $25 in books or $29 in other categories</Helper
  >
</CodeWrapper>
<HighlightCompo code={modules['./md/helper-text.md'] as string} />

<H2>Bordered</H2>
<CodeWrapper>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox classLabel="w-full p-4">Default radio</Checkbox>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox checked classLabel="w-full p-4">Checked state</Checkbox>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/bordered.md'] as string} />

<H2>Checkbox list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
  <ul
    class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
  >
    <li><Checkbox checked classLabel="p-3">svelte</Checkbox></li>
    <li><Checkbox classLabel="p-3">Vue JS</Checkbox></li>
    <li><Checkbox classLabel="p-3">React</Checkbox></li>
    <li><Checkbox classLabel="p-3">Angular</Checkbox></li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/checkbox-list-group.md'] as string} />

<H2>Horizontal list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul
    class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
  >
    <li class="w-full">
      <Checkbox checked classLabel="p-3">Svelte</Checkbox>
    </li>
    <li class="w-full"><Checkbox classLabel="p-3">Vue JS</Checkbox></li>
    <li class="w-full"><Checkbox classLabel="p-3">React</Checkbox></li>
    <li class="w-full"><Checkbox classLabel="p-3">Angular</Checkbox></li>
  </ul>
</CodeWrapper>
<HighlightCompo code={modules['./md/horizontal-list-group.md'] as string} />

<H2>Checkbox dropdown</H2>
<CodeWrapper class="relative flex h-96 items-start justify-center">
  <Button onclick={dropdown.toggle}
    >Project users<ChevronDownOutline
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
      {#snippet header()}
        <div class="p-0">
          <Search size="md" class="pl-8"/>
        </div>
      {/snippet}
      <DropdownUl>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Bonnie Green</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Bonnie Green</Checkbox>
        </li>
      </DropdownUl>
      {#snippet footer()}
        <a
          href="/"
          class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
        >
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      {/snippet}
    </Dropdown>
  </div>
</CodeWrapper>

<H2>Inline layout</H2>
<CodeWrapper>
  <div class="flex gap-3">
    <Checkbox>Inline 1</Checkbox>
    <Checkbox>Inline 2</Checkbox>
    <Checkbox checked>Inline checked</Checkbox>
    <Checkbox disabled>Inline disabled</Checkbox>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/inline-layout.md'] as string} />

<H2>CheckboxButton</H2>
<CodeWrapper class="space-y-4">
  <div>
    <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton
      ><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton
    >
    <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton
    >
    <CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton
    >
  </div>

  <ButtonGroup>
    <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton
      ><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton
    >
    <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton
    >
    <CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton
    >
  </ButtonGroup>
</CodeWrapper>

<H2>Advanced layout</H2>
<CodeWrapper>
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
    Choose technology:
  </p>
  <div class="grid w-full gap-6 md:grid-cols-3">
    <Checkbox custom>
      <div
        class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
      >
        <React />
        <div class="w-full text-lg font-semibold">React Js</div>
        <div class="w-full text-sm">
          A JavaScript library for building user interfaces.
        </div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div
        class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
      >
        <Vue />
        <div class="w-full text-lg font-semibold">Vue Js</div>
        <div class="w-full text-sm">
          Vue.js is an model–view front end JavaScript framework.
        </div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div
        class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
      >
        <Angular />
        <div class="w-full text-lg font-semibold">Angular</div>
        <div class="w-full text-sm">
          A TypeScript-based web application framework.
        </div>
      </div>
    </Checkbox>
  </div>
</CodeWrapper>

<H2>Group variable</H2>
<CodeWrapper>
  <div class="flex gap-2">
    <Checkbox name="flavours" {choices} bind:group />
  </div>
  <div
    class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400"
  >
    Group: {group}
  </div>
  <Button onclick={() => (group.length = 0)}>Clear</Button>
</CodeWrapper>
