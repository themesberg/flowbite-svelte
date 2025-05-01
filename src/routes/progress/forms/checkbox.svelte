<script lang="ts">
  import { Checkbox, Label, Helper, Listgroup, Dropdown, DropdownItem, DropdownGroup, Button, Search, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, ButtonGroup, CheckboxButton } from "$lib";
  import { ChevronDownOutline, UserRemoveSolid, AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from "flowbite-svelte-icons";

  // For checkbox group examples
  let choices = [
    { value: "svelte", label: "svelte" },
    { value: "vue", label: "Vue JS" },
    { value: "react", label: "React", checked: true },
    { value: "angular", label: "Angular" }
  ];
  let group = $state([]);

  // For group variable example
  let choicesNumbers = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" }
  ];
  let groupNumbers = ["2", "3"];
</script>

<h1 class="my-4 text-3xl">Checkbox</h1>

<h2 class="my-4 text-2xl">Checkbox examples</h2>
<div class="flex flex-col gap-4">
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox checked>Checked state</Checkbox>
  <Checkbox indeterminate>Indeterminate state</Checkbox>
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>
<div class="flex flex-col gap-4">
  <Checkbox disabled>Disabled checkbox</Checkbox>
  <Checkbox disabled checked>Disabled checked</Checkbox>
  <Checkbox disabled indeterminate>Disabled indeterminate</Checkbox>
</div>

<h2 class="my-4 text-2xl">Alternative syntax</h2>
<div class="flex flex-col gap-4">
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
</div>

<h2 class="my-4 text-2xl">Checkbox with a link</h2>
<div>
  <Checkbox>
    I agree with the
    <a href="/" class="text-primary-600 dark:text-primary-500 ms-1 hover:underline">terms and conditions</a>
    .
  </Checkbox>
</div>

<h2 class="my-4 text-2xl">Helper text</h2>
<div>
  <Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>
  <Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</div>

<h2 class="my-4 text-2xl">Bordered</h2>
<div>
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Checkbox class="w-full p-4">Default radio</Checkbox>
  </div>
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Checkbox checked class="w-full p-4">Checked state</Checkbox>
  </div>
</div>

<h2 class="my-4 text-2xl">Checkbox list group</h2>
<div>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
  <Listgroup class="w-48">
    <li><Checkbox class="p-3">svelte</Checkbox></li>
    <li><Checkbox class="p-3">Vue JS</Checkbox></li>
    <li><Checkbox class="p-3">React</Checkbox></li>
    <li><Checkbox class="p-3">Angular</Checkbox></li>
  </Listgroup>

  <p class="my-2">Choices: {group.join(", ")}</p>
  <Listgroup class="w-48">
    <Checkbox bind:group {choices} class="p-3" />
  </Listgroup>
</div>

<h2 class="my-4 text-2xl">Horizontal list group</h2>
<div>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
  <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
    <li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
    <li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
  </ul>
</div>

<h2 class="my-4 text-2xl">Checkbox dropdown</h2>
<div class="flex h-96 items-start justify-center">
  <Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown>
    <div class="p-3">
      <Search size="md" />
    </div>
    <DropdownGroup class="h-48 overflow-y-auto">
      <DropdownItem>
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem>
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem>
        <Checkbox checked>Bonnie Green</Checkbox>
      </DropdownItem>
      <DropdownItem>
        <Checkbox>Jese Leos</Checkbox>
      </DropdownItem>
      <DropdownItem>
        <Checkbox>Robert Gouth</Checkbox>
      </DropdownItem>
      <DropdownItem>
        <Checkbox>Bonnie Green</Checkbox>
      </DropdownItem>
    </DropdownGroup>
    <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
      <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
    </a>
  </Dropdown>
</div>

<h2 class="my-4 text-2xl">Inline layout</h2>
<div>
  <div class="flex gap-3">
    <Checkbox>Inline 1</Checkbox>
    <Checkbox>Inline 2</Checkbox>
    <Checkbox checked>Inline checked</Checkbox>
    <Checkbox disabled>Inline disabled</Checkbox>
  </div>

  <div class="mt-4">
    <Checkbox inline class="me-2">Inline 1</Checkbox>
    <Checkbox inline class="me-2">Inline 2</Checkbox>
    <Checkbox inline class="me-2" checked>Inline checked</Checkbox>
    <Checkbox inline class="me-2" disabled>Inline disabled</Checkbox>
  </div>
</div>

<h2 class="my-4 text-2xl">Colors</h2>
<div>
  <div class="flex gap-4">
    <Checkbox checked color="red">Red</Checkbox>
    <Checkbox checked color="green">Green</Checkbox>
    <Checkbox checked color="purple">Purple</Checkbox>
    <Checkbox checked color="teal">Teal</Checkbox>
    <Checkbox checked color="yellow">Yellow</Checkbox>
    <Checkbox checked color="orange">Orange</Checkbox>
    <Label class="flex items-center">
      <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
      Your custom color
    </Label>
  </div>
</div>

<h2 class="my-4 text-2xl">CheckboxButton</h2>
<div class="space-y-4">
  <div>
    <CheckboxButton bind:group value="Apple"><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton bind:group value="Facebook"><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
    <CheckboxButton bind:group value="Discord"><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
    <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
  </div>

  <ButtonGroup>
    <CheckboxButton bind:group value="Apple"><AppleSolid class="h-6 w-6" />Apple</CheckboxButton>
    <CheckboxButton bind:group value="Facebook"><FacebookSolid class="h-6 w-6" />Facebook</CheckboxButton>
    <CheckboxButton bind:group value="Discord"><DiscordSolid class="h-6 w-6" />Discord</CheckboxButton>
    <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="h-6 w-6" />Dropbox</CheckboxButton>
  </ButtonGroup>
</div>

<h2 class="my-4 text-2xl">Advanced layout</h2>
<div>
  <p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
  <div class="grid w-full gap-6 md:grid-cols-3">
    <Checkbox custom>
      <div class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <!-- React icon would go here -->
        <div class="w-full text-lg font-semibold">React Js</div>
        <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <!-- Vue icon would go here -->
        <div class="w-full text-lg font-semibold">Vue Js</div>
        <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
      </div>
    </Checkbox>
    <Checkbox custom>
      <div class="peer-checked:border-primary-600 w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 peer-checked:text-gray-600 hover:bg-gray-50 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:peer-checked:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300">
        <!-- Angular icon would go here -->
        <div class="w-full text-lg font-semibold">Angular</div>
        <div class="w-full text-sm">A TypeScript-based web application framework.</div>
      </div>
    </Checkbox>
  </div>
</div>

<h2 class="my-4 text-2xl">Group variable</h2>
<div>
  <div class="flex gap-2">
    <Checkbox name="flavours" choices={choicesNumbers} bind:group={groupNumbers} />
  </div>
  <div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">Group: {groupNumbers}</div>
  <Button onclick={() => (groupNumbers.length = 0)}>Clear</Button>
</div>
