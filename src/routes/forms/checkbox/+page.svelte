<script lang="ts">
  import { Checkbox, CheckboxButton, ButtonGroup, checkbox, Helper, Label, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Radio, Button, Dropdown, DropdownUl, DropdownHeader, DropdownFooter, Search, uiHelpers, type CheckboxItem } from '$lib';
  import { ChevronDownOutline, UserRemoveSolid, AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from 'flowbite-svelte-icons';
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
  const clearGroup = () => {
    group = [];
  };
  // const checkedStates = [ 'false', 'true', 'indeterminate' ];
  let checkedState = $state(false);
  const changeCheckedState = () => {
    checkedState = !checkedState;
    indeterminateState = false;
  };
  let indeterminateState = $state(false);
  const changeIntermidiateState = () => {
    indeterminateState = !indeterminateState;
    checkedState = false;
  };
  let disabledState = $state(false);
  const changeDisabledState = () => {
    disabledState = !disabledState;
  };
  let helperState = $state(false);
  const changeHelperState = () => {
    helperState = !helperState;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (checkedState) props.push(' checked');
      if (indeterminateState) props.push(' indeterminate');
      if (disabledState) props.push(' disabled');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Checkbox${propsString}>My Checkbox</Checkbox>
${helperState ? `<Helper class="ps-6">Helper text</Helper>` : ''}`;
    })()
  );
</script>

<H1>Checkbox</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Checkbox Builder</H2>
<CodeWrapper>
  <div class="h-8">
    <Checkbox checked={checkedState} indeterminate={indeterminateState} color={checkboxColor} disabled={disabledState}>
      {#if disabledState}This is disabled{:else}Default checkbox{/if}
    </Checkbox>
    {#if helperState}
      <Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
    {/if}
  </div>
  <div class="mb-4 mt-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="checkbox_color" bind:group={checkboxColor} color={colorOption as Checkbox['color']} onchange={() => (checkedState = true)} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="flex flex-wrap gap-2">
    <Button class="w-48" color="primary" onclick={changeCheckedState}>{checkedState ? 'Remove checked' : 'Add checked'}</Button>
    <Button class="w-48" color="secondary" onclick={changeIntermidiateState}>{indeterminateState ? 'Remove indeterminate' : 'Add indeterminate'}</Button>
    <Button class="w-48" color="pink" onclick={changeDisabledState}>{disabledState ? 'Remove disabled' : 'Add disabled'}</Button>
    <Button class="w-48" color="lime" onclick={changeHelperState}>{helperState ? 'Remove helper' : 'Add helper'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox in a table</H2>
<CodeWrapper innerClass="flex flex-col gap-4">
  <Table>
    <TableHead>
      <TableHeadCell>Left column</TableHeadCell>
      <TableHeadCell>Right column</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y dark:divide-gray-700">
      <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
        <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
        <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
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
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/alternative-syntax.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox with a link</H2>
<CodeWrapper>
  <Checkbox>
    I agree with the
    <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>
    .
  </Checkbox>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/checkbox-with-a-link.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Bordered</H2>
<CodeWrapper>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox classLabel="w-full p-4">Default radio</Checkbox>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Checkbox checked classLabel="w-full p-4">Checked state</Checkbox>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/bordered.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
  <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
    <li><Checkbox checked classLabel="p-3">svelte</Checkbox></li>
    <li><Checkbox classLabel="p-3">Vue JS</Checkbox></li>
    <li><Checkbox classLabel="p-3">React</Checkbox></li>
    <li><Checkbox classLabel="p-3">Angular</Checkbox></li>
  </ul>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/checkbox-list-group.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Horizontal list group</H2>
<CodeWrapper>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
    <li class="w-full">
      <Checkbox checked classLabel="p-3">Svelte</Checkbox>
    </li>
    <li class="w-full"><Checkbox classLabel="p-3">Vue JS</Checkbox></li>
    <li class="w-full"><Checkbox classLabel="p-3">React</Checkbox></li>
    <li class="w-full"><Checkbox classLabel="p-3">Angular</Checkbox></li>
  </ul>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/horizontal-list-group.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Checkbox dropdown</H2>
<CodeWrapper innerClass="relative flex h-[460px] items-start justify-center">
  <Button onclick={dropdown.toggle}>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[190px] top-[45px] w-52 overflow-y-auto p-2 pb-3 text-sm">
      <div class="relative">
        <DropdownHeader>
          <div class="p-0">
            <Search size="md" class="pl-8" />
          </div>
        </DropdownHeader>
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
      </div>
      <DropdownFooter>
        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/checkbox-dropdown.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Inline layout</H2>
<CodeWrapper>
  <div class="flex gap-3">
    <Checkbox>Inline 1</Checkbox>
    <Checkbox>Inline 2</Checkbox>
    <Checkbox checked>Inline checked</Checkbox>
    <Checkbox disabled>Inline disabled</Checkbox>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/inline-layout.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>CheckboxButton</H2>
<CodeWrapper>
  <div class="mb-4">
    <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
  </div>

  <ButtonGroup>
    <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
  </ButtonGroup>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/checkbox-button.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Advanced layout</H2>
<CodeWrapper>
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
  <div class="grid w-full gap-6 md:grid-cols-3">
    <Checkbox custom>
      <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
        <React />
        <div class="w-full text-lg font-semibold">React Js</div>
        <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
        <Vue />
        <div class="w-full text-lg font-semibold">Vue Js</div>
        <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
        <Angular />
        <div class="w-full text-lg font-semibold">Angular</div>
        <div class="w-full text-sm">A TypeScript-based web application framework.</div>
      </div>
    </Checkbox>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/advanced-layout.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Group variable</H2>
<CodeWrapper>
  <div class="flex gap-2">
    <Checkbox name="flavours" {choices} bind:group />
  </div>
  <div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">
    Group: {group}
  </div>
  <Button onclick={clearGroup}>Clear</Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/group-variable.md'] as string} />
  {/snippet}
</CodeWrapper>
